import { Client } from "redis-om";
import dotenv from "dotenv";
dotenv.config();

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}
