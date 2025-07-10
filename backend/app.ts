import express, { Request, Response } from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"

dotenv.config()

const app= express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin:process.env.FRONTEND_URL
}));

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!');
});


export default app