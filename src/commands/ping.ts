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
  @Slash({ description: "Pings the bot", name: "ping" })
  ping(interaction: CommandInteraction) {
    const PingEmbed = new EmbedBuilder()
      .setTitle("Pong!")
      .setColor("Aqua")
      .setDescription(
        "Latency: `" + String(Date.now() - interaction.createdTimestamp + "ms`")
      );

    interaction.reply({
      embeds: [PingEmbed],
    });
  }
}
