import { ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";

export const spainWelcome = new EmbedBuilder()
  .setColor("Aqua")
  .setTitle("New Member")
  .setDescription(
    "Bienvenida a las Leagues of Code!\n" +
      "Para acceder al canal de tu clase y asignarte los correspondientes permisos es necesario que escribas </verify:1025587115792281660>  en este canal y selecciones el curso al que has sido asignad@.\n" +
      "¡Disfruta de la comunidad de Leagues of Code! 🎉"
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
