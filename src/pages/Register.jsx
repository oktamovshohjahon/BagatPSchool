import React from "react";

function Register() {
  return (
    <div className="container">
      <div className="login-section register-section">
        <form className="form_container">
          <div className="title_container">
            <h2 className="title">Ro'yhatdan o'ting</h2>
          </div>
          <br />
          <div className="input_container">
            <label className="input_label" for="email_field">
              Email
            </label>

            <input
              placeholder="name@mail.com"
              title="Inpit title"
              name="input-name"
              type="email"
              className="input_field"
              id="email_field"
            />
          </div>
          <div className="input_container">
            <label className="input_label" for="password_field">
              Parol
            </label>

            <input
              placeholder="Password"
              title="Inpit title"
              name="input-name"
              type="password"
              className="input_field"
              id="password_field"
            />
          </div>
          <div className="input_container">
            <label className="input_label" for="email_field">
              Ismingiz
            </label>
            <input
              placeholder="firstname"
              title="Inpit title"
              name="input-name"
              type="text"
              className="input_field"
              id="email_field"
            />
          </div>
          <div className="input_container">
            <label className="input_label" for="email_field">
              Familiyangiz
            </label>

            <input
              placeholder="lastname"
              title="Inpit title"
              name="input-name"
              type="text"
              className="input_field"
              id="email_field"
            />
          </div>
          <div className="input_container">
            <label className="input_label" for="email_field">
              Yoshingiz
            </label>

            <input
              placeholder="20"
              title="Inpit title"
              name="input-name"
              type="number"
              className="input_field"
              id="email_field"
            />
          </div>
          <button title="Sign In" type="submit" className="sign-in_btn">
            <span>Kirish</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
