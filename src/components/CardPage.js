import React from "react";
import Card from './Card';
import { FilterBox} from './Filter';

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
      <div>
      <div class='search my-3 cardsearch'>
            {/* location */}
            <div id="search-item-start">
            <svg id="search-item" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1529 12.1911C12.7134 12.1911 13.1934 11.9913 13.5929 11.5918C13.9924 11.1924 14.1918 10.7127 14.1911 10.1529C14.1911 9.59236 13.9913 9.11236 13.5918 8.71287C13.1924 8.31338 12.7127 8.11397 12.1529 8.11465C11.5924 8.11465 11.1124 8.3144 10.7129 8.71389C10.3134 9.11338 10.114 9.59304 10.1146 10.1529C10.1146 10.7134 10.3144 11.1934 10.7139 11.5929C11.1134 11.9924 11.593 12.1918 12.1529 12.1911ZM12.1529 19.6815C14.2251 17.7792 15.7622 16.0508 16.7643 14.4963C17.7665 12.9418 18.2675 11.562 18.2675 10.3567C18.2675 8.50531 17.6771 6.98955 16.4963 5.80943C15.3155 4.6293 13.8677 4.0389 12.1529 4.03822C10.4374 4.03822 8.98921 4.62862 7.80841 5.80943C6.6276 6.99023 6.03754 8.50599 6.03822 10.3567C6.03822 11.5626 6.53928 12.9428 7.5414 14.4973C8.54352 16.0518 10.0807 17.7799 12.1529 19.6815ZM12.1529 22C12.017 22 11.8811 21.9745 11.7452 21.9236C11.6093 21.8726 11.4904 21.8047 11.3885 21.7197C8.9087 19.5287 7.05733 17.4945 5.8344 15.6173C4.61147 13.7401 4 11.9866 4 10.3567C4 7.80892 4.8197 5.77919 6.45911 4.26752C8.09851 2.75584 9.99643 2 12.1529 2C14.31 2 16.2082 2.75584 17.8476 4.26752C19.487 5.77919 20.3064 7.80892 20.3057 10.3567C20.3057 11.9873 19.6943 13.7411 18.4713 15.6183C17.2484 17.4955 15.397 19.5293 12.9172 21.7197C12.8153 21.8047 12.6964 21.8726 12.5605 21.9236C12.4246 21.9745 12.2887 22 12.1529 22Z" fill="black" fill-opacity="0.6"/>
            </svg>

            <p id="search-item" >Try 'Maui' or 'Honolulu'</p>
            </div>
            {/* mag glass */}
            <svg id="search-item" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.76 13.27L20.49 19L19 20.49L13.27 14.76C12.2 15.53 10.91 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 10.91 15.53 12.2 14.76 13.27ZM9.5 5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5Z" fill="black" fill-opacity="0.6"/>
            </svg>
        </div>
      </div>
      <div className="Filterbuttons">
        <FilterBox />
      </div>
      <div className="card-container d-flex flex-wrap justify-content-between align-items-end">
        {cards}
      </div>
    </div>
  );

}
