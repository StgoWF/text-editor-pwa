
# JATE - Just Another Text Editor

Just Another Text Editor is a Progressive Web Application (PWA) that allows you to create, edit, and save text documents. This application works both online and offline, ensuring that your data is always accessible.

## Features

- **PWA Support:** Installable on desktop and mobile devices.
- **Offline Functionality:** Works without an internet connection.
- **IndexedDB Integration:** Saves data locally for offline access.
- **Service Worker:** Caches files for offline use.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd project-directory
    ```

2. Install dependencies:
    ```sh
    npm install
    cd client
    npm install
    cd ../server
    npm install
    ```

## Running in Development

To start the development server, run:
```sh
npm run start:dev
```
This will concurrently run the Express server on `http://localhost:3000` and the Webpack Dev Server on `http://localhost:8080`.

## Build and Serve

To build and serve the application, run:
```sh
npm run build
npm start
```
The application will be available on `http://localhost:3000`.

## License

This project is licensed