import React from "react";
import "../../assets/css/Login.css";
import useLogin from "../../hooks/useLogin";
function Login() {


    const { formData, loading, handleChange, handleSubmit } = useLogin();

  return (
    <>
      <div className="main">
        <div className="d-flex align-items-center justify-content-center mt-5 flex-column gap-4">
          <div className="icon-container">
            <i className="bi bi-person-add fs-3"></i>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center gap-2">
            <span className="fs-5 fw-bold">Login</span>
            <span className="fs-7 fw-light opacity-75">
              Enter your details to login.
            </span>
          </div>

          <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fs-6 fw-medium">
                  Email Address <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className="form-control"
                    required
                    placeholder="test@test.com"
                />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fs-6 fw-medium">
                  Password <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                    placeholder="Enter your password"

                    />
                </div>
              </div>
                <button type="submit" disabled={loading} className="btn btn-success w-100 text-dark">
                {loading ? (
                    <>
                    <span className="spinner-border spinner-border-sm"></span> Logging in...
                    </>
                ) : (
                    "Login"
                )}
                </button>

              <p className="text-center mt-3 opacity-75">
                Already have an account?{" "}
                <a href="#" className="login-link">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
