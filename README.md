#MINESWEEPER GAME by using MERN STACK

Welcome to the Minesweeper Game, a modern take on the classic puzzle game built using the MERN stack (MongoDB, Express, React, Node.js). This project features a minimalist design with a sleek, glass-themed front end, powered by Tailwind CSS.

Features
Classic Gameplay: Enjoy the traditional Minesweeper experience with intuitive controls and responsive design.
MERN Stack: Fully developed using the MERN stack, showcasing the integration of MongoDB for data storage, Express and Node.js for backend logic, and React for a dynamic frontend.
Glass-Themed UI: A modern, minimalist design with a glass effect, providing a clean and aesthetic user interface.
Responsive Design: The game is optimized for various screen sizes, ensuring a smooth experience on both desktop and mobile devices.
Customizable Settings: Adjust the difficulty level with different grid sizes and mine counts to tailor the challenge to your preference.
Persistent Game State: Your progress is saved, allowing you to pick up where you left off.
Installation
To run this project locally, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/your-username/minesweeper-game.git
Navigate to the project directory:
bash
Copy code
cd minesweeper-game
Install dependencies for both backend and frontend:
bash
Copy code
npm install
cd client
npm install
Set up environment variables:
Create a .env file in the root directory with the necessary environment variables.
Example:
makefile
Copy code
MONGO_URI=your_mongo_db_connection_string
PORT=5000
Run the backend server:
bash
Copy code
npm run dev
Run the frontend development server:
bash
Copy code
cd client
npm start
Usage
Start the Game: Launch the game and click on any cell to begin. The goal is to reveal all non-mine cells without triggering any mines.
Game Over: If you click on a mine, the game ends, and the mines are revealed.
Win the Game: Successfully reveal all non-mine cells to win the game!
Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
