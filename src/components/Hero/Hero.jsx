import { assets } from "../../assets/assets"
import "./Hero.css"


function Hero(props) {
  return(
    <section className="heroSection" id="hero">
      <div className="hero">
        <div className="titleDescripButton">
          <div className="titleDescription">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>

          <div className="heroButton">
            <button className="getStarted">{props.btn.btn1}</button>
            <button className="howItWorks">{props.btn.btn2}</button>
          </div>
        </div>

        <div className="bottom-hero">
          <div className="heroImage">
            <img src={assets.deskTop} alt="dashboard" />
          </div>
        </div>
        
      </div>

    </section>
    
  )
}
export default Hero