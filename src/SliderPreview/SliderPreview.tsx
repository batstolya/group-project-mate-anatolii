import React, { CSSProperties, ReactNode } from "react";
import Slider from "react-slick";
import "./SliderPreview.scss";

interface SliderCustomProps {
  children: ReactNode;
}

interface ArrowProps {
    className?: string;
    style?: CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className='arrow__preview arrow__preview--left'
    ></div>
  );
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className='arrow__preview arrow__preview--right'
    ></div>
  );
}

export const SliderPreview: React.FC<SliderCustomProps> = ({ children }) => {
  const settings = {
    dots: true,
    customPaging: function() {
        return (
          <a>
            <div style={{visibility: 'hidden'}}>&bull;</div>
          </a>
        );
      },
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000, // 5 секунд
    responsive: [
      {
        breakpoint: 1022,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 598,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 478,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className='slider-preview'>
      {children}
    </Slider>
  );
};
