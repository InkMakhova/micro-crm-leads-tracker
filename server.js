// Imports
const path = require("path");
const fs = require("fs");
const express = require("express");

// Initialize Express App
const app = express();

// Ports and Data File
const PORT = process.env.PORT || 3000;
const DATA = path.join(__dirname, "leads.json");

// Middleware Configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Read leads from 'leads.json' file.
function readLeads(){
  if(!fs.existsSync(DATA)) return [];
  return JSON.parse(fs.readFileSync(DATA,"utf8"));
}

// Write the leads array back to 'leads.json'.
function writeLeads(leads){
  fs.writeFileSync(DATA, JSON.stringify(leads,null,2));
}

// [R] Handle GET requests to '/api/leads' to read and filter all leads.
app.get("/api/leads", (req, res)=>{
  // Get the 'q' (search query) from the URL (e.g., ?q=test), or default to "".
  const searchQuery = (req.query.q || "").toLowerCase();
  // Get the 'status' from the URL (e.g., ?status=New), or default to "".
  const status = (req.query.status || "").toLowerCase();
  let list = readLeads();
  // Filter by search query 'searchQuery' if it exists.
  if (searchQuery) {
    list = list.filter(l => (l.name + l.company).toLowerCase().includes(searchQuery));
  }
  // Filter by 'status' if it exists.
  if (status) {
    list = list.filter(l => l.status.toLowerCase() === status);
  }
  res.json(list);
});

// [C] Handle POST requests to '/api/leads' to create a new lead.
app.post("/api/leads", (req, res)=>{
  // Get the lead data from the JSON body sent by the client.
  const {name, email, company, source, notes} = req.body;
  // Simple validation: check if required fields are missing.
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }
  const leads = readLeads();
  // Create a new lead object with defaults.
  const lead = {
    id: Date.now().toString(),
    name,
    email,
    company: company || "",
    source: source || "",
    notes: notes || "",
    status: "New",
    createdAt: new Date().toISOString()
  };
  leads.push(lead);
  writeLeads(leads);
  res.status(201).json(lead);
});

// [U] Handle PATCH requests to '/api/leads/:id' to update a lead.
app.patch("/api/leads/:id", (req, res)=>{
  const leads = readLeads();
  const idx = leads.findIndex(l => l.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ error: "Not found" });
  }
  // Only allow 'status' and 'notes' fields to be updated for safety.
  const allowed = ["status", "notes"];
  for (const k of allowed) {
    if (req.body[k] !== undefined) {
      leads[idx][k] = req.body[k];
    }
  }
  writeLeads(leads);
  res.json(leads[idx]);
});

// Handle GET requests to the root URL (e.g., http://localhost:3000/)
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

// Start the server and listen for connections on the defined PORT.
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
