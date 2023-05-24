import React from "react";
import Nav from './Nav';
import Card from './Card';
import {Link} from 'react-router-dom';

export default function CardPage(props) {
  const data = props.data;
  const cards = data.map((item) => {
    console.log(item);
    return (
      <Link to="LocationPage" onClick={()=> props.setSelectedData(item)}>
        <div>
          <Card data={item}/>
        </div>
      </Link>
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
