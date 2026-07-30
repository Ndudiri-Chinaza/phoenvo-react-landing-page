import { assets } from "../../assets/assets"
import FeatureCard from "../FeatureCard/FeatureCard.jsx"
import "./FeatureSection.css"

function FeatureSection() {
  return(
    <div className="features">
      <div className="features-header">
        <h1>All in one invoice solution</h1>
        <p>Customize your business journey effortlessly with invoice dashboard</p>
      </div>

      <div className="features-grid">
        <div className="features-card-container">

          <FeatureCard
          icon = {assets.onlineLearning}
          title = "Online Invoice Payment"
          description = "Automate repetitive task and focus on growing your business"
          />

          <FeatureCard
          icon = {assets.mentoring}
          title = "Account Management and Support"
          description = "Automate repetitive task and focus on growing your business"
          />

          <FeatureCard
          icon = {assets.payment}
          title = "Easy and Fast Payment"
          description = "Automate repetitive task and focus on growing your business"
          />

        </div>

        <div className="features-card-container">
          <FeatureCard
          icon = {assets.payment}
          title = "Business Management"
          description = "Automate repetitive task and focus on growing your business"
          />

          <FeatureCard
          icon = {assets.invoice}
          title = "Invoice Tracking"
          description = "Automate repetitive task and focus on growing your business"
          />

          <FeatureCard
          icon = {assets.brochure}
          title = "Automated Invoice"
          description = "Automate repetitive task and focus on growing your business"
          />

        </div>
        
      </div>

    </div>
  )
}
export default FeatureSection