
import { useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

import "./signin.css"

export default function SignIn(props) {
    const {state, dispatch} = useContext(UserContext);
    const history = useHistory();
    const [passwordShown, setPasswordShown] = useState(false);


    const [user, setUser] = useState({
        email: '', password: ''
    });
   
    let name,value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    };

    const postData = async (e) => {
        e.preventDefault(); 
        const getLocalItems = localStorage.getItem('lists');
        if(getLocalItems) {
            const {email, password} = JSON.parse(localStorage.getItem('lists'));
            if(user.email===email && user.password===password){
                history.push("/");
                dispatch({type: "USER", payload: true});
                const res = await fetch("https://hoblist.com/api/movieList?category=movies&language=kannada&genre=all&sort=voting", {
                    method: "POST",
                });
                const data = await res.json();
                console.log(data);
            }
         
            else
                alert('Invalid Credentials');
        }
        else {
            alert('Invalid Credentials');
        }
    }
    return (
        <>
            
            
                <div className="form-container">
                    <form action="/sign-in" method="POST">
                        <h1 className="decorate-heading">SignIn</h1>
                        <div className="form-input">
                            <i className="far fa-envelope i-before"></i>
                            <input type="email" id="email" name="email" className="form-input-tag" placeholder="Enter your email" onChange={handleInputs} required />
                        </div>

                        <div className="form-input">
                            <i className="fas fa-lock i-before"></i>
                            <input type={passwordShown ? "text" : "password"} id="email" name="password" className="form-input-tag" placeholder="Enter your password" onChange={handleInputs} required />
                            <i className={passwordShown ? "fa fa-eye i-after" : "fas fa-eye-slash i-after"} onClick={() => { setPasswordShown((passwordShown ? false : true)) }}></i>
                        </div>

                        <div className="form-input">
                            <input type="submit" id="signin" name="SignIn" className="form-sign-in-button" value="SignIn" onClick={postData} />
                        </div>


                    </form>
                </div>
            
        </>
    );
}