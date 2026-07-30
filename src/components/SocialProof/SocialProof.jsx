import { assets } from "../../assets/assets"
import "./SocialProof.css"

function SocialProof() {
  return (
    <div className="socialProof">
      <div className="socialProof-text">
        <h1>200+ fastest growing start up using Envoice</h1>
      </div>

      <div className="socialProof-companies">
        <div className="start-up-logos">
          <img src={assets.bolt} alt="bolt" />
        </div>

        <div className="start-up-logos">
          <img src={assets.lightBox} alt="lightbox" />
        </div>

        <div className="start-up-logos">
          <img src={assets.featherDev} alt="featherdev" />
        </div>

        <div className="start-up-logos">
          <img src={assets.spherule} alt="spherule" />
        </div>
      </div>
    </div>
  )

}
export default SocialProof