import "./TestimonialCard.css"

function TestimonialCard(props) {
  return(
    <div className={`testimonial-card ${props.className}`}>
      <div className={`testimonial-card-text ${props.text}`}>
        <p>{props.message}</p>
      </div>

      <div className={`testimonial-user-details ${props.up}`}>
        <div className="testimonial-user-image-container">
          <img src= {props.avatar} alt={props.name} />
        </div>

        <div className={`user-bio-container ${props.bio}`}>
          <h3>{props.name}</h3>
          <p>{props.role}</p>
        </div>
      </div>
    </div>
  )
}
export default TestimonialCard