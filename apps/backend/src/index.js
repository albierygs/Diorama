const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Rota base de teste
app.get('/api/v1', (req, res) => {
  res.json({ message: 'API Diorama' });
});

app.listen(PORT, () => {
  console.log(`ativo na porta ${PORT}`);
});