// SignIn.js
import React, { useContext, useState } from "react";
import "./SignIn.css";
import { fetchData } from "../../../api/FetchData";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../../Context/UserContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { reloadUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation: Ensure email and password are not empty
    if (!email || !password) {
      toast.warning("Both fields are required!");
      return;
    }

    // Validation: Ensure email is in the correct format
    if (!emailRegex.test(email)) {
      toast.warning("Please enter a valid email address!");
      return;
    }
    setLoading(true);
    try {
      const response = await fetchData("User/login", "POST", {
        email,
        password,
      });

      if (response.user) {
        // Handle successful login
        toast.success("Login Success:", response.user);
        setLoading(false);
        await reloadUser(); // Reload the user after successful login
        navigate("/Admin");
      } else {
        // Handle error
        toast.error(response.message || "Login Failed");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while logging in.");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center login">
      <div
        className="loginHolder p-5 rounded"
        style={{ backgroundColor: "rgba(76, 77, 98, 0.95)" }}
      >
        <h1 style={{ color: "#de416c", fontWeight: "600" }}>Sign In</h1>
        <hr />
        <p>Please login using the credentials provided in the email.</p>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="form__group field mb-4 ">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="name" className="form__label">
                Email
              </label>
            </div>
            <div className="form__group field mb-5">
              <input
                type="password"
                className="form__field"
                placeholder="Name"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="name" className="form__label">
                Password
              </label>
            </div>

            <button type="submit" className="btn-login" disabled={loading}>
              {loading ? (
                <div className="lds-dual-ring1"></div> // Show loading spinner if loading
              ) : (
                "  Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
