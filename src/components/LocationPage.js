import React, { useRef, useEffect } from "react";
import restroom_img from '../icons/services/bathroom.svg';
import trash_img from '../icons/services/trash.svg';
import water_img from '../icons/services/water.svg';
import shower_img from '../icons/services/shower.svg';
import picnic_img from '../icons/services/picnic.svg';
import phone_img from '../icons/services/phone.svg';

export default function LocationPage(props){
    let data = props.data.selectedData;
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

    let selectedData = props.selectedData;
    let setSelectedData = props.setSelectedData;

    return (
        <div id="selectedCard" className="card col-lg-5 col-lg-5 p-3">
            <div className="card">
                <img className="card-img-top" alt="Card cap" />
                <div className="card-body">
                    <div className='cardHeading'>
                        <h1 className='CardPage'>{selectedData.name}</h1>
                        <h5 className='CardPage'>{selectedData.address}</h5>
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


                </div>
            </div>
        </div>
    )
}