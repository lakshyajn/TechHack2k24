# TechHack2k24

This project is a web application designed for promotion and place for conduction of a Hackathon. It is a great website where genzs and millenials would love to interact.
The TechHack2024 website is designed to streamline the registration process for participants and provide a personalized dashboard experience. The project features a comprehensive registration form that captures essential participant information, including optional fields for team details, GitHub and LinkedIn profiles, and dietary restrictions.

Upon successful registration, users are redirected to their custom dashboard, where they can view and manage their registration details. The dashboard includes a dynamic sliding sidebar for easy navigation and displays user-specific information fetched from the server. The system incorporates robust data validation, interactive UI elements, and real-time feedback through toast notifications. Additionally, the site uses no-cache headers to ensure users always access the most current information.

The project emphasizes a modern, user-friendly design with responsive elements and a seamless User Experience, catering to both individual participants and teams.

## Screenshots
Home Page
![Screenshot 2024-08-21 011056](https://github.com/user-attachments/assets/fab1a23d-248d-4233-9243-df9533ccb6ff)

Schedule Page

![Screenshot 2024-08-21 011418](https://github.com/user-attachments/assets/ff4f353c-3ecb-4c36-8b76-5738917cbef8)

Register Page

![Screenshot 2024-08-21 011444](https://github.com/user-attachments/assets/145ac007-3f06-41a3-8cfb-9c558c02c6c0)




## Features Implemented
### Frontend Features

Attractive UI: Utilizes only HTML, CSS, and JavaScript to create a visually appealing user interface.

Dynamic Animations: Implements engaging bubble animations using pure HTML, CSS, and JavaScript for enhanced User Experience for all age groups passionate for Hackathons.

Responsive Design: Ensures optimal viewing experience across different devices and screen sizes.

Intuitive Navigation: Provides clear and easy-to-use navigation between different website sections.

Pages:

1. About
2. Challenges
3. Dashboard
4. Register
5. Schedule
6. Sponsors

### Backend Features

User Management: Handles user registration, authentication, and authorization.

Data Storage: Stores user information and other relevant data (e.g., challenge submissions, event details).

API Endpoints: Provides RESTful APIs for frontend interactions.

Robust Server: Ensures reliable and efficient website performance.

## Technologies/Libraries/Packages Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js.

Database: MongoDB (mongoose, serv link)

## Additional Features

Error Handling and User Feedback: error handling at every point.

Session Management: records the number of sessions in console.

Data Validation and Sanitization: the optional values in registration form are removed and thus prevented to be set as null/undefined.
and validated both client-side and server-side.

## Installation and Setup

1. You need to have latest version of Node.js installed in your local machine.
2. Then simply go to VS Code and type "npm install" in terminal.
3. After that type "npm init -y", to initialize node in file without any other dependencies.
4. Then install packages like express, mongoose, dotenv with prefix "npm i".
5. After that, go to package.json file, and in the "scripts" section, add start and run dev scripts (if not present).
6. Also, if there is no "type" denotion in package.json, write "module" as its type (for ES).
7. Now, we are good to go :)

## Usage

After all the steps, just write "npm start" to start the server at the localhost, the website will load on mentioned number of localhost.

## Team Members

1. Lakshya Jain - 2023IMT-049
2. Kairvee Vaswani - 2023IMT-037


