# Community Food Sharing and Surplus Reduction Platform

## Project Overview

This project is a **Community Food Sharing and Surplus Reduction Platform** built as a full-stack web application using modern technologies like **React**, **Firebase Authentication**, **Node.js**, **Express**, and **MongoDB**. The platform enables users to share surplus food, request available food, and manage their food donations effectively, promoting food waste reduction and community support.

---

## Live Site

https://food-share-a3304.web.app/

---

## Purpose

The purpose of this project is to create a user-friendly and secure food sharing platform where users can:

- Add food items they wish to donate.
- Browse available food items.
- Request food donations.
- Manage their donated foods and food requests.

This helps reduce food waste and supports community members in need.

---

## Key Features

- **User Authentication:**  
  - Email/password signup and login with Firebase Authentication.  
  - Social login option (Google or GitHub).  
  - Protected private routes accessible only to logged-in users.

- **Food Management (CRUD):**  
  - Add new food donations with details like name, image URL, quantity, pickup location, expiration date/time, and notes.  
  - View all available food items with sorting by expiration date.  
  - Update and delete foods the user has added.  
  - Manage requests on donated foods.

- **Food Requests:**  
  - Users can request available foods.  
  - Requested foods are removed from the available list and added to the user’s requests.  
  - View and manage food requests with relevant details.

- **Responsive Design:**  
  Fully responsive UI for mobile, tablet, and desktop devices, ensuring usability across all screen sizes.

- **Secure Configuration:**  
  - Firebase API keys and MongoDB credentials are secured via environment variables.  
  - JWT token implementation for secure access to private routes.

- **Animations & UI Enhancements:**  
  - Framer Motion animations on the homepage and slider components.  
  - Intuitive and visually appealing layout with consistent color contrast and spacing.

---

## Pages & Layout

- **Navbar:**  
  Links to Home, Available Foods, Add Food (private), Manage My Foods (private), My Food Requests (private), Login, and Signup.  
  Shows login/register buttons when logged out, and user profile picture with logout when logged in.

- **Home Page:**  
  - Banner/Slider with animated texts.  
  - Featured Foods section showing 6 food items with a "Show All" button.  
  - Two additional attractive, relevant sections.  
  - Animations with Framer Motion.

- **Available Foods:**  
  - Displays all foods with status "available".  
  - Sorting by expiration date.  
  - Search functionality by food name.  
  - Food cards with "View Details" button leading to the food detail page.  
  - Supports toggling between 3-column and 2-column layouts.

- **Food Details Page:**  
  Shows full details of a selected food item.  
  Includes a "Request" button opening a modal to request the food with pre-filled and editable fields.

- **Add Food (Private):**  
  Form for logged-in users to add new food donations with all required fields.

- **Manage My Foods (Private):**  
  Tabular view of foods added by the logged-in user.  
  Options to update (via modal or separate route) or delete food items with confirmation.

- **My Food Requests (Private):**  
  Tabular or custom-designed display of all food requests made by the logged-in user, showing details like donor name, pickup location, request date, and expiration date.

---

## Technologies & Packages Used

- **Frontend:**  
  - React.js  
  - React Router  
  - Tailwind CSS  
  - Framer Motion (for animations)  
  - React Toastifyons

- **Backend:**  
  - Node.js  
  - Express.js  
  - MongoDB & Mongoose  
  - JWT for authentication tokens  

- **Authentication:**  
  - Firebase Authentication (Email/password + Social login)  

- **Others:**  
  - Axios (with possible custom hooks)  
  - Environment variables management for security  

---

## Deployment Guidelines

- The backend server is deployed and fully operational without any CORS, 404, or 504 errors.  
- Frontend deployed live with working routing and no errors on page reload on any route.  
- Firebase authorized domains configured to match deployment URL.  
- JWT tokens stored securely on the client side and used for private route protection.  

---

## Development & Commit Practices

- 15+ meaningful commits on the client side with descriptive messages.  
- 8+ meaningful commits on the server side with descriptive messages.  
- Proper code structuring, comments, and clean, readable code.

---

## How to Run Locally

1. Clone the client and server repositories separately.  
2. Run `npm install` in both client and server folders.  
3. Set up `.env` files in both projects with Firebase and MongoDB credentials (do **not** commit these files).  
4. Start the backend server (`npm run start` or `npm run dev`).  
5. Start the frontend React app (`npm start`).  
6. Access the app at `http://localhost:3000`.

---

## Optional Features (Implemented)

- Search functionality on Available Foods page.  
- Sorting by food expiration date.  
- Framer Motion animations on homepage and slider.  
- JWT based security for private routes.  
- Responsive and accessible design.

---

## Contact & Contribution

Feel free to open issues or submit pull requests for improvements.  
Thank you for visiting this project!

---

Mahdin Hossen Abir

