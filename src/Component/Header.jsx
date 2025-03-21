import "./Header.css";
import { FaIdCard } from "react-icons/fa";
import { Uppost } from "./Context";
import { GrTechnology } from "react-icons/gr";
import { FaMicrochip } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";
import image from "../assets/WhatsAp.jpeg";

function Header() {
  const { href, welcome, Offer } = Uppost();
  const [active, setactive] = useState(false);
  const [active2, setactive2] = useState(false);
  const [visible, setvisible] = useState(false);
  const [visible2, setvisible2] = useState(false);
  const [height, setheight] = useState(false);

  const [threeline, setthreeline] = useState(false);
  function handelhome(ref) {
    return ref?.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`Headers ${height ? "new5" : ""}`}>
      <div className="Headers2">
        <div className="perticular">
          <p>{`<`}</p>
          <p className="txt">{`Embedded ClassRoom`}</p>
          <div className="headerlogo">
            <img className="img5" src={image} alt="Unabme to display logo" />
          </div>
          <p>{"/>"}</p>
        </div>
        <div className="new">
          <div
            className="inlining"
            onMouseEnter={() => setactive(true)}
            onMouseLeave={() => setactive(false)}
          >
            <FaMicrochip className="iconcolor" size={30} />
            Microcontroller
            <div className={`subtabs ${active ? "" : "active"}`}>
              <Link className="link" to={"/Eductional"}>
                AVR
              </Link>
              <Link className="link">Arduino</Link>
              <Link className="link">ARM</Link>
            </div>
          </div>
          <div
            className="inlining"
            onMouseEnter={() => setactive2(true)}
            onMouseLeave={() => setactive2(false)}
          >
            <GrTechnology className="iconcolor" size={30} />
            Technology
            <div className={`subtabs ${active2 ? "" : "active"}`}>
              <Link
                className="link"
                to={"/About"}
                onClick={() => {
                  setactive(false);
                  setactive2(false);
                  setvisible(false);
                  setactive2(false);
                }}
              >
                IOT
              </Link>
              <Link className="link" to={"/Experties"}>
                Automotive
              </Link>
            </div>
          </div>
          <span className="inlining" onClick={() => handelhome(Offer)}>
            <FaIdCard className="iconcolor" size={30} />
            Project
          </span>
        </div>
        <div className=" iconsss">
          <TiThMenu
            size={30}
            color="white"
            onClick={() => {
              setthreeline(!threeline);
              setheight(!height);
              setvisible(false);
              setactive2(false);
            }}
          />
        </div>
      </div>
      <div className={`scrollmenu ${threeline ? "new4" : ""}`}>
        <div className="inlining2">
          <div className="iconss">
            <div className="iconss2">
              <FaMicrochip className="iconcolor" size={30} />
              Microcontroller
            </div>
            <div>
              <FaChevronDown
                size={30}
                color="yellow"
                onClick={() => {
                  setvisible(!visible);
                  setvisible2(false);
                }}
              />
            </div>
          </div>
          <div className={`subicons ${!visible ? "visible" : ""}`}>
            <Link
              className="link2"
              to={"/Eductional"}
              onClick={() => {
              }}
            >
              AVR
            </Link>
            <Link
              className="link2"
              onClick={() => {
              }}
            >
              Arduino
            </Link>
            <Link
              className="link2"
              onClick={() => {
              }}
            >
              ARM
            </Link>
          </div>
        </div>
        <div className="inlining2">
          <div className="iconss">
            <div className="iconss2">
              <GrTechnology className="iconcolor" size={30} />
              Technology
            </div>
            <FaChevronDown
              size={30}
              color="yellow"
              onClick={() => {
                setvisible2(!visible2);
                setvisible(false);
              }}
            />
          </div>

          <div className={`subicons ${!visible2 ? "visible" : ""}`}>
            <Link
              className="link2"
              to={"/About"}
            >
              IOT
            </Link>
            <Link
              className="link2"
              to={"/Experties"}
            >
              Automotive
            </Link>
          </div>
        </div>

        <div className="inlining2">
          <div className="iconss">
            <div className="iconss2">
              <FaIdCard className="iconcolor" size={30} />
              Project
            </div>
            <FaChevronDown
              size={30}
              color="yellow"
              // onClick={() => setvisible(!visible)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
