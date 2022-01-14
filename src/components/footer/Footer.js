import twitter from "../../resources/img/twitter.svg";
import discord from "../../resources/img/discord.svg";
import telegram from "../../resources/img/telegram.svg";
import instagram from "../../resources/img/instagram.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer__icons">
          <a className="footer__icons-link" href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a className="footer__icons-link" href="#">
            <img src={discord} alt="discord" />
          </a>
          <a className="footer__icons-link" href="#">
            <img src={telegram} alt="telegram" />
          </a>
          <a className="footer__icons-link" href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div className="footer__text">
          <a className="footer__text-link" href="#">
            Smart contract
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
