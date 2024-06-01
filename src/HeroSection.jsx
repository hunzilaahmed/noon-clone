import React from "react";
import noonFirst from "./assets/noon1.png";
import pakistan from "./assets/pakistan.jpg";
import sale from "./assets/sale.png";
import psl from "./assets/psl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <>
      <div className="First-div">
        <h3>
          <span className="cash">15% CashBack +</span>{" "}
          <span className="delivery">Free delivery </span>{" "}
          <span className="order">on your First order</span>{" "}
        </h3>
        <img className="img-ford" src={noonFirst} alt="" />
        <h3>
          {" "}
          Use code: <span className="First-15">FIRST15 </span>{" "}
          <span className="apply">*T&Cs apply</span>
        </h3>
      </div>
      <div className="second-div">
        <div>
          <a
            target="_blank"
            href="https://www.google.com/search?sca_esv=39fe838dd1fc7b64&sca_upv=1&rlz=1C1CHZN_enPK1081PK1081&hl=en&sxsrf=ADLYWIIG1r7wggEMSHnP8ptd9_tYgcdgKg:1716637119387&q=pakistan+vs+india+2021&source=lnms&uds=ADvngMgNG4qWEcyOv6mZ7d9R1NXim6k9NbI0gKa7Gb47NMCEFgU6CkHQmgKN45qmLAk6zKM2X8dwY936nLU_dtRE5LEVORzd_m-XF_qi9AcXG2ea2cC1N1pzqKtSeDjLZj9a7fWAcn7T7sSqNoPrtEn6u_tLrG4m4y9ixz7QBc1C91iz4LqctxlZ0axo394haKmSddPvyIzP-4dkbdb58OKBUflI9TpqwBLhKQc_GRlqACC-Y5d-yLpSW0Tz2r9GRNt-ZYMdAJo37sNpyk55Xfoj26pI4MBNKjigEeJgrmNAHJuZbrKyQ2UfRmH1yiTKLSc7iw4Ob9fJ&sa=X&ved=2ahUKEwiJ6dXN26iGAxXIbvEDHQ85AywQ0pQJegQIERAB&biw=1536&bih=730&dpr=1.25#sie=m;/g/11p00bkgsr;5;/m/026y268;dt;fp;1;;;"
          >
            <img src={pakistan} alt="" srcset="" className="pak-win" />
          </a>
        </div>
        <div>
          <img src={sale} alt="" srcset="" className="sale" />
        </div>
      </div>
      <div className="divs">
        <div className="circle-img">
          <img src={psl} alt="" className="psl" />
          {/* <span className="hello">hello</span> */}
          <h1 className="colors">
            <span className="mens"> mens</span>
          </h1>
          <h1 className="colors">
            <span className="mens"> mens</span>
          </h1>
          <h1 className="colors">
            <span className="mens"> mens</span>
          </h1>
          <h1 className="colors">
            <span className="mens"> mens</span>
          </h1>
          <h1 className="colors">
            <span className="mens"> mens</span>
          </h1>
          <h1 className="colors">
            <span className="mens"> mens</span>
          </h1>
          <h1 className="colors">
            <span className="mens"> mens</span>
          </h1>
          <h1 className="colors">
            <span className="mens"> mens</span>
          </h1>
          <h1 className="colors">
            <span className="mens"> mens</span>
          </h1>
          <h1 className="colors">
            <span className="mens"> mens</span>
          </h1>
          <FontAwesomeIcon icon={faChevronRight} className="right" />
        </div>
        <div className="categories"></div>
      </div>
    </>
  );
}
export default Hero;
