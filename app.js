// Usando objeto express
const express = require("express");
// App de express
const app = express();
// Indicamos que usaremos json
app.use(express.json());
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

// HTTP METHODS
app.get("/v1/explorers", (req, res) => {
  console.log(`API Explorers GET ALL request ${new Date()}`);

  const explorer1 = { id: 1, name: "André1" };
  const explorer2 = { id: 2, name: "André2" };
  const explorer3 = { id: 3, name: "André3" };
  const explorer4 = { id: 4, name: "André4" };
  const explorers = [explorer1, explorer2, explorer3, explorer4];

  res.status(200).json(explorers);
});

app.get("/v1/explorers/:id", (req, res) => {
  console.log(`API Explorers GET request ${new Date()}`);
  console.log(`Getting explorer with id: ${req.params.id}`);

  const explorer = { id: 1, name: "André" };

  res.status(200).json(explorer);
});

app.post("/v1/explorers", (req, res) => {
  console.log(`API Explorers POST request ${new Date()}`);

  // Parámetros de un cliente
  const requestBody = req.body;

  res.status(201).json({ message: "Created" });
});

app.put("/v1/explorers/:id", (req, res) => {
  console.log(`API Explorers PUT request ${new Date()}`);
  console.log(`Updating explorer with id: ${req.params.id}`);

  // Parámetros de un cliente
  const requestBody = req.body;

  res.status(200).json({ message: "Updated" });
});

// Con esto inicializamos esta app
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
