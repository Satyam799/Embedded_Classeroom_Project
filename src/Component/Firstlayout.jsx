import "./Firstlayout.css";
import { MdOutlineArrowRight } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { BiLogoGmail } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";

import image from "../assets/WhatsAp.jpeg";
import { FaWhatsappSquare } from "react-icons/fa";
import file2 from '../assets/Embadded_classroom_QR_code.png'

import { Uppost } from "./Context";

function Firstlayout() {
  const { href } = Uppost();
  async function handelQR(e){
    e.preventDefault()
    try {
      // Get the QR image element
      // const imgElement = document.getElementById(file2); // Ensure your QR image has this ID
  
      // // Convert image to Blob
       const response = await fetch(file2);
       const blob = await response.blob();
      const file = new File([blob], "QR_Code.png", { type: blob.type });
  

    if(navigator.share){
      await navigator.share({
        title: "Check out our QR Code!",
        text: "Scan this QR code to visit our website.",
        files: [file], // Attach QR file
      })
    }else{
      alert("Sharing is not supported on this browser.");

    } 
  }catch (error) {
      console.error("Error sharing:", error);
    }
  }

  return (
    <>
      <div className="main" ref={href}>
        <div className="firstlayout">
          <p className="welcome">Welcome to Embedded Classroom! 👋</p>
          <h2 className="stylingh">
            Master <span className="tripathi">Embedded Systems!</span>{" "}
          </h2>
          <p className="new2">
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <TypeAnimation
                sequence={[
                  "📚 LEARN   🛠️ BUILD    🚀 INNOVATE.",
                  1000,
                

                ]}
                wrapper="span"
                speed={50}
                className="type"
                repeat={Infinity}
              />

              {/* CSS Animations */}
              <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes flicker {
            0% { opacity: 1; text-shadow: 0 0 10px rgba(255, 0, 0, 0.8); }
            50% { opacity: 0.8; text-shadow: 0 0 20px rgba(255, 0, 0, 0.6); }
            100% { opacity: 1; text-shadow: 0 0 10px rgba(255, 0, 0, 0.8); }
          }

          @keyframes scaleUp {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}
              </style>
            </div>
          </p>
          <div className="socialmedia">
            <a
              href="https://www.facebook.com/share/1QZY6DkX9z/"
              target="_blank"
            >
              <FaFacebook size={30} className="instagramlogo" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info.embeddedclassroom@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGmail size={30} className="instagramlogo" />
            </a>

            <a
              href="https://www.linkedin.com/company/embedded-classroom/"
              target="_blank"
            >
              <FaLinkedinIn size={30} className="instagramlogo" />
            </a>
            <IoLogoGithub size={30} className="instagramlogo" />
            <CiShare2 size={30} className="instagramlogo" onClick={handelQR}/>

          </div>
        </div>

        <div className="Image_adjustment">
          <img className="img" src={image} alt="No Image forund" />
        </div>
      </div>
      <div className="wats">
        <a
          href="https://whatsapp.com/channel/0029Vb72St4CRs1qsAeLVi1Z"
          target="_blank"
        >
          <FaWhatsappSquare size={60} color="yellow" />
        </a>
      </div>
    </>
  );
}

export default Firstlayout;
