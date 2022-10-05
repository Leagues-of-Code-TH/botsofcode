import {
  ApplicationCommandOptionType,
  CommandInteraction,
  EmbedBuilder,
  GuildMember,
  Message,
} from "discord.js";
import { Discord, Slash, SlashChoice, SlashGroup, SlashOption } from "discordx";

@Discord()
@SlashGroup({ name: "poll", description: "Create a poll" })
@SlashGroup("poll")
class Poll {
  @Slash({ name: "yesno", description: "Create a yes/no poll" })
  async yesno(
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

  @Slash({ name: "three", description: "Create a three options poll" })
  async three(
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
    @SlashOption({
      name: "option3",
      description: "Option 3",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    title: string,
    option1: string,
    option2: string,
    option3: string,
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
			1️⃣  - ${option1}\n
			2️⃣ - ${option2}\n
      3️⃣ - ${option3}
			`
        )
        .setTimestamp();

      const msg = await interaction.reply({
        content: "@everyone",
        embeds: [pollEmbed],
        fetchReply: true,
      });

      msg.react("1️⃣");
      msg.react("2️⃣");
      msg.react("3️⃣");
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

  @Slash({ name: "four", description: "Create a four options poll" })
  async four(
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
    @SlashOption({
      name: "option3",
      description: "Option 3",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    @SlashOption({
      name: "option4",
      description: "Option 4",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    title: string,
    option1: string,
    option2: string,
    option3: string,
    option4: string,
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
			1️⃣  - ${option1}\n
			2️⃣ - ${option2}\n
      3️⃣ - ${option3}\n
      4️⃣ - ${option4}
			`
        )
        .setTimestamp();

      const msg = await interaction.reply({
        content: "@everyone",
        embeds: [pollEmbed],
        fetchReply: true,
      });

      msg.react("1️⃣");
      msg.react("2️⃣");
      msg.react("3️⃣");
      msg.react("4️⃣");
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
