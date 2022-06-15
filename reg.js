import React, { userState } from "react";
import Axios from "anxios"; 
import "./reg.css";

function App() {
    const [usernameReg, setUsernameReg] = useState(''); 
    const [passwordReg, setPasswordReg] = useState('');

    return (
        <div className="Reg">
            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input 
                  type="text"
                  onChange={(e) => {
                    setUsernameReg(e.target.value);
                  }}
                />
                <label>Password</label>
            </div>
            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Username..."></input>
            </div>
        </div>
    )
}