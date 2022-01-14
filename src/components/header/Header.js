import "./header.scss";
const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Game
          </a>
          <a className="nav-link" href="#">
            Vault
          </a>
          <a className="nav-link" href="#">
            Scoreboard
          </a>
          <button className="button button__primary">Connect wallet</button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
