import {React , useState} from "react";
import {useNavigate} from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "abc", password: "abc" },{ username: "user", password: "user" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      navigate("/homepage");
    }
  };
  const register=(e)=>{
    e.preventDefault();
    navigate("/register")
  }
  return (
    <div id="loginform">
      <form onSubmit={handleSubmit} className="form_login">
	      <input
	        type="text"
	        name="email"
            placeholder="enter email"
	        value={username}
	        onChange={(e) => setusername(e.target.value)}
	      />
	      <input
	        type="password"
	        name="Password"
            placeholder="enter password"
	        onChange={(e) => setpassword(e.target.value)}
	      />
	      <button type="submit" value="Submit">Login</button>
        <h3>New User ?</h3><button onClick={register} id="register" style={{fontSize:"12px"}}> Register</button>
	  </form>
    </div>
  );
};

export default Login;