import { ButtonBuilder, ButtonStyle } from "discord.js";

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
