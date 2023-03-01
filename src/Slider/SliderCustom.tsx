import React, { ReactNode, useState } from "react";
import Slider from "react-slick";
import classnames from "classnames";
import "./SliderCustom.scss";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  isDisabled: boolean;
}

interface SliderCustomProps {
  children: ReactNode
}


function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick, isDisabled } = props;
  const classes = classnames("arrow arrow-left", { disabled: isDisabled });
  return (
    <div onClick={isDisabled ? undefined : onClick} className={classes}></div>
  );
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick, isDisabled } = props;
  const classes = classnames("arrow arrow-right", { disabled: isDisabled });
  return (
    <div onClick={isDisabled ? undefined : onClick} className={classes}></div>
  );
}

export const SliderCustom: React.FC<SliderCustomProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide, React.Children.count(children) - 4);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <SampleNextArrow
        isDisabled={currentSlide === React.Children.count(children) - 4}
        onClick={() => setCurrentSlide(currentSlide + 1)}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        isDisabled={currentSlide === 0}
        onClick={() => setCurrentSlide(currentSlide - 1)}
      />
    ),
    autoplay: true,
    autoplaySpeed: 5000, // 5 секунд
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return <Slider {...settings} className="slider__custom">{children}</Slider>;
};
