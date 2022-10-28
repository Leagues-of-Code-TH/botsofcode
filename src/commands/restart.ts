import type { CommandInteraction, GuildMember } from "discord.js";
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
    const member = interaction.member as GuildMember;
    if (member.permissions.has("Administrator")) {
      const RestartEmbed = new EmbedBuilder()
        .setTitle("Restarting...")
        .setColor("Aqua")
        .setTimestamp();

      await interaction.reply({
        embeds: [RestartEmbed],
        ephemeral: true,
      });

      await console.log(
        `Restart requested by ${interaction.user.username} - ${interaction.user.id}`
      );
      await process.exit();
    } else {
      const NoPermsEmbed = new EmbedBuilder()
        .setTitle("No Permissions")
        .setColor("Red")
        .setDescription(
          "You have insufficient permissions to use this command."
        );

      interaction.reply({ ephemeral: true, embeds: [NoPermsEmbed] });
    }
  }
}
