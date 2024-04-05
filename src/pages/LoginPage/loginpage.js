import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="Login">
      <div className="Fundo"></div>
      <div className="Frame1">
        <img
          className="Image10"
          src="https://via.placeholder.com/474x832"
          alt="Placeholder"
        />
        <div className="Bg"></div>
        <div className="WelcomeToFunwall">
          <span>
            Welcome to
            <br />
          </span>
          <span>FunWall</span>
        </div>
        <div className="LoginWithGoogle">
          <div className="Rectangle2"></div>
          <div className="Group1">
            <div className="Search1">
              <div className="Vector"></div>
              <div className="Vector"></div>
              <div className="Vector"></div>
              <div className="Vector"></div>
            </div>
            <div className="LoginWithGoogleText">Login with Google</div>
          </div>
        </div>
        <div className="LoginWithFacebook">
          <div className="Rectangle3"></div>
          <div className="Group2">
            <div className="LoginWithFacebookText">Login with Facebook</div>
            <div className="Vector"></div>
          </div>
        </div>
        <div className="Or">
          <div className="Line1"></div>
          <div className="Line2"></div>
          <div className="OrText">OR</div>
        </div>
        <div className="ForgotPassword">Forgot Password?</div>
        <div className="Email">
          <div className="Rectangle4"></div>
          <div className="Vector"></div>
          <div className="EmailText">Email</div>
          <div className="ExampleGmailCom">example@gmail.com</div>
        </div>
        <div className="Password">
          <div className="Rectangle5"></div>
          <div className="Vector"></div>
          <div className="PasswordText">Password</div>
          <div className="PasswordHidden">***********</div>
          <div className="BiEyeFill">
            <div className="Group">
              <div className="Vector"></div>
              <div className="Vector"></div>
            </div>
          </div>
        </div>
        <div className="Button">
          <div className="Rectangle6"></div>
          <div className="LoginText">Login</div>
        </div>
        <div className="RememberMe">
          <div className="RememberMeText">Remember me</div>
          <div className="Check"></div>
        </div>
        <div className="DonTHaveAnAccountRegister">
          <span>Don’t have an account? </span>
          <span>Register</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
