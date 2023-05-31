import React, { useRef, useEffect } from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import {Link} from 'react-router-dom';

export default function Card(props) {
    const ref = useRef(null);
    const org_name = props.data.org_name;
    const org_desc = props.data.org_desc;
    const org_img = props.data.org_img;
    const org_link = props.data.org_link;
    return (
        <div className="col-md-4 col-lg-4">
            <div className="resource">
                <div className="resource-top">
                    <img className="resource-img" alt="Cover visual related to resource" src={props.data.org_link} />
                    <h2 className="CardPage CardTitle">{props.data.org_name}</h2>
                    <p className="cardLabel">{props.data.org_desc}</p>
                </div>
                <div className="resource-bottom">
                    <div className="buttonWrapper">
                        <a href={props.data.org_link} className="buttonText">Learn more</a>
                    </div>
                </div>
            </div>
        </div>

    )
}