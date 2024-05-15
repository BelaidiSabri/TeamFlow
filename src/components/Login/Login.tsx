import "./Login.css";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="container">
      <h2 className="logo">"It’s a great day to be a producer!"</h2>
      <form id="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="login" type="submit">
          Login
        </button>
        <h2 className="or">---------------------Or-------------------------</h2>
        <button className="logoogle" type="submit">
          Login with google
        </button>
        {/* Ajout des liens pour "Create new account" et "Forgot password" */}
        <div className="additional-links">
          <Link to="/create-account" className="create-account-link">Create new account</Link>
          <Link to="/forgot-password" className="forgot-password-link">Forgot password ?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
