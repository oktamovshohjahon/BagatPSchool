import React from "react";

function Contact() {
  return (
    <div className="container">
      <section className="contact-section">
        <h1 className="section-title text-center mb-4">Bog'lanish</h1>
        <form action="">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Emailingizni kiriting</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Ismingizni kiriting</label>
          </div>
          <div className="form-floating mb-4">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label htmlFor="floatingTextarea">Xabaringizni kiriting</label>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-success">
              Yuborish
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact;
