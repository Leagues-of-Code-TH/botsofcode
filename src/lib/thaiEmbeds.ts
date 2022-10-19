import { ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";

export const thaiWelcome = new EmbedBuilder()
  .setColor("Aqua")
  .setTitle("New Member")
  .setDescription(
    `👋 ยินดีต้อนรับเข้าสู่ Leagues of Code!\n` +
      "คุณสามารถใช้คำสั่ง </verify:1025587115792281660> ถ้าคุณสมัครคอรส์ไว้\n" +
      "Enjoy your stay!"
  );
export const MathButton = new ButtonBuilder()
  .setLabel("Math")
  .setEmoji("<:math:1029047328260247552>")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("math");

// Class Buttons
export const PythonButton = new ButtonBuilder()
  .setLabel("Python")
  .setEmoji("<:python:1025584887337590834>")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("python");

export const CplusButton = new ButtonBuilder()
  .setLabel("C++")
  .setEmoji("<:cplus:1025584885034913802>")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("cplus");
