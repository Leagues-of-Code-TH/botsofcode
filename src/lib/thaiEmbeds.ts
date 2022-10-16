import { ButtonBuilder, ButtonStyle } from "discord.js";

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
