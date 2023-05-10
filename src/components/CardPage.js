import React from "react";
import Nav from './Nav';
import Card from './Card';


export default function CardPage(props) {
  const data = props.data;
  console.log(data);
  const cards = data.map((item) => {
    return (
      <Card data={item} />
    )
  });
  return (
    <div className="cardpage landing">
      <div className="card-container d-flex flex-wrap justify-content-between align-items-end">
        {cards}
      </div>

    </div>
  );


}