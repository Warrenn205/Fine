import React, { FC } from "react";
import { useNavigate } from "react-router-dom"; 
import "./SignIn.css";
import logo from "../../images/Fine Logo White.png"; 

{/* Sign In Page (only contains sample logic. I will add database functionality with SQLite very soon!) */}
const SignInCard: FC = () => {
  const navigate = useNavigate(); 

  {/* Sample Handle sign in */}
  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault(); 
    navigate("/main-page");
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="signin-title">Sign In</h2>
        <form className="signin-form" onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="form-input" />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInCard;
