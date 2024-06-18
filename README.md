
# Just Another Text Editor (J.A.T.E)

## Description
J.A.T.E is a Progressive Web Application (PWA) text editor that allows you to create, edit, and save text files. It is built with modern web technologies and can be installed to run offline as a standalone application.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Repository Link](#repository-link)

## Installation
To install the application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/StgoWF/text-editor-pwa.git
   ```

2. Navigate to the project directory:
   ```bash
   cd text-editor-pwa
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
To start the application in development mode, run:
```bash
npm run start:dev
```

This will start the server and the Webpack dev server. You can access the application at:
- `http://localhost:3000`
- `http://localhost:8080`

## Building for Production
To build the application for production, run:
```bash
npm run build
```

This will create a `dist` directory with the production build of the application.

## Deployment
To deploy the application, you can use any static site hosting service like Vercel, Netlify, or GitHub Pages.

1. Build the application for production:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `dist` directory to your hosting service.

## Features
- Offline support
- Syntax highlighting with CodeMirror
- Save and load text files
- Installable as a PWA

## Technologies Used
- JavaScript
- Node.js
- Express.js
- Webpack
- Babel
- CodeMirror
- IndexedDB
- Workbox

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Repository Link
[GitHub Repository](https://github.com/StgoWF/text-editor-pwa)

## Contact
For any inquiries, please contact [stgoweinsteinf@gmail.com](mailto:stgoweinsteinf@gmail.com).
