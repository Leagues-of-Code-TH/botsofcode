import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
const sheetId = process.env.SHEET_ID;

function checkArray(array: any, obj: any): boolean {
  let result: boolean = false;

  array.forEach((element: any) => {
    if (
      element.email == obj.email &&
      element.course == obj.course &&
      element.paid === "Yes"
    ) {
      console.log("Data matches!");
      console.log(element.email, ":", obj.email);
      console.log(element.course, ":", obj.course);
      result = true;
    }
  });

  if (!result) {
    console.log("No Match!", obj);
  }

  return result;
}

export async function verifyStudent(
  email: string,
  course: string
): Promise<boolean> {
  let result: boolean = false;
  await fetch(`https://opensheet.elk.sh/${sheetId}`)
    .then((res) => res.json())
    .then((students) => {
      if (students instanceof Array) {
        result = checkArray(students, { email: email, course: course });
      } else {
        result = false;
      }
    });
  return result;
}
