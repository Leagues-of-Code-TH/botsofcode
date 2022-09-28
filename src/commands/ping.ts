import type { CommandInteraction, Message } from "discord.js";
import type { SimpleCommandMessage } from "discordx";
import {
  Discord,
  SimpleCommand,
  SimpleCommandOption,
  SimpleCommandOptionType,
  Slash,
} from "discordx";

@Discord()
export class Example {
  @Slash({ description: "Pings the bot", name: "ping" })
  hello(interaction: CommandInteraction) {
	interaction.reply("Pong!")
  }
}