# TeamTrak

TeamTrak is a project management app that allows teams to efficiently track and manage their projects. It is built using React, Context API, Express, MongoDB, Tailwind CSS, JSON Web Token.

## Project Description

Managing projects and tasks can be overwhelming, especially when you are working with a team. TeamTrak simplifies the process of tracking and managing projects by providing an intuitive interface that allows teams to easily assign tasks, track progress, and communicate with each other.

## Project Features

- Effortlessly manage projects: easily handle projects with ease and speed through the user-friendly interface.

- Robust security features: The app offers strong security with JWT authentication and frontend route protection, guaranteeing your data's safety and security.

- User-specific project views: Users can view only the projects they've created, keeping project information confidential and secure.

- Intuitive and streamlined UI: The app's smooth and user-friendly interface simplifies project management.

## Tools Used

Teamtrak is built using the MERN stack, featuring the following powerful tools:

- MongoDB: A highly flexible NoSQL database that offers great scalability and is well-suited for managing large and complex data sets.
- Express: A widely used and versatile backend web application framework for Node.js that offers great flexibility and customization options.
- React: A powerful and popular frontend JavaScript library that enables developers to build responsive and dynamic user interfaces with ease.
- Node.js: A powerful and widely adopted server-side JavaScript runtime environment that offers great performance and scalability.
- Tailwind CSS: A highly customizable CSS framework that simplifies the process of designing and building modern and intuitive user interfaces.

## Installation

1. Clone the client repository using the following command:

`git clone https://github.com/naymurrahmanshahed/teamtrak-client.git
` 2. Clone the server repository using the following command:

`git clone https://github.com/naymurrahmanshahed/teamtrak-server.git
`
3.Install the required dependencies by running the following command in both the client and server directories:

`npm install
` 4. Create a `.env` file in the root directory of the server and add the following variables:

`MONGO_URI=<your MongoDB connection string>
SECRET=<a secret string for JWT authentication>
`
5.Create a `.env` file in the root directory of the client and add the following variable:

`REACT_APP_BASE_URL=<your base URL, for example http://localhost:5000>
`
6.Start the backend server by running the following command in the server directory:
`npm start
`
7.Start the frontend by running the following command in the client directory:
`npm start
`
