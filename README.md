# Charter Restaurant React App Sample

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

* [Hosted site](https://jesseolsen.github.io/charter/)
* [GitHub source repository](https://github.com/jesseolsen/charter)

## Requirements

Charter/Spectrum Front-End Code Challenge

For this challenge we would like you to create a React application that pulls restaurant data from a simple REST API, displays
that data in a table, and allows users to filter that data.
API Endpoint: https://code-challenge.spectrumtoolbox.com/api/restaurants
API Key Header: Authorization | Api-Key q3MNxtfep8Gt
Example Fetch:
fetch(“https://code-challenge.spectrumtoolbox.com/api/restaurants”, {
    headers: {
    Authorization: “Api-Key q3MNxtfep8Gt”,
    },
});

User stories are as follows:
• 1. A user should be able to see a table with the name, city, state, phone number, and genres for each restaurant.
• 2. A user should see results sorted by name in alphabetical order starting with the beginning of the alphabet
• 3. A user should be able to filter restaurants by state.
• 4. A user should be able to filter by genre.
• 5. State and Genre filters should default to “All” and take effect instantaneously (no additional clicks).
• 6. A user should be able to enter text into a search field. When hitting the enter key or clicking on a search
button, the table should search results. Search results should match either the name, city, or genre.
• 7. A user should be able to clear the search by clearing the text value in the search input.
• 8. A user should only see 10 results at a time and the table should be paginated.
• 9. A user should be able to combine filters and search. The user should be able to turn filters on and off while a search value is present.

• 10. If any of the filters do not return any restaurants, the UI should indicate that no results were found.

What we are looking for:
• No use of third-party component libraries for the table/filter/search.
• Using Create-React-App or Next.js as a starter kit is okay.
• Well organized file structure
• Descriptive naming conventions
• DRY code that is readable and production ready
• Reusable components
• Sound logic for how the filters are architected
• Styling follows a convention/pattern and is well organized
• Full Git history with atomic commits

Stretch goals:
• Deployed application
• CI / CD
• Unit tests
• TypeScript
• Table row click shows additional information
• User can sort the data by name and state
• Add filter for attire
• Feel free to get creative!

## Available Scripts

In the project directory, you can run:

### `yarn  deploy`

Deploy to GitHub pages.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
