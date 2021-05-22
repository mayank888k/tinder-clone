import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./swipebtn.css";
import ReplayIcon from "@material-ui/icons/Replay";
import ClearIcon from "@material-ui/icons/Clear";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import GradeIcon from "@material-ui/icons/Grade";
import Heart from "react-animated-heart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSound from 'use-sound';
import thunder from './thunder.mp3';

const SwipeButtons = () => {
  const replay = (e) => {
    console.log("Reset");
  };
  const [click, setClick] = useState(false);

  const [play] = useSound(thunder);

  const notify = () =>
    toast("Yeah, A Star ✨", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  

  return (
    <div className="swipeButtons">
      <form>
        <IconButton type="submit" onClick={replay} className="swipe__shadow">
          <ReplayIcon htmlColor="#f5b748"></ReplayIcon>
        </IconButton>
      </form>
      <IconButton className="swipe__shadow">
        <ClearIcon htmlColor="#ec5e6f" />
      </IconButton>
      <IconButton onClick={notify} className="swipe__shadow">
        <GradeIcon htmlColor="#62b4f9" />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </IconButton>
      <IconButton className="swipe__shadow">
        <FavoriteIcon />
        <div className="swipe__Heart">
          <Heart isClick={click} onClick={() => setClick(!click)} />
        </div>
      </IconButton>
      <IconButton onClick={play} className="swipe__shadow">
        <FlashOnIcon htmlColor="#915dd1" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
