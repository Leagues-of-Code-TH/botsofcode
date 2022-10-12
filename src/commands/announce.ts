import {
  CommandInteraction,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
  ModalSubmitInteraction,
  EmbedBuilder,
  GuildMember,
} from "discord.js";
import { Discord, Slash, ModalComponent } from "discordx";

@Discord()
class Admin {
  @Slash({ name: "announce", description: "create an announcement (admin)" })
  announce(interaction: CommandInteraction): void {
    // Create the modal
    const member = interaction.member as GuildMember;

    if (member.permissions.has("Administrator")) {
      const modal = new ModalBuilder()
        .setTitle("Create an announcement")
        .setCustomId("AwesomeForm");

      // Create text input fields
      const titleComponent = new TextInputBuilder()
        .setCustomId("titleField")
        .setLabel("Title of the announcement")
        .setStyle(TextInputStyle.Short);

      const contentComponent = new TextInputBuilder()
        .setCustomId("contentField")
        .setLabel("Content of the announcement")
        .setStyle(TextInputStyle.Paragraph);

      const row1 = new ActionRowBuilder<TextInputBuilder>().addComponents(
        titleComponent
      );

      const row2 = new ActionRowBuilder<TextInputBuilder>().addComponents(
        contentComponent
      );

      // Add action rows to form
      modal.addComponents(row1, row2);

      // --- snip ---

      // Present the modal to the user
      interaction.showModal(modal);
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

  @ModalComponent()
  async AwesomeForm(interaction: ModalSubmitInteraction): Promise<void> {
    const [title, content] = ["titleField", "contentField"].map((id) =>
      interaction.fields.getTextInputValue(id)
    );

    const embed = new EmbedBuilder()
      .setColor("#38c9fe")
      .setTitle(title)
      .setAuthor({
        name: `Created by ${interaction.user.username}`,
      })

      .setDescription(content)
      .setTimestamp();

    await interaction.reply({
      // <@&981925573511217173> everyone role doesn't work
      content: "@everyone",
      embeds: [embed],
    });

    return;
  }
}
