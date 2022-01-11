import twitter from "../../resources/img/twitter.png";
import discord from "../../resources/img/discord.png";
import telegram from "../../resources/img/telegram.png";
import instagram from "../../resources/img/instagram.png";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <a href="">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="">
          <img src={discord} alt="discord" />
        </a>
        <a href="">
          <img src={telegram} alt="telegram" />
        </a>
        <a href="">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="">Smart contract</a>
      </footer>
    </div>
  );
};

export default Footer;
