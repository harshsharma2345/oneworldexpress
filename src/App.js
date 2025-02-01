import { React, useState } from "react";
import "./App.css";
import mslogo from "./assets/mslogo.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="parent">
      <div className="containers">
        <div className="container"></div>
        <div className="sideContainer">
          <div className="form">
            <div className="header">
              <h2>Sign up</h2>
              <p>
                Let's get you all set up so you can access your personal
                account.
              </p>
            </div>
            <div className="formFields">
              <div className="field">
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>
              <div className="field">
                {" "}
                <label htmlFor="">Password</label>
                <input
                  type={toggle ? "password" : "text"}
                  placeholder="12+ Characters, mix letters, numbers & symbols"
                />
                {toggle ? (
                  <VisibilityOffIcon
                    className="passwordHideShow"
                    onClick={() =>
                      !toggle ? setToggle(true) : setToggle(false)
                    }
                  />
                ) : (
                  <VisibilityIcon
                    className="passwordHideShow"
                    onClick={() =>
                      !toggle ? setToggle(true) : setToggle(false)
                    }
                  />
                )}
              </div>
              <div className="field">
                {" "}
                <label htmlFor="">Confirm Password</label>
                <input type="text" />
              </div>
            </div>
            <div className="submitButton">
              <h6>Submit</h6>
            </div>
            <div className="bottomPieces">
              <h6>
                Already have an account.{" "}
                <span style={{ color: "red" }}>Login</span>
              </h6>
              <div className="orTextContainer">
                <div className="flatBorder"></div>
                <p className="orText">Or Sign up with</p>
                <div className="flatBorder"></div>
              </div>
              <div className="oAuth">
                <div className="authBoxes">
                  <img src={mslogo} alt="" />
                </div>
                <div className="authBoxes">
                  <img src={mslogo} alt="" />
                </div>
                <div className="authBoxes">
                  <img src={mslogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
