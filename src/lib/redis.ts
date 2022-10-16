import { Client, Entity, Repository, Schema } from "redis-om";
import dotenv from "dotenv";
dotenv.config();

const client = new Client();

export async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Student extends Entity {}
let schema = new Schema(
  Student,
  {
    discord: { type: "string" },
    email: { type: "string" },
    createdAt: { type: "date", sortable: true },
  },
  {
    dataStructure: "JSON",
  }
);

type StudentData = {
  discord: string;
  email: string;
  createdAt: Date;
};

export async function createStudent(data: StudentData): Promise<string> {
  await connect();

  const repository = client.fetchRepository(schema);

  const student = repository.createEntity(data);

  const id = await repository.save(student);

  await client.execute(["EXPIRE", `Student:${id}`, 300]);

  return id;
}

export async function findStudentById(id: string): Promise<any> {
  await connect();

  const repository = client.fetchRepository(schema);

  const student = await repository
    .search()
    .where("discord")
    .eq(id)
    .return.first();

  return student;
}

export async function createIndex() {
  await connect();
  const repository = client.fetchRepository(schema);
  await repository.createIndex();
}
