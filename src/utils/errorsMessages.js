const ERROR400Signin = "Вы ввели неправильный логин или пароль";
const ERROR401Signin = "При авторизации произошла ошибка. Токен не передан или передан не в том формате";
const ERROR403Signin = "При авторизации произошла ошибка. Переданный токен некорректен";
const ERROR400Signup = "При регистрации пользователя произошла ошибка";
const ERROR400Profile = "При обновлении профиля произошла ошибка";
const ERROR409 = "Пользователь с таким email уже существует";
const ERROR500 = "На сервере произошла ошибка";
const ERROR404 = "Страница по указанному маршруту не найдена";
const ERROR_SEARCH = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
const ERROR_TOKEN = "Проблема с токеном";
const ERROR_EDIT_PROFILE = "Для внесения изменений необходимо ввести отличающиеся от текущих данные";
const ERROR_NAME = "Необходимо ввести более 2 и менее 30 символов";
const ERROR_PASSWORD = "Необходимо ввести более 8 и менее 15 символов";
const ERROR_EMAIL = "Введенные данные не соответствуют формату электронной почты";

module.exports = {
    ERROR400Signin,
    ERROR401Signin,
    ERROR403Signin,
    ERROR400Signup,
    ERROR400Profile,
    ERROR409,
    ERROR500,
    ERROR404,
    ERROR_SEARCH,
    ERROR_TOKEN,
    ERROR_EDIT_PROFILE,
    ERROR_NAME,
    ERROR_PASSWORD,
    ERROR_EMAIL
};
