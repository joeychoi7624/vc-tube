import "dotenv/config";
import "./db";
import "./models/Video";
import app from "./app.js";

const PORT = process.env.GLOBAL_PORT;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
