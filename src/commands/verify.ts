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

@Discord()
export class Command {
  @Slash({
    name: "verify",
    description: "Verify yourself and join Leagues of Code!",
  })
  async verify(interaction: CommandInteraction): Promise<void> {
    await interaction.deferReply();

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

    const row =
      new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
        PythonButton,
        CplusButton
      );

    interaction.editReply({
      content: `${interaction.user.username}, Select your course!`,
      components: [row],
    });
  }

  @ButtonComponent({ id: "python" })
  PythonButton(interaction: ButtonInteraction): void {
    interaction.reply(
      `<:python:1025584887337590834> Python! ${interaction.member}`
    );
  }

  @ButtonComponent({ id: "cplus" })
  CplusButton(interaction: ButtonInteraction): void {
    interaction.reply(
      `<:cplus:1025584885034913802> C++! ${interaction.member}`
    );
  }
}
