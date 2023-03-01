import React from "react";
import "../CardItem/CartItem.scss";
import "../_reset.scss";
import { Button } from "../Button/Button";

type Props = {
    name: string;
    price: number;
    screen: string;
    capacity: string;
    color: string;
    ram: string;
    year: number;
    image: string;
};

const CardItem: React.FC<Props> = ({ 
  name,
  price,
  screen,
  capacity,
  ram,
  image
 }) => {

  return (
    <div className='card'>
      <img
        className='card__img'
        src={require(`../../${image}`)}
        alt={name}
      ></img>

      <h2 className='card__title'>{name}</h2>
      <p className='card__price'>{`$${price}`}</p>

      <div className='card__specifications'>
        <div className='card__specifications--feature'>
          <span>Screen</span>
          <span>Capacity</span>
          <span>RAM</span>
        </div>
        <div className='card__specifications--feature'>
          <span>{screen}</span>
          <span>{capacity}</span>
          <span>{ram}</span>
        </div>
      </div>

      <div className='card__footer'>
        <Button className='button button__standard'>Add to cart</Button>
        <div className='card__footer--favorites'></div>
      </div>
    </div>
  );
};

export default CardItem;
