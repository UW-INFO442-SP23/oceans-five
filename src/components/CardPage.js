import React from "react";
import Card from './Card';


export default function CardPage(props) {
  const data = props.data;
  const cards = data.map((item) => {
    console.log(item);
    return (

          <Card data={item} setSelectedData={props.setSelectedData}/>

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
