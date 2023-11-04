import React from "react";
import Occasion from "/occasion-1.jpg";

function Occasions() {
  return (
    <div className="container">
      <section className="occasions" style={{ marginTop: "100px" }}>
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
        <hr />
      </section>
    </div>
  );
}

export default Occasions;
