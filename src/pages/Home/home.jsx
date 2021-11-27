import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../App";

import "./home.css";

export default function Home() {
    const { state, dispatch } = useContext(UserContext);
    const RenderNav = () => {
        if (state) {
            return (
                <>
                    <nav>
                        <ul className="nav-ul">


                            <li className="nav-li">
                                <NavLink to="/about"
                                    className="nav-text-dec nav-li-font nav-item-hover"
                                >
                                    About
                                </NavLink>
                            </li>


                        </ul>
                    </nav>
                </>
            )
        } else {
            return (
                <>
                    <nav>
                        <ul className="nav-ul">


                            <li className="nav-li">
                                <NavLink to="/sign-up"
                                    className="nav-text-dec nav-li-font nav-item-hover-sign"

                                >
                                    SignUp
                                </NavLink>


                            </li>
                            <li className="nav-li">
                                <NavLink to="/sign-in"
                                    className="nav-text-dec nav-li-font nav-item-hover-sign"

                                >
                                    SignIn
                                </NavLink>

                            </li>




                        </ul>
                    </nav>
                </>
            )
        }

    }
    return (


        <>

            <RenderNav />
        </>

    )

}