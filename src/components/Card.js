import React, { useRef, useEffect } from "react";
import restroom_img from '../icons/services/bathroom.svg';
import trash_img from '../icons/services/trash.svg';
import water_img from '../icons/services/water.svg';
import shower_img from '../icons/services/shower.svg';
import picnic_img from '../icons/services/picnic.svg';
import phone_img from '../icons/services/phone.svg';
import beach_img from '../icons/beach.jpg';
import {Link} from 'react-router-dom';

export default function Card(props) {
    const ref = useRef(null);
    var restroom = '';
    var trash = '';
    var water = '';
    var shower = '';
    var picnic = '';
    var phone = '';
    const beach = props.data.shore_type;
    const path = props.data.access_sur;
    const access = props.data.access_typ;
    console.log(beach);
    useEffect(() => {
        // The DOM element is accessible here.
        const element = ref.current;
        console.log(element.id);
        if (beach.includes('Sand') == true) {
            const beachContent = document.getElementById('beach');
            beachContent.style.backgroundColor = '#F9E69C';
        } else if (beach == 'Rock') {
            const beachContent = document.getElementById(element.id);
            beachContent.style.backgroundColor = '#C6B3D6';
        } else if (beach == 'Cliff') {
            const beachContent = document.getElementById(element.id);
            beachContent.style.backgroundColor = '#9FB0C2';
        } else if (beach == 'River') {
            const beachContent = document.getElementById(element.id);
            beachContent.style.backgroundColor = '#B4DBD1';
        } else {
            const beachContent = document.getElementById(element.id);
            beachContent.style.backgroundColor = '#C6B3D6';
        }
    }, []);
    if (props.data.restroom == 'Yes') {
        restroom = restroom_img;
    }
    if (props.data.trash_rece == 'Yes') {
        trash = trash_img;
    }
    if (props.data.water == 'Yes') {
        water = water_img;

    }
    if (props.data.showers == 'Yes') {
        shower = shower_img;
    }
    if (props.data.picnic_fac == 'Yes') {
        picnic = picnic_img;
    }
    if (props.data.phone == 'Yes') {
        phone = phone_img;
    }
    return (
        <div className="col-md-4 col-lg-4">
            <Link className='link' to="LocationPage" onClick={() => props.setSelectedData(props.data)}>
                <div className="card">
                    <img className="card-img-top" alt="Card cap" src={beach_img} />
                    <div className="card-body">
                        <div className='cardHeading'>
                            <h2 className='CardPage CardTitle'>{props.data.name}</h2>
                            <p className='cardLabel'>Address</p>
                            <h5 className='CardPage CardAddress'>{props.data.address}</h5>
                        </div>
                        <div className='beachType'>
                            <p className='cardLabel beach'>Beach</p>
                            <p className='cardLabel beach'>Path</p>
                            <p className='cardLabel beach'>Access</p>
                        </div>
                        <div className='beachContent'>
                            <p className='beach' id="beach" ref={ref}>{beach}</p>
                            <p className='beach' id='path'>{path}</p>
                            <p className='beach' id="access">{access}</p>
                        </div>
                        <div className='services'>
                            <p className='cardLabel'>Services</p>
                            <img src={restroom} className="icon_img" />
                            <img src={trash} className="icon_img" />
                            <img src={water} className="icon_img" />
                            <img src={picnic} className="icon_img" />
                            <img src={shower} className="icon_img" />
                            <img src={phone} className="icon_img" />
                        </div>

                    </div >
                </div>
            </Link>
        </div>

    )
}