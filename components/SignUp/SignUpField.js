import NumberFormat from "react-number-format";

const SignUpField = ({ label, ...props }) => {
	const { touched, errors, name } = props;

	return (
		<div className="sign-up-field">
			<label className="sign-up-field__label">{label}</label>

			{name === "phone" ? (
				<NumberFormat
					className="sign-up-field__input"
					type="text"
					format="+(998)## ###-##-##"
					mask="-"
					allowEmptyFormatting
					{...props}
				/>
			) : (
				<input className="sign-up-field__input" {...props} />
			)}

			{touched[name] && errors[name] ? (
				<p className="sign-up-field__error">{errors[name]}</p>
			) : null}
		</div>
	);
};

export default SignUpField;
