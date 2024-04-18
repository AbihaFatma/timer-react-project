import "./App.css";
import timer from "./images/timerlogo.png";
import profile from "./images/profile.png";
import black1 from "./images/black1.png";
import ff5 from "./images/ff5.png";
import i1 from "./images/i1.png";
import t1 from "./images/t1.png";
import y1 from "./images/y1.png";
import m3 from "./images/m3.png";
import c2 from "./images/c2.png";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function App() {
  const [toggle, setToggle] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width:520px)",
  });

  useEffect(() => {
    setToggle(false);
  }, [isMobile]);
  return (
    <div className="min-h-[100vh] min-w-[100vw] flex flex-col">
      <nav className="bg-[#69353f] h-[6rem] flex justify-between w-[100%] text-[white] pr-[2%] nav">
        <div className="h-[100%] flex justify-center items-center">
          <img className="h-[100%]" src={timer}></img>
          <h1 className="font-semibold text-[2rem]">Timer</h1>
        </div>

        <div className="h-[100%] flex justify-center items-center">
          <div>
            <li className="list-none flex  ">
              <a className="list">Home</a>
              <a className="list">Menu</a>
              <a className="list">Services</a>
              <a className="list">Stores</a>
              <a className="list">Contact</a>
            </li>
          </div>

          <div className="close_open">
            <img
              src={m3}
              onClick={() => setToggle(!toggle)}
              className={toggle ? "hidden" : ""}
            ></img>
            <img
              src={c2}
              onClick={() => setToggle(!toggle)}
              className={!toggle ? "hidden" : ""}
            ></img>
          </div>

          <img
            className="h-[60%] aspect-square profile_list"
            src={profile}
          ></img>
        </div>
      </nav>
      <div className="bg-[#cef7a0] px-[10%] flex justify-between flex-grow main">
        <div className={toggle ? "toggle" : "hidden"}>
          <div className="text-white flex justify-center h-[50%] pt-[10%] font-semibold text-[20px]">
            <li className="list-none flex flex-col">
              <a className="list my-[2rem]">Home</a>
              <a className="list my-[2rem]">Menu</a>
              <a className="list my-[2rem]">Services</a>
              <a className="list my-[2rem]">Stores</a>
              <a className="list my-[2rem]">Contact</a>
            </li>
          </div>
        </div>

        <div className="my-[auto]">
          <h1 className="font-bold text-[4rem]">Premium Designs</h1>
          <p className="font-semibold text-[1.5rem] my-[1rem]">
            Dive in to the world of luxury collection of smart watches
          </p>
          <p>
            Get the latest collection of Premium smart watches with multiple
            features.Prices starting from 10,999 only.
          </p>

          <div className="main_content">
            <button className="bg-[#524f4f] text-white p-[1rem] mt-[2rem] rounded-[2rem] text-[2rem] font-semibold">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center main_image">
          <img src={black1} className="h-[50%] aspect-square"></img>
        </div>
      </div>
      <div className="bg-[#69353f] text-white flex justify-between py-[1rem] footer">
        <div className="tracking-widest">
          <p>@All Reights Reserved2024@abihafatma</p>
        </div>
        <div>
          <div className="flex ">
            <img src={ff5} className=" w-[1.5rem] h-[1.5rem] mx-[2rem] "></img>
            <img src={i1} className=" w-[1.5rem] h-[1.5rem] mx-[2rem] "></img>
            <img src={t1} className=" w-[1.5rem] h-[1.5rem] mx-[2rem] "></img>
            <img src={y1} className=" w-[1.5rem] h-[1.5rem] mx-[2rem] "></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
