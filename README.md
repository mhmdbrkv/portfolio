# Portfolio Website

## Overview
Welcome to my personal portfolio website, built to showcase my skills and projects as a Node.js Backend Developer. This web application, powered by Node.js, Express, and React, highlights my expertise in building scalable RESTful APIs, secure authentication systems, and modular backend architectures using Object-Oriented Programming (OOP) principles. It features a collection of my projects, including an event management API, e-commerce store, and room management system, demonstrating my ability to deliver clean, maintainable code.

## Features
- **Project Showcase**: Displays my key projects with descriptions, tech stacks, and GitHub links.
- **Responsive Design**: Built with React and Tailwind CSS for a seamless user experience across devices.
- **Contact Form**: Allows visitors to reach out (backend handles form submissions securely).
- **Authentication**: Secure user authentication for admin access (e.g., to update portfolio content).
- **API Integration**: Backend APIs to manage dynamic content like project details.

## Tech Stack
- **Backend**: Node.js, Express.js, MongoDB (with Mongoose ODM).
- **Frontend**: React, Tailwind CSS, JavaScript (ES6+).
- **Authentication**: JWT for secure admin access.
- **Deployment**: Hosted on [Vercel/Netlify, or specify your platform].
- **Version Control**: Git.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mhmdbrkv/portfolio.git
   cd portfolio
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   cd client && npm install
   ```
3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   JWT_SECRET=your_jwt_secret_key
   ```
4. **Start MongoDB**:
   Ensure MongoDB is running locally or provide a cloud MongoDB URI.
5. **Run the Application**:
   ```bash
   npm run dev
   ```
   The app runs at `http://localhost:3000` (backend) and `http://localhost:5173` (frontend).

## Project Highlights
- **Library Management System**: A Node.js project using OOP to manage books and users, showcasing modular design.
- **Event Management REST APIs**: Scalable API for event CRUD operations with JWT authentication.
- **E-Commerce Store**: Backend for product and order management with Stripe integration.
- **Rooms API**: API for managing room bookings or chat rooms with MongoDB.

## Usage
1. Visit the live site at [your-deployed-URL] to explore projects.
2. Admins can log in to manage portfolio content via `/admin` (requires JWT).
3. Use the contact form to send inquiries.

## Project Structure
```
portfolio/
├── client/           # React frontend
├── server/           # Node.js backend
│   ├── controllers/  # API request handlers
│   ├── models/      # Mongoose schemas
│   ├── routes/      # Express routes
│   ├── middlewares/ # Authentication middleware
│   ├── config/      # Database configuration
│   ├── server.js    # Backend entry point
├── .env             # Environment variables
└── README.md        # Project documentation
```

## Contributing
This is a personal portfolio, but feedback is welcome! Open an issue or contact me directly.

## License
MIT License. See [LICENSE](LICENSE) for details.

## Contact
Connect with me:
- GitHub: [mhmdbrkv](https://github.com/mhmdbrkv)
- Email: [your-email@example.com]
- Portfolio: [your-deployed-URL]
