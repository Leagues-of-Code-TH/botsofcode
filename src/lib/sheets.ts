import fetch from "node-fetch";
import dotenv from "dotenv";
import { Server } from "./types.js";
dotenv.config();
const dataSpain = process.env.DATA_SP;
const dataThai = process.env.DATA_TH;

function checkArray(array: any, obj: any, server: Server): boolean {
  let result: boolean = false;

  if (Server.SPAIN) {
    array.forEach((element: any) => {
      if (
        element.email.trim().toLowerCase() == obj.email.trim().toLowerCase() &&
        element.course == obj.course
      ) {
        console.log("Data matches!");
        console.log(element.email, ":", obj.email);
        console.log(element.course, ":", obj.course);
        result = true;
      }
    });
  }

  if (Server.THAI) {
    array.forEach((element: any) => {
      if (
        element.email.trim().toLowerCase() == obj.email.trim().toLowerCase()
      ) {
        console.log("Data matches!");
        console.log(element.email, ":", obj.email);
        // console.log(element.course, ":", obj.course);
        result = true;
      }
    });
  }

  if (!result) {
    console.log("No Match!", obj, array);
  }

  return result;
}

export async function verifyStudent(
  email: string,
  course: string,
  server: Server
): Promise<boolean> {
  let result: boolean = false;

  if (server == Server.SPAIN) {
    await fetch(`https://opensheet.elk.sh/${dataSpain}`)
      .then((res) => res.json())
      .then((students) => {
        if (students instanceof Array) {
          result = checkArray(
            students,
            { email: email, course: course },
            Server.SPAIN
          );
        } else {
          result = false;
        }
      });
    return result;
  } else if (server == Server.THAI) {
    await fetch(`https://opensheet.elk.sh/${dataThai}`)
      .then((res) => res.json())
      .then((students) => {
        if (students instanceof Array) {
          result = checkArray(
            students,
            { email: email, course: course },
            Server.THAI
          );
        } else {
          result = false;
        }
      });
    return result;
  } else {
    return false;
    console.error("HUGE ERROR, SHEETS.TS");
  }
}
