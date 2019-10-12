import logo from '../images/logo.svg';
const Footer = function render() {
    return `<div class="container">
        <a class="navbar-logo grayscale" href="#/"><img src="${logo}" width="80"></a>
        <ul class="navbar-menu">
            <li><a class="navbar-item" href="#/">الرئيسية</a></li>
            <li><a class="navbar-item" href="#/movies">أفلام</a></li>
            <li><a class="navbar-item" href="#/shows">مسلسلات</a></li>
        </ul>
        <a class="navbar-item logout" href="#/logout">تسجيل الخروج</a>
    </div>`;
}
export default Footer;