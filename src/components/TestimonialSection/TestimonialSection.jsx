import { assets } from "../../assets/assets"
import TestimonialCard from "../TestimonialCard/TestimonialCard"
import "./TestimonialSection.css"

function TestimonialSection() {
  return(
    <div className="testimonials">
      <div className="testimonials-header">
        <h1>What Our User Say</h1>
        <p>Hear from our customers and see what they say about using our services to get ahead of their customers payment</p>
      </div>

      <div className="testimonials-grid">
        <TestimonialCard
         message = "Envoice has revolutionized the way i manage my finances. With their intuitive platform, I can easily track my expenses and make payments."
         avatar = {assets.drAdamson}
         name = "Dr Adamson"
         role = "Co-Founder of Uplink"
         className = "adam-card"
         up = "adam-top"
         bio = "adam-bio"
         text = "adam-text"
        />

        <TestimonialCard
         message = "Envoice has revolutionized the way i manage my finances. With their intuitive platform, I can easily track my expenses and make payments."
         avatar = {assets.drEliza}
         name = "Dr Elizabeth"
         role = "CEO and Founder of Uplink"
         className = "eliza-card"
         up = "eliza-top"
         bio = "eliza-bio"
         text = "eliza-text"
        />
      </div>
    </div>
  )
}
export default TestimonialSection