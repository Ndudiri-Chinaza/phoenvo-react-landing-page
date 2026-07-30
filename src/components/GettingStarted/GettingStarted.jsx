import { assets } from "../../assets/assets"
import "./GettingStarted.css"

function GettingStarted() {
  return(
    <section className="getting-started">
      <div className="getting-started-container">
        <div className="getting-started-header">
          <div className="getting-started-title-description-container">
            <h1>How to get started</h1>
            <p>Customize your business workflow with an intuitive invoicing dashboard designed to help you create, manage, and track invoices effortlessly.</p>
          </div>

          <div className="getting-started-button-container">
            <button>Get Started</button>
          </div>
        </div>

        <div className="getting-started-image-container">
          <img src={assets.enphone} alt="Gettinf started image" />
        </div>

        <div className="getting-started-steps">
          <div className="getting-started-step-card">
            <div className="step">
              <p>Step 1</p>
            </div>

            <div className="step-instruction">
              <h2>Sign Up with Email</h2>
              <p>Create your account in seconds and access your personalized invoicing dashboard.</p>
            </div>
          </div>

          <div className="getting-started-step-card">
            <div className="step">
              <p>Step 2</p>
            </div>

            <div className="step-instruction">
              <h2>Add Your Customers</h2>
              <p>Save customer details once and quickly select them whenever you create a new invoice.</p>
            </div>
          </div>

          <div className="getting-started-step-card">
            <div className="step">
              <p>Step 3</p>
            </div>

            <div className="step-instruction">
              <h2>Create Invoice</h2>
              <p>Generate professional invoices in minutes and send them directly to your customers.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default GettingStarted