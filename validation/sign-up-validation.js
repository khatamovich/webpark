import * as Yup from "yup";

const schema = Yup.object({
	name: Yup.string()
		.max(50, "Разрешается использовать максимум 50 символов")
		.required("Пожалуйста, укажите ваше имя"),
	email: Yup.string().email("Неверный адрес электронной почты"),
	phone: Yup.string()
		.matches(
			/(?:\+\([9]{2}[8]\)[0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2})/,
			"Введите верный номер телефона"
		)
		.required("Пожалуйста введите номер телефона"),
});

export default schema;
