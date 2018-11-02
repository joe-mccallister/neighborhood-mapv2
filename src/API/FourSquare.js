//venueID
export const getFourSquareVenueID = (lat, lng, name) => {
    return fetch(`https://api.foursquare.com/v2/venues.search?client_id=U5KSKJF0XTNWXACBB5BQZTZCAHZYRYJ0Z0ALBSURJJXIYVRY&client_secret=B4UZAAKVMHGILD3IWA3TOVG0USBKOX04AZBIMEPJMJTAK5YE&v=20180323&limit=1&11=${lat},${lng}&query=${name}`)
    .then((response) => response.json())
    .then((response) => response.response.venues[0].id);
}

//get venue info via ID instead of lat/lng/name
export const getFourSquareVenueInfo = (venueId) => {
    return fetch(`https://api.foursquare.com/v2/venues.search?client_id=U5KSKJF0XTNWXACBB5BQZTZCAHZYRYJ0Z0ALBSURJJXIYVRY&client_secret=B4UZAAKVMHGILD3IWA3TOVG0USBKOX04AZBIMEPJMJTAK5YE&v=20180323&limit=1&11=${lat},${lng}&query=${name}`)
    .then((response) => response.json())
    .then((response) => response.response.venue);
}