import { Client, Entity, Repository, Schema } from "redis-om";
import dotenv from "dotenv";
dotenv.config();

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Student extends Entity {}
let schema = new Schema(
  Student,
  {
    discord: { type: "string" },
    name: { type: "string" },
    createdAt: { type: "date" },
  },
  {
    dataStructure: "JSON",
  }
);

type StudentData = {
  discord: string;
  name: string;
  createdAt: Date;
};

export async function createStudent(data: StudentData): Promise<string> {
  await connect();

  const repository = client.fetchRepository(schema);

  const student = repository.createEntity(data);

  const id = await repository.save(student);

  return id;
}
