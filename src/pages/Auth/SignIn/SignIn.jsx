// SignIn.js
import React, { useContext, useState } from "react";
import "./SignIn.css";
import { fetchData } from "../../../api/FetchData";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import UserContext from "../../../Context/UserContext";

const SignIn = () => {
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

      console.log(response);
      if (response.user) {
        // Handle successful login
        toast.success("Login Success:", response.user);
        setLoading(false);
        reloadUser(); // Reload the user after successful login
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
    <div
      className="container-fluid d-flex justify-content-center align-items-center login"
      style={{ minHeight: "89.2vh" }} // Set the min-height to 100vh
    >
      <div
        className="loginHolder p-5 rounded"
        style={{ backgroundColor: "rgba(76, 77, 98, 0.95)" }}
      >
        <h1 style={{ color: "#de416c", fontWeight: "600" }}>Sign In</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          provident molestiae amet mollitia, omnis facere.
        </p>
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

        <div className="mt-4">
          <p>
            No account yet?{" "}
            <Link
              to="/Signup"
              style={{ textDecoration: "none", color: "#27b3df" }}
            >
              {" "}
              Signup Here{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
