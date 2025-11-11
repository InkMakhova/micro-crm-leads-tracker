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
The Micro CRM Leads project is a lightweight customer relationship management (CRM) application designed to capture, filter, and update sales leads. The system was implemented using Node.js and Express, providing a streamlined environment for building RESTful APIs and serving static content. Its purpose was to demonstrate a functional full-stack web solution supporting Create, Read, and Update operations, with data persisted locally in a JSON file rather than a traditional database.

Development of this project reinforced key concepts in modern web architecture. Express routing and middleware were used to handle HTTP methods such as GET, POST, and PATCH, simplifying request parsing and static file delivery. On the client side, the application employs asynchronous fetch() calls to communicate with the API, enabling dynamic updates without full page reloads. This implementation highlights the effectiveness of RESTful communication between a lightweight frontend and backend.

Future improvements could include integrating a database such as MongoDB or PostgreSQL to provide persistence, scalability, and support for concurrent users. Enhancements like user authentication, sorting, and pagination would further align the system with real-world CRM functionality. Rebuilding the interface with React.js would improve modularity, performance, and maintainability, while adopting a design system such as Material UI or Chakra UI would ensure consistent visual standards. Replacing fetch() with Axios would enhance API handling and error management. Finally, containerizing the application with Docker would streamline deployment and ensure consistency across development and production environments.
