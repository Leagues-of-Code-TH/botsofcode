import type {
  ButtonInteraction,
  CommandInteraction,
  GuildMember,
  MessageActionRowComponentBuilder,
  User,
  TextChannel,
} from "discord.js";

import {
  ActionRowBuilder,
  ApplicationCommandOptionType,
  ButtonBuilder,
  ButtonStyle,
} from "discord.js";

import { ButtonComponent, Discord, Slash, SlashOption } from "discordx";

import { PrismaClient } from "@prisma/client";
import { exists } from "fs";
const prisma = new PrismaClient();

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

    // Save / Updatename to DB
    const upsertVerify = await prisma.studentData.upsert({
      where: {
        discordId: interaction.user.id,
      },
      update: {
        realName: name,
      },
      create: {
        discordId: interaction.user.id,
        realName: name!,
      },
    });

    console.log(upsertVerify);

    // Selector
    await interaction.editReply({
      content: `${name}, Select your course!`,
      components: [row],
    });
  }

  // Events after button press
  // Clear this repeating junk
  @ButtonComponent({ id: "python" })
  async PythonButton(interaction: ButtonInteraction): Promise<void> {
    const getData = await prisma.studentData.findUnique({
      where: {
        discordId: interaction.user.id,
      },
    });

    await interaction.reply({
      ephemeral: true,
      content: `***${getData?.realName}***, you've sent a verification request of **Python**<:python:1025584887337590834>! ${interaction.member}\nWait for an admin to approve your request.`,
    });

    await prisma.studentData.update({
      where: {
        discordId: interaction.user.id,
      },
      data: {
        course: "Python",
      },
    });
  }

  @ButtonComponent({ id: "cplus" })
  async CplusButton(interaction: ButtonInteraction): Promise<void> {
    const getData = await prisma.studentData.findUnique({
      where: {
        discordId: interaction.user.id,
      },
    });

    await interaction.reply({
      ephemeral: true,
      content: `***${getData?.realName}***, you've sent a verification request of **C++**<:cplus:1025584885034913802>! ${interaction.member}\nWait for an admin to approve your request.`,
    });

    await prisma.studentData.update({
      where: {
        discordId: interaction.user.id,
      },
      data: {
        course: "C++",
      },
    });
  }
}
