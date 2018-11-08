## Neighborhood Maps
The final project for Udacity FEND program. This is a custom map of local breweries in a specific neighborhood of Denver. The app uses Google Maps API to display the map, while pulling venue information from the FourSquare API (https://foursquare.com/developers)

### Running the app
Clone the repository or download
Ensure you have Node installed currently

run npm install
run npm start

The project should give all dependencies correctly, but I had issues with the difference between react-google-maps and google-maps-react - npm install google-maps-react may need to be installed separately.

### Using the App
The app will load centered on the River North neighborhood of the Denver metro. Markers are added upon load based on a few breweries which are hard-coded for simplicity. The hamburger menu at the top center of the page can be clicked to expose the search and filter options. 

### Acknowledgements
FourSquare API: https://foursquare.com/developers
Google Maps API: https://developers.google.com/maps/documentation/javascript/tutorial
Yahya Elharony's Youtube: https://www.youtube.com/channel/UCcWSbBe_s-T_gZRnqFbtyIA (seriously great information and walkthrough for building the app without additional libraries - helped me understand what was going on from a higher level before implementing a different approach on my project)





### Below you'll find the original documentation created upon running Create React App



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
