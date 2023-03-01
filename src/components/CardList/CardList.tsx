import React, { useState } from "react";

import { Phone } from "../../types/Phone";
import CardItem from "../CardItem/CardItem";
import phonesData from "../API/phonesData.json";
import { SliderCustom } from "../../Slider/SliderCustom";

import "./CardList.scss";
import { SliderPreview } from "../../SliderPreview/SliderPreview";

export const CardList: React.FC = () => {
  const [phones] = useState<Phone[]>(phonesData);
  const firstFourePhones = phones.slice(0, 10);
  const threePhones = phones.slice(0, 3);

  return (
    <div className="two__sliders">
      <div className='card__list'>
        <h1 className='card__list--title'>Brand new models</h1>
        <SliderCustom>
          {firstFourePhones.map((phone) => (
            <CardItem
              key={phone.id}
              name={phone.name}
              price={phone.price}
              screen={phone.screen}
              capacity={phone.capacity}
              color={phone.color}
              ram={phone.ram}
              year={phone.year}
              image={phone.image}
            />
          ))}
        </SliderCustom>
      </div>
      <div className='container'>
        <SliderPreview>
          <div className='container__img'>
            <img src={require(`../../img/banner-phones.png`)} />
          </div>
          <div className='container__img'>
            <img src={require(`../../img/banner-phones.png`)} />
          </div>
          <div className='container__img'>
            <img src={require(`../../img/banner-phones.png`)} />
          </div>
        </SliderPreview>
      </div>
    </div>
  );
};
