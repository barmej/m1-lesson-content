import logo from '../images/logo.svg';
const Login = function render() {
    return `<section class="login">
        <img class="logo" src="${logo}" width="126">
        <form id="loginForm" method="POST">
            <span class="form-field">
                <label for="email">البريد الإلكتروني</label>
                <input required type="email" id="email" />
            </span>
            <span class="form-field">
                <label for="password">كلمة السر</label>
                <input type="password" id="password" />
            </span>
            <span class="form-field">
                <input required type="submit" value="تسجيل الدخول" />
                <a class="form-switch" href="#/register">إنشاء حساب جديد</a>
            </span>
        </form>
    </section>`
}
export default Login;