import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/logo.jpg";
import Occasion from "../../public/occasion-1.jpg";

function Home() {
  return (
    <div className="container">
      <main
        className="hero-section"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            alt=""
            width="150"
            height="150"
            src={Logo}
            style={{ position: "relative", top: "20px" }}
          />
          <h1 className="display-5 fw-bold text-body-emphasis">BagatPSchool</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium officia commodi tempora unde consequuntur id molestiae,
              sit delectus quia nihil mollitia ea, vero, ad nobis! Quidem sed
              voluptatem pariatur sapiente?
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <NavLink
                className="btn btn-primary btn-lg px-4 gap-3"
                to={"/news"}
              >
                Yangiliklar
              </NavLink>
              <NavLink
                className="btn btn-outline-secondary btn-lg px-4"
                to="/occasions"
              >
                Tadbirlar
              </NavLink>
            </div>
          </div>
        </div>
      </main>

      <section className="blogs">
        <h2 className="blogs-title text-center">Maqolalar</h2>
        <div className="album py-5 ">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center  mb-4">
          <button type="button" className="btn btn-success">
            <NavLink className="text-white text-decoration-none" to="/blog">
              Ko'proq ...
            </NavLink>
          </button>
        </div>
      </section>

      <section className="occasions">
        <h1 className=" text-center">Tadbirlar</h1>
        <h2 className="occasion-title text-center">
          Zakovat o'yinining final turniri
        </h2>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Occasion} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Occasion} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Occasion} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <p className="occasion-des text-break">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          praesentium explicabo quo. Soluta quae qui maxime in reiciendis quia
          dolorum tempore voluptatibus minima optio, laborum aperiam sapiente
          mollitia, cum nulla autem ratione facilis sequi debitis enim. Quia
          eaque reprehenderit illo, perspiciatis debitis dolorum commodi
          quibusdam asperiores expedita, maxime eum magni cum harum nulla. Nisi
          molestiae, soluta, maiores qui possimus, velit tenetur quod cupiditate
          tempore hic commodi aliquam totam! Delectus aut similique eum nulla
          modi quia fugit libero, odit aperiam voluptate! Et omnis architecto
          repudiandae. Facilis tempore minus fugiat, voluptate dolor doloremque,
          suscipit sed vel corporis ipsa atque ipsam consequuntur architecto.
        </p>
        <div className="text-center  mb-4">
          <button type="button" className="btn btn-success">
            <NavLink className="text-white text-decoration-none" to="/blog">
              Ko'proq ...
            </NavLink>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
