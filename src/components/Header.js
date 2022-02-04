import logo from "../images/header-logo.png";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img className="header-logo" src={logo} alt="React Logo" />
        <p className="header-text">React Course - Project 1</p>
      </div>
    </header>
  );
}

export default Header;
