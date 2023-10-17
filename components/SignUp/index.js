import SignUpField from "./SignUpField";
import { useFormik } from "formik";
import schema from "../../validation/sign-up-validation";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

const SignUp = ({ config }) => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);

	const disableMessage = (time) =>
		setTimeout(() => {
			setSuccess(null);
		}, time);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
		},
		validationSchema: schema,
		onSubmit: async (values) => {
			setLoading(true);

			try {
				const response = await emailjs.send(
					config.service_id,
					"template_m74e181",
					values,
					config.access_token
				);

				if (!(await response.status) == 200) {
					setSuccess(await response);
					setLoading(false);
					formik.resetForm();

					disableMessage(6000);
					return;
				}

				setSuccess(true);
				setLoading(false);
				formik.resetForm();
				disableMessage(6000);
			} catch (err) {
				setSuccess(false);
				setLoading(false);
				disableMessage(6000);
			}
		},
	});

	return (
		<form className="sign-up" onSubmit={formik.handleSubmit}>
			<h2 className="sign-up__title">Обратная связь</h2>

			<SignUpField
				label="*Ваше имя"
				name="name"
				value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				touched={formik.touched}
				errors={formik.errors}
			/>
			<SignUpField
				label="Ваша электронная почта"
				name="email"
				value={formik.values.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				touched={formik.touched}
				errors={formik.errors}
			/>
			<SignUpField
				label="*Ваш номер телефона"
				name="phone"
				value={formik.values.phone}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				touched={formik.touched}
				errors={formik.errors}
			/>

			<input
				className={`sign-up__submit btn ${loading ? "loading" : ""}`}
				type="submit"
				value={loading ? "Отправляется..." : "Отправить"}
				disabled={loading}
			/>

			{success === true && (
				<div className="submit-status">
					<h3 className="submit-status__title success">
						Сообщение успешно отправлено
					</h3>
					<p className="submit-status__para">
						Благодарим вас за обращение к нам, в скором времени наши
						специалисты свяжутся с вами.
					</p>
				</div>
			)}

			{success === false && (
				<div className="submit-status">
					<h3 className="submit-status__title failed">
						Не удалось отправить сообщение
					</h3>
					<p className="submit-status__para">
						По неизвестным причинам не удалось отправить ваше
						сообщение, это может быть связано с техническими
						неполадками, попробуйте отправить сообщениеv позже.
					</p>
				</div>
			)}
		</form>
	);
};

export default SignUp;
