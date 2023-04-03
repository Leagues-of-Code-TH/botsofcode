import { ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";

export const thaiWelcome = new EmbedBuilder()
  .setColor("Aqua")
  .setTitle("New Member")
  .setDescription(
    `👋 ยินดีต้อนรับเข้าสู่ Leagues of Code!\n` +
      "คุณสามารถใช้คำสั่ง </verify:1025587115792281660> ถ้าคุณสมัครคอรส์ไว้\n" +
      "Enjoy your stay!"
  );

// Class Buttons
export const SummerCampButton = new ButtonBuilder()
  .setLabel("Summer Camp")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("summercamp");

export const MathButton = new ButtonBuilder()
  .setLabel("Math")
  .setEmoji("<:math:1029047328260247552>")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("math");
export const PythonOne = new ButtonBuilder()
  .setLabel("Python 1")
  .setEmoji("<:python:1025584887337590834>")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("python1");

export const PythonTwo = new ButtonBuilder()
  .setLabel("Python 2")
  .setEmoji("<:python:1025584887337590834>")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("python2");

export const PythonThree = new ButtonBuilder()
  .setLabel("Python 3")
  .setEmoji("<:python:1025584887337590834>")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("python3");

export const CplusOne = new ButtonBuilder()
  .setLabel("C++ 1")
  .setEmoji("<:cplus:1025584885034913802>")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("cplus1");

export const CplusThree = new ButtonBuilder()
  .setLabel("C++ 3")
  .setEmoji("<:cplus:1025584885034913802>")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("cplus3");
