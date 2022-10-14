import {
  ButtonInteraction,
  CommandInteraction,
  GuildMember,
  MessageActionRowComponentBuilder,
  User,
  TextChannel,
  EmbedBuilder,
  GuildMemberRoleManager,
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
  .setDescription(
    "Your name doesn't match with the course in our Database.\nIf you believe this is an error, please contact a staff."
  )
  .setColor("#f36c60");

const expiredEmbed = new EmbedBuilder()
  .setTitle("Command Expired")
  .setDescription(
    "You've used this command for too long. Please try again.\nIf you believe this is an error, please contact a staff."
  )
  .setColor("#f36c60");

@Discord()
export class Command {
  @Slash({
    name: "verify",
    description: "Verify yourself and join Leagues of Code!",
  })
  async verify(
    @SlashOption({
      description: "Enter your email",
      name: "email",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    email: string | undefined,
    interaction: CommandInteraction
  ): Promise<void> {
    await interaction.deferReply({ ephemeral: true });

    // Class Buttons
    const BasicButton = new ButtonBuilder()
      .setLabel("Basic")
      .setStyle(ButtonStyle.Primary)
      .setCustomId("basic");

    const IntermediateButton = new ButtonBuilder()
      .setLabel("Intermediate")
      .setStyle(ButtonStyle.Primary)
      .setCustomId("intermediate");

    const AdvancedButton = new ButtonBuilder()
      .setLabel("Advanced")
      .setStyle(ButtonStyle.Primary)
      .setCustomId("advanced");

    const ProButton = new ButtonBuilder()
      .setLabel("Pro")
      .setStyle(ButtonStyle.Primary)
      .setCustomId("pro");

    // Button rows
    const row =
      new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
        BasicButton,
        IntermediateButton,
        AdvancedButton,
        ProButton
      );

    // Save data redis
    await createStudent({
      discord: interaction.user.id,
      email: email ?? "None",
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
      content: `${email}, Select your course!`,
      components: [row],
    });
  }

  // Events after button press
  // Clear this repeating junk
  @ButtonComponent({ id: "basic" })
  async BasicButton(interaction: ButtonInteraction): Promise<void> {
    const student = await findStudentById(interaction.user.id);
    await interaction.deferReply({ ephemeral: true });

    // Reply
    if (student) {
      // Check on Google Sheets
      if (await verifyStudent(student.email, "OIE-Basic")) {
        const successEmbed = new EmbedBuilder()
          .setTitle("Success!")
          .setDescription(
            `${student.email}, You've completed your verification`
          )
          .setColor("#72d572");

        await interaction.editReply({
          embeds: [successEmbed],
        });

        // Give the role
        const role = interaction.guild?.roles.cache.find(
          (role) => role.name === "1"
        );
        if (role) {
          await interaction.guild?.members.cache
            .get(interaction.user.id)
            ?.roles.add(role);
        }
      } else {
        await interaction.editReply({ embeds: [errorEmbed] });
      }
    } else {
      await interaction.editReply({ embeds: [errorEmbed] });
    }
  }

  @ButtonComponent({ id: "intermediate" })
  async IntermediateButton(interaction: ButtonInteraction): Promise<void> {
    const student = await findStudentById(interaction.user.id);
    await interaction.deferReply({ ephemeral: true });

    // Reply
    if (student) {
      // Check on Google Sheets
      if (await verifyStudent(student.email, "OIE-Intermediate")) {
        const successEmbed = new EmbedBuilder()
          .setTitle("Success!")
          .setDescription(
            `${student.email}, You've completed your verification`
          )
          .setColor("#72d572");

        await interaction.editReply({
          embeds: [successEmbed],
        });

        // Give the role
        const role = interaction.guild?.roles.cache.find(
          (role) => role.name === "2"
        );
        if (role) {
          await interaction.guild?.members.cache
            .get(interaction.user.id)
            ?.roles.add(role);
        }
      } else {
        await interaction.editReply({ embeds: [errorEmbed] });
      }
    } else {
      await interaction.editReply({ embeds: [errorEmbed] });
    }
  }

  @ButtonComponent({ id: "advanced" })
  async AdvancedButton(interaction: ButtonInteraction): Promise<void> {
    const student = await findStudentById(interaction.user.id);
    await interaction.deferReply({ ephemeral: true });

    // Reply
    if (student) {
      // Check on Google Sheets
      if (await verifyStudent(student.email, "OIE-Advanced")) {
        const successEmbed = new EmbedBuilder()
          .setTitle("Success!")
          .setDescription(
            `${student.email}, You've completed your verification`
          )
          .setColor("#72d572");

        await interaction.editReply({
          embeds: [successEmbed],
        });

        // Give the role
        const role = interaction.guild?.roles.cache.find(
          (role) => role.name === "3"
        );
        if (role) {
          await interaction.guild?.members.cache
            .get(interaction.user.id)
            ?.roles.add(role);
        }
      } else {
        await interaction.editReply({ embeds: [errorEmbed] });
      }
    } else {
      await interaction.editReply({ embeds: [errorEmbed] });
    }
  }

  @ButtonComponent({ id: "pro" })
  async ProButton(interaction: ButtonInteraction): Promise<void> {
    const student = await findStudentById(interaction.user.id);
    await interaction.deferReply({ ephemeral: true });

    // Reply
    if (student) {
      // Check on Google Sheets
      if (await verifyStudent(student.email, "OIE-Pro")) {
        const successEmbed = new EmbedBuilder()
          .setTitle("Success!")
          .setDescription(
            `${student.email}, You've completed your verification`
          )
          .setColor("#72d572");

        await interaction.editReply({
          embeds: [successEmbed],
        });

        // Give the role
        const role = interaction.guild?.roles.cache.find(
          (role) => role.name === "4"
        );
        if (role) {
          await interaction.guild?.members.cache
            .get(interaction.user.id)
            ?.roles.add(role);
        }
      } else {
        await interaction.editReply({ embeds: [errorEmbed] });
      }
    } else {
      await interaction.editReply({ embeds: [errorEmbed] });
    }
  }
}
