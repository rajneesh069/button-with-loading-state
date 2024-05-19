import express, { Request, Response } from "express";
import cors from "cors";
const PORT = process.env.PORT || 8080;
const app = express();
app.use(
  cors({
    // origin: "http://localhost:3000", //for local development
    origin: [
      "https://button-with-loading-state.vercel.app/",
      "https://button-with-loading-state-rajneesh-mishras-projects.vercel.app/",
      "https://button-with-loading-state-git-main-rajneesh-mishras-projects.vercel.app/",
      "https://vercel.com/rajneesh-mishras-projects/button-with-loading-state/D9vUfcsBnRZTjpUBGy9XwVLqdr6K",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  return res.send("Working").status(200);
});

app.post("/signup", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  //do something
  return res.json({ message: "Data received successfully", email }).status(200);
});

app.listen(PORT, () => {
  console.log("Server is running at " + PORT);
});
