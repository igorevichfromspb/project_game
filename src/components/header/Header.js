import "./header.scss";
const Header = () => {
  return (
    <div className="container">
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
        <button className="button button-primary">Connect wallet</button>
      </nav>
    </div>
  );
};

export default Header;
