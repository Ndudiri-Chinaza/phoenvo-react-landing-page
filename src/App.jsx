import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import FeatureSection from "./components/FeatureSection/FeatureSection.jsx";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection.jsx";
import CTASection from "./components/CTA/CTASection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SocialProof from "./components/SocialProof/SocialProof.jsx";
import GettingStarted from "./components/GettingStarted/GettingStarted.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Discover the Future of Invoice Payment Solution Today"
        description="Automate your financial processes and get paid faster with using our automated invoices generated system"
        btn={{ btn1: "Get started", btn2: "How it works" }}
      />
      <FeatureSection />
      <SocialProof />
      <GettingStarted />
      <TestimonialSection />
      <CTASection
        heading="Simplify your finances with our powerful invoice payment system!"
        text="Automate your financial processes and get paid faster with usinng our automated invoice generated, to get started with us now and do your business effortlessly with your customers."
        buttonText="Get started"
      />
      <Footer />
    </div>
  );
}
export default App;
