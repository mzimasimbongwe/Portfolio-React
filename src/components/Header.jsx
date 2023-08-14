

const Header = () => {
  return (
    <header className="header">
      <a href="https://www.youtube.com/watch?v=Tkp3FDgOueM&t=0s&ab_channel=Codehal" className="header__logo">
        Mzimasi Mbongwe
      </a>

      <div className="header__menu menu">
        <div className="menu__icon">
          <span></span>
        </div>
        <nav className="menu__body">
          <ul className="menu__list">
            <li>
              <a href="home" data-goto="home" className="menu__link">Home</a>
            </li>
            <li>
              <a href="about" data-goto="about" className="menu__link">About</a>
            </li>
            <li>
              <a href="#" data-goto="services" className="menu__link">Services</a>
            </li>
            <li>
              <a href="#" data-goto="portfolio" className="menu__link">Portfolio</a>
            </li>
            <li>
              <a href="#" data-goto="contact" className="menu__link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
