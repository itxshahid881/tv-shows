const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// Example route: Get show by ID
app.get("/api/show/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
