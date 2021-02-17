//config slick

import React from "react";

function ArrowPrev({ className, style, onClick }) {
  return (
    <button aria-label="prev" type="button" class="slick-prev">
        Anterior
    </button>
  );
}


function ArrowNext({ className, style, onClick }) {
  return (
    <button aria-label="next" type="button" class="slick-next">
        Proximo
    </button>
  );
}

export const settings = {
  vertical: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  prevArrow: <ArrowPrev className="slick-arrow" />,
  nextArrow: <ArrowNext className="slick-arrow" />
};

// React-slick by https://www.npmjs.com/package/react-slick
