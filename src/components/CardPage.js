import React from "react";


export default function CardPage(props) {

    const card = data.map((data) => {
        return (
          <div className="card">
            <h1 className='CardPage'>{data.title}</h1>
            <h2>Temperature: {data.temperature}</h2>
            <h2>Low Tide: {data.lowtide}</h2>
            <h2>High Tide: {data.hightide}</h2>
            <h2>Weather: {data.weather}</h2>
            <h2>Wind: {data.wind}</h2>
            <h2>Wave Height: {data.waveheight}</h2>
          </div>
        )
    });


    return (
        <div className="cardpage">
            {card}
        </div>
    );


}