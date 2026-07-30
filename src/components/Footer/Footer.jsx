import "./Footer.css"
import { assets } from "../../assets/assets"

function Footer() {
  return(
    <footer className="footer">
      <div className="footer-container">
        <div className="top-footer">
          <div className="footer-title-social-media">
            <div className="footer-title-name">
              <div className="footer-image-logo">
                <img src={assets.logo} alt="Envoice Logo" />
              </div>
              
              <p>An Invoice Payment</p>
            </div>

            <div className="social-media-logos">
              <div className="social-media-icon">
                <img src={assets.fb} alt="Facebook Logo" />
              </div>

              <div className="social-media-icon">
                <img src={assets.x} alt="X Logo" />
              </div>

              <div className="social-media-icon">
                <img src={assets.linkedin} alt="LinkedIn Logo" />
              </div>

              <div className="social-media-icon">
                <img src={assets.insta} alt="Intasgram Logo" />
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-link-container">
              <h3>Company</h3>

              <ul className="links-container">
                <li className="link"><a href="#">About Us</a></li>
                <li className="link"><a href="#">Our Vision</a></li>
                <li className="link"><a href="#">Our Mission</a></li>
                <li className="link"><a href="#">FAQs</a></li>
              </ul>
            </div>

            <div className="footer-link-container">
              <h3>What We Do</h3>

              <ul className="links-container">
                <li className="link"><a href="#">Features</a></li>
                <li className="link"><a href="#">Pricing</a></li>
                <li className="link"><a href="#">Bills Payments</a></li>
                <li className="link"><a href="#">Expenses Tracker</a></li>
                <li className="link"><a href="#">Loans</a></li>
              </ul>
            </div>

            <div className="footer-link-container">
              <h3>Business</h3>

              <ul className="links-container">
                <li className="link"><a href="#">Google Sheets</a></li>
                <li className="link"><a href="#">Invoice Payment</a></li>
                <li className="link"><a href="#">Integrations</a></li>
                <li className="link"><a href="#">Invoice Generation</a></li>
                <li className="link"><a href="#">Book-keeping</a></li>
              </ul>
            </div>

            <div className="footer-link-container">
              <h3>Resources</h3>

              <ul className="links-container">
                <li className="link"><a href="#">Help Center</a></li>
                <li className="link"><a href="#">Know More</a></li>
                <li className="link"><a href="#">Partnership</a></li>
                <li className="link"><a href="#">ATM Card</a></li>
                <li className="link"><a href="#">KYC Investment</a></li>
                <li className="link"><a href="#">Blog</a></li>
              </ul>
            </div>
          </div>

        </div>
        

        <div className="bottom-footer">
          <p>@2026copyright</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer