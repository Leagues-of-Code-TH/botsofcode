import {
  ButtonInteraction,
  CommandInteraction,
  GuildMember,
  MessageActionRowComponentBuilder,
  User,
  TextChannel,
  EmbedBuilder,
} from "discord.js";

import {
  ActionRowBuilder,
  ApplicationCommandOptionType,
  ButtonBuilder,
  ButtonStyle,
} from "discord.js";

import { ButtonComponent, Discord, Slash, SlashOption } from "discordx";

import { createStudent, findStudentById } from "../lib/redis.js";
import { verifyStudent } from "../lib/sheets.js";

const errorEmbed = new EmbedBuilder()
  .setTitle("Name not found")
  .setDescription("Please try using the command again or contact the staffs.")
  .setColor("#f36c60");

const expiredEmbed = new EmbedBuilder()
  .setTitle("Command Expired")
  .setDescription("Please use the command again")
  .setColor("#f36c60");

@Discord()
export class Command {
  @Slash({
    name: "verify",
    description: "Verify yourself and join Leagues of Code!",
  })
  async verify(
    @SlashOption({
      description: "Enter your real name",
      name: "name",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    name: string | undefined,
    interaction: CommandInteraction
  ): Promise<void> {
    await interaction.deferReply({ ephemeral: true });

    // Class Buttons
    const PythonButton = new ButtonBuilder()
      .setLabel("Python")
      .setEmoji("<:python:1025584887337590834>")
      .setStyle(ButtonStyle.Primary)
      .setCustomId("python");

    const CplusButton = new ButtonBuilder()
      .setLabel("C++")
      .setEmoji("<:cplus:1025584885034913802>")
      .setStyle(ButtonStyle.Primary)
      .setCustomId("cplus");

    // Button rows
    const row =
      new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
        PythonButton,
        CplusButton
      );

    // Save data redis
    await createStudent({
      discord: interaction.user.id,
      name: name ?? "None",
      createdAt: new Date(),
    });

    // Database TTL
    setTimeout(async () => {
      await interaction.editReply({
        embeds: [expiredEmbed],
      });
      console.log("?");
    }, 5 * 60 * 1000);

    await interaction.editReply({
      content: `${name}, Select your course!`,
      components: [row],
    });
  }

  // Events after button press
  // Clear this repeating junk
  @ButtonComponent({ id: "python" })
  async PythonButton(interaction: ButtonInteraction): Promise<void> {
    const student = await findStudentById(interaction.user.id);

    // Reply
    if (student) {
      // Check on Google Sheets
      if (await verifyStudent(student.name, "Python")) {
        const successEmbed = new EmbedBuilder()
          .setTitle("Success!")
          .setDescription(`${student.name}, You've completed your verification`)
          .setColor("#72d572");

        await interaction.reply({
          ephemeral: true,
          embeds: [successEmbed],
        });
      } else {
        await interaction.reply({ ephemeral: true, embeds: [errorEmbed] });
      }
    } else {
      await interaction.reply({ ephemeral: true, embeds: [errorEmbed] });
    }
  }

  @ButtonComponent({ id: "cplus" })
  async CplusButton(interaction: ButtonInteraction): Promise<void> {
    const student = await findStudentById(interaction.user.id);

    // Reply
    if (student) {
      // Check on Google Sheets
      if (await verifyStudent(student.name, "C++")) {
        const successEmbed = new EmbedBuilder()
          .setTitle("Success!")
          .setDescription(`${student.name}, You've completed your verification`)
          .setColor("#72d572");

        await interaction.reply({
          ephemeral: true,
          embeds: [successEmbed],
        });
      } else {
        await interaction.reply({ ephemeral: true, embeds: [errorEmbed] });
      }
    } else {
      await interaction.reply({ ephemeral: true, embeds: [errorEmbed] });
    }
  }
}
