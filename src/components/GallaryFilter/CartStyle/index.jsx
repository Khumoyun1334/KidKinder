import React from "react";

function CartStyle({ img }) {
  return (
    <div>
      <div className="w-[70%] md:w-full xl:w-[100%]">
        <img
          src={img}
          className="w-[90%] md:w-[100%] m-auto lg:w-[100%] xl:w-[100%]"
          alt=""
        />
      </div>
      {/* <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
        <div class="position-relative overflow-hidden mb-2">
          <img
            class="img-fluid w-100"
            src="assets/img/portfolio-1.jpg"
            alt=""
          />
          <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
            <a href="assets/img/portfolio-1.jpg" data-lightbox="portfolio">
              <i class="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default CartStyle;
