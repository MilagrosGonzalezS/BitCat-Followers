import cats from "../imgs/cats.webp";
import twitter from "../imgs/twitter.webp";
import telegram1 from "../imgs/telegram1.webp";
import telegram2 from "../imgs/telegram2.webp";
import discord from "../imgs/discord.webp";

function SocialMedia() {
  return (
    <div>
      <div className="social-media" id="social-media">
        <div className="cats-social-media">
          <p>
            Participate in promotions and rewards, get the latest news about
            product launches and upgrades
          </p>
          <img src={cats} alt="cats in space with guns" />
        </div>
        <div className="social-media-half">
          <h4 className="channels-title">.</h4>
          <ul className="social-media-list">
            <li>
              <a
                href="https://twitter.com/bitcatgame"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="twitter logo" />
                <p className="principal">Twitter</p>
              </a>
            </li>
            <li>
              <a href="https://discord.gg/P2gP6P5knx">
                <img src={discord} alt="discord logo" />
                <p className="principal">Discord</p>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/bitcatgame"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegram1} alt="telegram logo" />
                <p className="principal">Telegram (channel)</p>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/bitcatnews"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegram2} alt="telegram logo" />
                <p className="principal">Telegram group</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
