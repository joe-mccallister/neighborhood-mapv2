import React, { Component } from 'react';
import './App.css';
import MapContainer from './Components/MapContainer';
import MapNav from"./Components/MapNav";
import * as FourSquareAPI from './API/FourSquare';

class App extends Component {
  state = {
    places: [
      { 
        name: "Epic Brewing Company",
        location: {
          lat: 39.763428, 
          lng: -104.980830
        },
        img: '',
      },
      { 
        name: "Bierstadt Lagerhaus",
        location: {
          lat: 39.762973, 
          lng: -104.983303
        },
        img: '',
      },
      { 
        name: "Ratio Beerworks",
        location: {
          lat: 39.761842, 
          lng: -104.980435 
        },
        img: '',
      },
      { 
        name: "Stem Ciders",
        location: {
          lat: 39.761830, 
          lng: -104.983106
        },
        img: '',
      },
      { 
        name: "Our Mutual Friend Brewing",
        location: {
          lat: 39.760769, 
          lng: -104.981376
        },
        img: '',
      },
      { 
        name: "14er Brewing Company",
        location: {
          lat: 39.761460, 
          lng: -104.983753
        },
        img: '',
      },
      { 
        name: "10Barrel Brewing Company",
        location: {
          lat: 39.759745, 
          lng: -104.984390
        },
        img: '',
      },
      { 
        name: "Beryl's Beer Co.",
        location: {
          lat: 39.765169, 
          lng: -104.979535
        },
        img: '',
      },
      { 
        name: "The Sandlot Brewery",
        location: {
          lat: 39.756234, 
          lng: -104.992037
        },
        img: '',
      },
      { 
        name: "Great Divide Barrel Bar",
        location: {
          lat: 39.770434, 
          lng: -104.978126
        },
        img: '',
      },
      { 
        name: "Black Shirt Brewing Co",
        location: {
          lat: 39.769913, 
          lng: -104.972856
        },
        img: '',
      }
    ],
    currentPlaces: [],
    requestAvailable: true
};

  componentDidMount() {
    this.getFourSquareData();
  }

  // Fetch FourSquare data
  getFourSquareData = () => {
    const newPlaces = this.state.places.map((place) => {
      const size = 150
      FourSquareAPI.getFourSquareVenueID(place.location.lat, place.location.lng, place.name)
        .then((venueId) => {
          FourSquareAPI.getFourSquareVenueInfo(venueId)
            .then((venueInfo) => {
              place.img = venueInfo.bestPhoto.prefix + size + venueInfo.bestPhoto.suffix
            })
            .catch(() => this.setState({ requestAvailable: false })
        )})
        .catch((e) => alert(e));
      return place;
    });
    this.setState({ currentPlaces: newPlaces });
  }
  
  // Filter a new array of current places based on user query
  filterPlaces = (query) => {  
    if (!query) {
      this.setState({ currentPlaces: [] });
    }
    const filteredPlaces = this.state.places.filter((place) => place.name.toLowerCase().includes(query.toLowerCase()));  
    this.setState({ currentPlaces: filteredPlaces });
  }

  // Set active marker when clicking list item
  setActiveMarker = (marker) => {
    document.querySelector(`[title="${marker}"]`).click();
  }

  render() {
    return (
      <div className="App">
        <MapNav places={this.state.currentPlaces} onQuery={this.filterPlaces} setActiveMarker={this.setActiveMarker}/>
        <MapContainer places={this.state.currentPlaces} centerCoords={this.state.places[0].location} activeMarker={this.state.activeMarker} showingInfoWindow={this.state.showingInfoWindow} requestAvailable={this.state.requestAvailable}/>  
      </div>
    );
  }
}

export default App;
