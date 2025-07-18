import http from "http";
import app from "./app";
import { Sequelize } from "sequelize";
import dotenv from "dotenv"
import pg from "pg"

dotenv.config()
const databaseUrl=process.env.DATABASE_URL!;
const dbName=process.env.DB_NAME!;
const dbUsername=process.env.DB_USERNAME!;
const dbPassword=process.env.DB_PASSWORD!
const PORT = process.env.PORT || 3000;


const server = http.createServer(app);

export const sequelize=new Sequelize(dbName,dbUsername,dbPassword,{
    dialect: "postgres",
    dialectModule: pg,
  });

  sequelize.authenticate()
  .then(() => console.log("Database Connected successfully"))
  .catch(err => console.error("Connection error:", err));



server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
