import Card_component from "./Card_component";
import { Uppost } from "./Context";
import "./Eduction.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import image3 from "../assets/images3.jpg";


function WhatWeOffer() {
  const { Offer } = Uppost();

  function handelclick(e) {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/Manoj Sakhare Resume.pdf";
    link.download = "Manoj Sakhare Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="edu" ref={Offer}>
      {/* Resume Download Button */}
      <div className="Eduction">
        <p>
          🎯 <span className="highlight">What We Offer</span> 🚀
        </p>
      </div>
      <div className="changing">
        <div className="changing2">
          {/* Workshops & Seminars */}
          <div className="education5">
            <p className="highlight normal">🛠️ Hands-On Workshops & Seminars</p>
            <Card_component
              heading={"🎤 Interactive Learning"}
              description={"Participate in expert-led workshops and seminars to enhance your practical knowledge."}
              subDescription={["✨ Learn by Doing! Experience immersive, hands-on education like never before.",
                "✅ Live Q&A Sessions – Ask questions and get instant answers 🎯",
                "✅ Hands-On Projects – Build real-world applications 💡",
                "🚀 Gain industry-relevant skills through real-time interaction!"]}
              img={image3}
            />
          </div>

          {/* Monthly Courses */}
          <div className="education5">
            <p className="highlight normal">📚 Expert-Led Monthly Courses</p>
            <Card_component
              heading={"📅 Learn at Your Pace"}
              description={"Engage in structured monthly courses to build expertise in embedded systems."}
              subDescription={["🎓 Comprehensive course material tailored for beginners to advanced learners.",
                "📖 Access to recorded sessions for flexible learning.",
                "📝 Regular assessments and feedback from industry experts.",
                "🏆 Certificate of completion to showcase your expertise!"]}
              img={image3}
            />
          </div>

          {/* Project-Based Learning */}
          <div className="education5">
            <p className="highlight normal">💡 Project-Based Learning </p>
            <Card_component
              heading={"🚀 Build, Innovate & Lead"}
              description={"Apply your learning to hands-on projects and gain real-world experience."}
              subDescription={["🛠️ Work on embedded system projects that solve real-world problems.",
                "🔍 Get mentorship from industry professionals.",
                "💡 Collaborate with peers and develop teamwork skills.",
                "📂 Build a portfolio that stands out in job applications!"]}
              img={image3}
            />
          </div>
        </div>
      </div>
      <div className="Resume">
        <button onClick={handelclick} className="buttondownload">
          📄 Download Resume <IoCloudDownloadOutline />
        </button>
      </div>
    </div>
  );
}

export default WhatWeOffer;
