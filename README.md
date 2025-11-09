# Micro CRM Leads (Project 1)
A lightweight CRM tool built with Node.js and Express.  
It allows users to add, view, filter, and update leads, demonstrating CRUD operations and basic front-end and back-end integration using vanilla JavaScript and JSON file storage.

## Live Deployment
Live: https://micro-crm-leads-tracker-c15x.onrender.com/

## Run Locally

### Prerequisites

You must have **Node.js v18+** installed on your system.

### Setup Instructions

1. **Clone the repository**
   You can clone using HTTPS (recommended for most users) or SSH (if you’ve set up SSH keys with GitHub).

   **Using HTTPS:**
   ```bash
   git clone https://github.com/InkMakhova/micro-crm-leads-tracker.git
   ```
   **Using SSH:**
   ```bash
   git clone git@github.com:InkMakhova/micro-crm-leads-tracker.git
   ```
    **Using GitHun CLI:**
   ```bash
   gh repo clone InkMakhova/micro-crm-leads-tracker
   ```
   
2. **Navigate into the project folder**
    ```bash
   cd your-path/micro-crm-leads-tracker
   ```
3. **Install dependencies**
    ```bash
    npm install
   ```
4. **Start the application**
    ```bash
    npm start
   ```
   
5. **Open in your browser**
   Go to [http://localhost:3000/](http://localhost:3000/)

## Features

- Create and list leads: name, email, and optional details
- Filter by status and search by name or company
- Update status: mark leads as Contacted, Qualified, or Lost with a single click
- Persistent storage: all data is stored in a simple leads.json file on the server
- No external database required: ideal for small projects and learning CRUD patterns

## API Endpoints

- `GET /api/leads` - Retrieve all leads. Optional query parameters: ?q= (search) and &status= (filter).
- `POST /api/leads` - Create a new lead. Requires name and email. Optional fields: company, source, notes.
- `PATCH /api/leads/:id` - Update an existing lead's status or notes by ID

## Technology Stack

- Backend: Node.js + Express
- Frontend: JavaScript (no frameworks)
- Data Storage: Local JSON file (leads.json)
- Styling: Custom CSS

## Reflection
For this project, I built Micro CRM Leads, a lightweight customer relationship management (CRM) application designed to record, filter, and update sales leads. I developed it using Node.js and Express, which offered a clean and efficient way to create RESTful APIs and serve static content. The aim was to implement a simple yet functional full-stack web app demonstrating Create, Read, and Update operations without using a database — instead persisting data in a local JSON file.

During development, I learned how to handle different HTTP methods in Express, including GET, POST, and PATCH, and how middleware like express.json() simplifies request handling and body parsing. On the frontend, I gained practical experience with the client-server model, where vanilla JavaScript uses asynchronous fetch() requests to communicate with the backend. This helped me understand how REST APIs enable smooth data exchange and UI updates without full page reloads.

In the future, I would extend the project by integrating a real database (e.g., MongoDB or PostgreSQL) to handle more data and concurrent users. I would also implement user authentication, sorting, and pagination to improve functionality. For the frontend, I plan to rebuild it using React.js and a design system such as Material UI or Chakra UI for better scalability and visual consistency. I would replace fetch() with Axios for more robust API handling. Finally, I would make the application containerized with Docker, enabling easier deployment, portability, and consistent runtime environments across systems.
