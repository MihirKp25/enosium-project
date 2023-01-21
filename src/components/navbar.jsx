import { useState, useEffect, React } from "react";
import Modal from 'react-bootstrap/Modal';
import { GoogleLogin } from "react-google-login";
import {gapi} from "gapi-script";
import { Link } from "react-router-dom";

export const Navbar=()=>{
    const [sidebar, setSidebar]= useState(false);
    const [show, setShow] = useState(false);
    const [scrolled,setScrolled]=useState(false);
    const [signup, setSignup]=useState(false);
    const [data, setData]=useState({});
    const [login, setLogin]=useState(false);
    const [dropdown, setDropdown]=useState(false);

    const handleClose = () => {
      setShow(false);
      console.log("Clicked");
    }

    const handleShow = () => {setShow(true)
      console.log("Clicked");
    }
   
    const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 450 ){
      setScrolled(true);
      }
      else{
      setScrolled(false);
      }
    }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }

  const googleSuccess=(res)=>{
		console.log(res);
    setData(res.profileObj);
    setLogin(true);
		const result=res?.profileObj;
		const token=res?.tokenId;
	}

	useEffect(()=>{
		gapi.load("client:auth2",()=>{
			gapi.auth2.init({clientId:"279659903183-6ctccbqdo4skcudgca030m3uti3at58i.apps.googleusercontent.com"})
		})
	})

	  const googleFailure=(err)=>{
		console.log(err);
		console.log("Failure");
	}
    return(
        <div className={`Container ${navbarClasses.join(" ")}`}>
            <div className="sidebar">
        <button onClick={()=>{setSidebar(!sidebar)}}><i className="fa-solid fa-bars"></i></button></div>
        <div className="nav-logo">
        <a>Website</a>
        </div>
        <div className={sidebar? "container1" : "display-none"}>
        <div className="nav-components">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#footercontact">Contact Us</a></li>
                <li><a href="#about">About</a></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </div>
        </div>
        <div className={sidebar?"nav-login2":"nav-login"}>
            {login?
            <div className="login-dropdown">
              <button onClick={()=>{setDropdown(!dropdown)}}><p>{data.givenName}</p>
              <i class="fa-sharp fa-solid fa-angle-down"></i></button>
              {dropdown?<div className="dropdown-content">
                <a href="#">Logout</a>
              </div>:<></>}
              </div>
              :<button onClick={handleShow}>Sign In</button>}
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{width:"100%"}}>
            <div className="header" style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
            <div class="heading">
				<h1 class="text text-large">{signup?"Sign Up":"Sign In"}</h1>
				<p class="text text-normal">{signup?"Existing User?":"New user?"}<span>
					{signup?
					<button onClick={()=>{setSignup(false)}} class="text text-links">Already have an account</button>:
					<button  onClick={()=>{setSignup(true)}} class="text text-links">Create an account</button>}
					</span>
				</p>
			  </div>
        <div className="cls-btn"><button onClick={handleClose}><i className="fa-solid fa-xmark"></i></button></div>
        </div>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form name="signin" class="form">
				{signup?
				<div class="input-control">
				<label htmlFor="text" class="input-label" hidden>Firstname</label>
				<input type="text" name="text" id="email" class="input-field" placeholder="Firstname"/>
			  </div>:<div></div>}
			  {signup?
				<div class="input-control">
				<label htmlFor="text" class="input-label" hidden>Lastname</label>
				<input type="text" name="text" id="email" class="input-field" placeholder="Lastname"/>
			  </div>:<div></div>}
				<div class="input-control">
					<label htmlFor="email" class="input-label" hidden>Email Address</label>
					<input type="email" name="email" id="email" class="input-field" placeholder="Email Address"/>
				</div>
				<div class="input-control">
					<label htmlFor="password" class="input-label" hidden>Password</label>
					<input type="password" name="password" id="password" class="input-field" placeholder="Password"/>
				</div>{
					signup?
					<div class="input-control">
					<label htmlFor="password" class="input-label" hidden>Confirm Password</label>
					<input type="password" name="password" id="password" class="input-field" placeholder="Confirm Password"/>
				</div>:<div></div>
				}
				</form>
        </Modal.Body>
        <Modal.Footer>
          <form style={{width: "100%"}}>
          <div class="input-control">
					<a href="#" class="text text-links">{signup?"":"Forgot Password"}</a>
					<button type="submit" name="submit" class="input-submit" value="Sign In" onClick={handleClose}>{signup?"Sign Up":"Sign In"}</button>
				  </div>
          <div class="striped">
				  <span class="striped-line"></span>
				  <span class="striped-text">Or</span>
				  <span class="striped-line"></span>
			  </div>
      
          <button onClick={handleClose} style={{width:"100%", TextAlign:"center"}}>
            <GoogleLogin
			        clientId="279659903183-6ctccbqdo4skcudgca030m3uti3at58i.apps.googleusercontent.com"
			        onSuccess={googleSuccess}
			        onFailure={googleFailure}
			        cookiePolicy="single_host_origin"/>
          </button>
          </form>
        </Modal.Footer>
        </Modal>
        </div>
    )
}