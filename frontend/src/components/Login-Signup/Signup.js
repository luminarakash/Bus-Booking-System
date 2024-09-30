import React, { useState } from "react";
import * as signupFunc from "./SignupFunctions";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import "./signup.css";

export default function Signup({ history }) {
    const [newUser, setNewUser] = useState({});

    const handleChangeEvent = (e, field) => {
        const fieldValue = e.target.value;
        setNewUser({
            ...newUser,
            [field]: fieldValue
        });
    };

    // sign in
    const getToSignIn = (e) => {
        e.preventDefault();
        history.push("/login");
    };

    // submitting data to backend
    const submitData = (e) => {
        e.preventDefault();
        signupFunc.registerUser(newUser)
            .then((response) => {
                console.log(response.data);
                history.push("/login");
            })
            .catch((error) => {
                console.error("Error registering user:", error);
            });
    };

    return (
        <div className="container">
            <div className="flex-container">
                <div className="row full">
                    <div className="col-md-12">
                        <div className="form-container">
                            <div className="form-container-in"></div>
                            <div className="row sgnUp">
                                <div className="col-md-6 right-divider pdding">
                                    <h3 className="lead-text mn-txt">Join Us with Social</h3>
                                    <div className="icon-soc-fb">
                                        <FaFacebookF />
                                    </div>
                                    <div className="icon-soc-tw">
                                        <FaTwitterSquare />
                                    </div>
                                </div>
                                <div className="col-md-6 left-divider">
                                    <form onSubmit={submitData}>
                                        <div className="form-group2">
                                            <label htmlFor="name">Name:</label>
                                            <input
                                                id="name"
                                                type="text"
                                                className="form-control sgnUp"
                                                onChange={(e) => handleChangeEvent(e, "name")}
                                            />
                                        </div>
                                        <div className="form-group2">
                                            <label htmlFor="email">Email - ID:</label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="form-control sgnUp"
                                                onChange={(e) => handleChangeEvent(e, "email")}
                                                required
                                            />
                                        </div>
                                        <div className="form-group2">
                                            <label htmlFor="mob-number">Mobile - No.:</label>
                                            <input
                                                id="mob-number"
                                                type="text"
                                                className="form-control sgnUp"
                                                onChange={(e) => handleChangeEvent(e, "mobile")}
                                                required
                                            />
                                        </div>
                                        <div className="form-check form-check-inline rd">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="Male"
                                                name="gender"
                                                value="Male"
                                                onChange={(e) => handleChangeEvent(e, "gender")}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="Male">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline rd">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="Female"
                                                name="gender"
                                                value="Female"
                                                onChange={(e) => handleChangeEvent(e, "gender")}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="Female">Female</label>
                                        </div>
                                        <div className="form-group2">
                                            <label htmlFor="password">Password:</label>
                                            <input
                                                id="password"
                                                type="password"
                                                className="form-control sgnUp"
                                                onChange={(e) => handleChangeEvent(e, "password")}
                                                required
                                            />
                                        </div>
                                        <div className="form-group2">
                                            <input
                                                type="submit"
                                                value="Submit"
                                                className="btn-primary btnn form-submit sub-btn sgnUp"
                                                required
                                            />
                                        </div>
                                    </form>
                                    <div>
                                        <small className="form-text text-muted link-text">Already a User?</small>
                                        <span className="signuptext">
                                            <a href="/#" onClick={getToSignIn}>Sign-In</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
