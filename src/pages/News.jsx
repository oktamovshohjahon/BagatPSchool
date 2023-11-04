import React from "react";
import Image from "/occasion-1.jpg";

function News() {
  return (
    <div className="container news-section" style={{ marginTop: "100px" }}>
      <div className="cards">
        <div className="card" style={{ width: "18rem" }}>
          <img src={Image} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Zakovat turniri</h5>
            <p className="card-text">Final turniri tugadi</p>
            <a href="https://t.me/BagatPSchool/3207" class="btn btn-primary">
              Natijalarni ko'rish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
