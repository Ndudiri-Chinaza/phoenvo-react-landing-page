import "./FeatureCard.css"

function FeatureCard(props) {
  return(
    <div className="feature-card">
      <div className="feature-card-icon">
        <img src={props.icon} alt={props.title} />
      </div>

      <div className="feature-card-text-container">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
export default FeatureCard