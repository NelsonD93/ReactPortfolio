{
  "name": "reactportfolio",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://lizranzim.github.io/ReactPortfolio",
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.1.3",
    "bootstrap": "^5.2.2",
    "dotenv": "^16.0.3",
    "gh-pages": "^4.0.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}