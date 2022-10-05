import {
  ApplicationCommandOptionType,
  CommandInteraction,
  EmbedBuilder,
  GuildMember,
  Message,
} from "discord.js";
import { Discord, Slash, SlashChoice, SlashOption } from "discordx";

@Discord()
class Admin {
  @Slash({ name: "yesno", description: "Create a yes/no poll" })
  async poll(
    @SlashOption({
      name: "title",
      description: "The title of the poll",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    @SlashOption({
      name: "option1",
      description: "Option 1",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    @SlashOption({
      name: "option2",
      description: "Option 2",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    title: string,
    option1: string,
    option2: string,
    interaction: CommandInteraction
  ): Promise<void> {
    const member = interaction.member as GuildMember;

    if (member.permissions.has("Administrator")) {
      const pollEmbed = new EmbedBuilder()
        .setColor("Aqua")
        .setAuthor({
          name: `Created by ${interaction.user.username}`,
        })
        .setTitle(title)
        .setDescription(
          `
			✅ - ${option1}\n
			❌ - ${option2}
			`
        )
        .setTimestamp();

      const msg = await interaction.reply({
        content: "@everyone",
        embeds: [pollEmbed],
        fetchReply: true,
      });

      msg.react("✅");
      msg.react("❌");
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
