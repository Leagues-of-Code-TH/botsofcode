import type { CommandInteraction } from "discord.js";
import { EmbedBuilder } from "discord.js";
import type { SimpleCommandMessage } from "discordx";
import {
  Discord,
  SimpleCommand,
  SimpleCommandOption,
  SimpleCommandOptionType,
  Slash,
} from "discordx";

@Discord()
export class Admin {
  @Slash({ description: "Restarts the bot", name: "restart" })
  async hello(interaction: CommandInteraction): Promise<void> {
    const RestartEmbed = new EmbedBuilder()
      .setTitle("Restarting...")
      .setColor("Aqua")
      .setTimestamp();

    await interaction.reply({
      embeds: [RestartEmbed],
    });

    await console.log(
      `Restart requested by ${interaction.user.username} - ${interaction.user.id}`
    );
    await process.exit();
  }
}
