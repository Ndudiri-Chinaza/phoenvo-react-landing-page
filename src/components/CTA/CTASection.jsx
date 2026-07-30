import { assets } from "../../assets/assets"
import "./CTASection.css"

function CTASection(props) {
  return(
    <div className="cta-section">
      <div className="cta-container">
        <div className="top-cta">
          <div className="cta-title-description-container">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
          </div>

          <div className="cta-button-container">
            <button className="cta-button">{props.buttonText}</button>
          </div>
        </div>

        <div className="bottom-cta">
          <img src={assets.primaryAcct} alt="primary account" />
        </div>
      </div>
    </div>
    
  )
}
export default CTASection