import { Button, IconButton, Tooltip } from "@material-ui/core";
import React, { useState } from "react";
import database from "../firebase";
import "./account.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import PublishIcon from "@material-ui/icons/Publish";
import { auth, provider } from "../firebase";
import HomeIcon from '@material-ui/icons/Home';
import { NavLink} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  
  const notify = () =>
    toast.dark("Fill All The Fields", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const signUp = () => {

    if(!name && !email && !password)
    {
      notify()
    }
    else{

      database.collection("people").add({
        name: name,
        email: email,
        password: password,
      });
    }
    setName("");
    setEmail("");
    setPassword("");
    setUser({
        displayName:name
    })
    setUser(null)
  };

  const signinGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const resp = database.collection("people").add({
          name: result.user.displayName,
          email: result.user.email,
          url: result.user.photoURL,
        });
        setUser(result.user);
        setName(result.user.displayName)
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(name)
  console.log(user)

  return (
    <div>
      <div className="account__body">
          {!user ? (
        <form className="login__body">
              <img
                src="https://i.pcmag.com/imagery/reviews/02ibIXDUJNJ3V7KL8jhUNFf-7..1569480464.png"
                alt="Logo"
                srcset=""
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                type="text"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="text"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                type="text"
              />

              <div className="buttons">
                <Button component="label">
                  <Tooltip title="Upload Your Image">
                    <AddAPhotoIcon />
                  </Tooltip>
                  {/* <input onChange={(e)=>setImg(e.target.files[0])} type="file" hidden /> */}
                </Button>
                <Button onClick={signUp} className="login__button">
                <ToastContainer />
                  <Tooltip title="Sign Up">
                    <PublishIcon />
                  </Tooltip>
                </Button>
                <Button onClick={signinGoogle} className="google__button">
                  <Tooltip title="Sign In With Google">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI78WvDPQ241thhVYKtVphlc_J01LbnFVqA&usqp=CAU" />
                  </Tooltip>
                </Button>
              </div>
        </form>
          ) : (
              <div className="login__body">
            <img style={{height:"150px", borderRadius:"100px"}} src={user.photoURL} alt={user.displayName} />
            <h5 style={{textAlign:"center",margin:"20px" ,marginTop:"30px"}}>Welcome {user.displayName} Thank You For Signing Up</h5>
            <NavLink exact to="/">
          <IconButton className="header__icon">
            <HomeIcon />
          </IconButton>
        </NavLink>
              </div>
          )}
      </div>
    </div>
  );
};

export default Account;
