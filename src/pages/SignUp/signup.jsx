import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./signup.css";

export default function SignUp(props) {

    const history = useHistory();
    const [passwordShown, setPasswordShown] = useState(false);
    const [user, setUser] = useState({
        name: '', email: '', phone: '', password: ''
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };
    const postData = async (e) => {
        history.push("/")
    }
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(user))
    }, [user])


    return (
        <>

            <div className="form-container">
                <form method="POST">
                    <h1 className="decorate-heading">SignUp</h1>
                    <div className="form-input">
                        <i className="fas fa-user undefined i-before"></i>
                        <input type="text" id="text" name="name" value={user.name} className="form-input-tag" placeholder="Enter your Name" onChange={handleInputs} required />
                    </div>

                    <div className="form-input">
                        <i className="far fa-envelope i-before"></i>
                        <input type="email" id="email" name="email" value={user.email} className="form-input-tag" placeholder="Enter your email" onChange={handleInputs} required />
                    </div>

                    <div className="form-input">
                        <i className="fas fa-phone-alt i-before"></i>
                        <input type="tel" id="phone" name="phone" value={user.phone} className="form-input-tag" placeholder="Enter your Phone Number" onChange={handleInputs} required />
                    </div>

                    <div className="form-input">
                        <i class="fas fa-user-tie i-before"></i>
                        <select className="form-input-tag" name="profession" onChange={handleInputs}>
                            <option selected disabled hidden>Select your profession</option>
                            <option value="Sevicemen">Servicemen</option>
                            <option value="Housewife">Housewife</option>
                            <option value="Businessman">Businessman</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="form-input">
                        <i className="fas fa-lock i-before"></i>
                        <input type={passwordShown ? "text" : "password"} id="password" name="password" value={user.password} className="form-input-tag" placeholder="Enter your password" onChange={handleInputs} required />
                        <i className={passwordShown ? "fa fa-eye i-after" : "fas fa-eye-slash i-after"} onClick={() => { setPasswordShown((passwordShown ? false : true)) }}></i>
                    </div>

                    <div className="form-input">
                        <input type="Submit" id="submit" name="SignUp" className="form-sign-in-button" value="SignUp" onClick={postData} />
                    </div>


                </form>
            </div>
        </>
    );
}