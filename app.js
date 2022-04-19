// Usando objeto express
const express = require("express");
// App de express
const app = express();
// Indicamos que usaremos json
app.use(express.json());
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

// Con esto inicializamos esta app
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
