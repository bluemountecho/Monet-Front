/* eslint-disable no-undef */
import React, { Component, PropTypes } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer"

const google = window.google

// class GoogleMap extends Component {
//     constructor(props) {
//       super(props);
//     };
  
//     componentDidMount () {
//       this.map = this._createMap();
//       this.marker = this._createMarkers();
//     };
    
//     _createMap = () => {
//       const { mapCanvas } = this.refs;
//       const { config } = this.props; 
      
//       if (config.type === 'street') {
//         return new google.maps.StreetViewPanorama(mapCanvas, config.mapOptions);
//       } 
      
//       return new google.maps.Map(mapCanvas, config.mapOptions);
//     };
  
//     _createMarkers = () => {
//       const { config } = this.props;
//       const { _createInfoWindow } = this;
      
//       if (config.allowClusters) {
//         const markers = _.map(config.locations, (location, i) => {
//           const marker = new google.maps.Marker({ position: location });
//           _createInfoWindow(marker, location);
//           return marker;
//         });
        
//         const markerCluster = new MarkerClusterer(
//           this.map, 
//           markers,
//           {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}
//         );
//       } else {
//         _.forEach(config.locations, location => {
//           const marker = new google.maps.Marker({
//             position: location,
//             map: this.map,
//             title: location.infoWindowContent.title || ''
//           });
//           _createInfoWindow(marker, location);
//         });
//       }
//     };
  
//     _createInfoWindow = (marker, location) => {
//       const { title, text, imgUrl } = location.infoWindowContent;
      
//       const infoWindowTemplate = `
//         <div class="info-window" style="background-image: url(${imgUrl})"}>
//           <h4>${ title }</h4>
//           <p>${ text }</p>
//         </div>
//       `;
      
//       const infoWindow = new google.maps.InfoWindow({
//         content: infoWindowTemplate
//       });
  
//       marker.addListener('click', function() {
//         infoWindow.open(this.map, marker);
//       });
//     };
  
//     render () {
//       return (
//         <div className="google-map" ref="mapCanvas">
//           LOADING MAP...
//         </div>
//       );
//     };
// }

class Contact extends Component {
    constructor(props) {
        super(props)

        this.mapViewConfig = {
            mapOptions: {
              center: {
                lat: 41.8916, 
                lng: -87.6079,
              },
              zoom: 13,
              streetViewControl: true, 
              scrollwheel: true 
            },
            type: 'map',
            allowClusters: false,
            locations: [
              { 
                lat: 41.8789, 
                lng: -87.6359, 
                infoWindowContent: { 
                  title: 'Willis Tower', 
                  text: 'The new Willis Tower will provide one of the most compelling and dynamic work, dining, shopping and entertainment environments available in any city.', 
                  imgUrl: 'http://static.thousandwonders.net/Willis.Tower.original.1014.jpg'
                } 
              },
            ]
        };
    }

    render() {
        return (
            <div className="content-body" style={{background: 'var(--color-green8)'}}>
                <div className="content">
                    <div className="width-60 text-align-center auto-div pb-20">
                    <form>
                        <div>
                            <input className="form-control" placeholder="Enter Your Name" type="text" name="name" id="name" required />
                        </div>
                        <div>
                            <input className="form-control" placeholder="Enter Your Email" type="email" id="email" required />
                        </div>
                        <div>
                            <input className="form-control" placeholder="Type The Subject" type="text" id="subject" required />
                        </div>
                        <div>
                            <textarea className="form-control" rows="7" placeholder="Enter Your Message Here..." name="message" id="message" required />
                        </div>
                        <button className="form-control" type="button">Send</button>
                    </form>
                    {/* <div style={{height: "400px"}}>
                        <GoogleMap config={ this.mapViewConfig } />
                    </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;