import { ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";

export const spainWelcome = new EmbedBuilder()
  .setColor("Aqua")
  .setTitle("New Member")
  .setDescription(
    `👋 Welcome to the Leagues of Code!\n` +
      "You can select your class using </verify:1025587115792281660> if you have purchased a course!\n" +
      "Enjoy your stay!"
  );

export const BasicButton = new ButtonBuilder()
  .setLabel("Basic")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("basic");

export const IntermediateButton = new ButtonBuilder()
  .setLabel("Intermediate")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("intermediate");

export const AdvancedButton = new ButtonBuilder()
  .setLabel("Advanced")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("advanced");

export const ProButton = new ButtonBuilder()
  .setLabel("Pro")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("pro");
