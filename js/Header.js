import logo from '../images/logo.svg';
const Header = function render() {
    const locationHash = window.location.hash;
    return `<div class="container">
        <button class="navbar-burger">
            <span class="navicon"></span>
        </button>
        <a class="navbar-item navbar-logo" href="#/"><img src="${logo}" width="80"></a>
        <ul class="navbar-menu">
            <li><a class="${(locationHash === "#/") ? 'navbar-item active' : 'navbar-item'}" href="#/">الرئيسية</a></li>
            <li><a class="${(locationHash === "#/movies") ? 'navbar-item active' : 'navbar-item'}" href="#/movies">أفلام</a></li>
            <li><a class="${(locationHash === "#/shows") ? 'navbar-item active' : 'navbar-item'}" href="#/shows">مسلسلات</a></li>
        </ul>
        <div class="navbar-search">
            <input class="searchInput" type="text" name="search" placeholder="إبحث عن فيلم أو مسلسل..." />
        </div>
    </div>`;
}
export default Header;