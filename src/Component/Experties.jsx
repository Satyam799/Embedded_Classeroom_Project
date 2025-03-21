import { TypeAnimation } from "react-type-animation";
import "./Experties.css";

function Experties() {
  return (
    <div className="Eexperties">
      <div className="Eheader">
        <p>⭐Our Expertise Covers⭐</p>
      </div>
      <div className="cover">
        <p>🔌 Microcontrollers & Arduino</p>
        <p>💻 Embedded C & Firmware Development</p>
        <p>🚗 IoT & Automotive Electronics</p>
      </div>
      <div className="cover2">
        <p className="cover3">
          {" "}
          At Embedded Classroom, we believe in a simple yet powerful approach:
          Learn, Build, and Innovate. Whether you're a beginner taking your
          first steps into embedded systems or an engineering student looking
          for hands-on experience, we are here to support your journey.
        </p>
      </div>
      <TypeAnimation
        className="new4"
        sequence={[
          "🚀 Stay ahead in embedded technology! Subscribe to our updates and never miss an opportunity to learn.",
          100,
          "💥 Stay ahead in embedded technology! Subscribe to our updates and never miss an opportunity to learn.",
          100
        
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "1em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
}

export default Experties;
