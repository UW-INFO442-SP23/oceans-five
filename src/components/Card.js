import React from "react";


export default function Card(props) {
    console.log(props.data);
    return (
        <div className="card col-md-3 col-lg-3 p-3">
            <div className="card">
                <div className="card-body">

                    <img className="card-img-top" alt="Card cap" />
                    <h1 className='CardPage'>{props.data.name}</h1>
                    <h2>Restroom: {props.data.restroom}</h2>
                    <h2>Showers: {props.data.showers}</h2>
                    <h2>Picnic Area: {props.data.picnic_fac}</h2>
                    <h2>Trash Cans: {props.data.trash_rece}</h2>
                    <h2>Water: {props.data.water}</h2>
                    <h2>Phone: {props.data.phone}</h2>
                    <h2>Lifeguard: {props.data.lifeguard}</h2>
                </div>
            </div>
        </div>
    )
}