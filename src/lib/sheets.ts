import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
const sheetId = process.env.SHEET_ID;

function checkArray(array: any, obj: any): boolean {
  let result: boolean = false;

  array.forEach((element: any) => {
    if (element.name == obj.name && element.course == obj.course) {
      console.log(element.name, obj.name);
      console.log(element.course, obj.course);
      result = true;
    }
  });

  if (!result) console.log(array, obj);

  return result;
}

export async function verifyStudent(
  name: string,
  course: string
): Promise<boolean> {
  let result: boolean = false;
  await fetch(`https://opensheet.elk.sh/${sheetId}`)
    .then((res) => res.json())
    .then((students) => {
      if (students instanceof Array) {
        result = checkArray(students, { name: name, course: course });
      } else {
        result = false;
      }
    });
  return result;
}
