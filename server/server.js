import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

const app = express();

app.use(morgan("dev"));
app.use(express.static(DIST_DIR));

app.get("/search/:title", async (req, res) => {
  const title = req.params.title;
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${title}&apikey=${process.env.OMDB_API_KEY}`
    );
    const results = response.data.Search;
    if (results) {
      res.send(results);
    } else {
      res.send("n/a");
    }
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.send(error);
  }
});

app.get("/movie/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`
    );
    const result = response.data;
    res.send(result);
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.send(error);
  }
});

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.get("*", (req, res) => {
  res.redirect("/");
});

export default app;
