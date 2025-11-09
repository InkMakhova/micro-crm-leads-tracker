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
Write 200 to 300 words here on what you built, what you learned, and any next improvements you would make.
