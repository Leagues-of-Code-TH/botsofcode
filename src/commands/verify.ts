import {
  ButtonInteraction,
  CommandInteraction,
  MessageActionRowComponentBuilder,
  EmbedBuilder,
} from "discord.js";

import { ActionRowBuilder, ApplicationCommandOptionType } from "discord.js";

import { ButtonComponent, Discord, Slash, SlashOption } from "discordx";

import { createStudent, findStudentById } from "../lib/redis.js";
import { verifyStudent } from "../lib/sheets.js";

import {
  BasicButton,
  IntermediateButton,
  AdvancedButton,
  ProButton,
} from "../lib/spainEmbeds.js";

import { MathButton } from "../lib/thaiEmbeds.js";
import { Server } from "../lib/types.js";

const errorEmbed = new EmbedBuilder()
  .setTitle("Name not found")
  .setDescription(
    "There is something missing from your registration process that doesn't let us enroll you in the course.\n Please contact the Leagues of Code team through `support@leaguesofcode.com`"
  )
  .setColor("#f36c60");

const expiredEmbed = new EmbedBuilder()
  .setTitle("Command Expired")
  .setDescription(
    "You've used this command for too long.\n Please try again.\nIf you believe this is an error, please contact a staff."
  )
  .setColor("#f36c60");

async function verifySelect(
  student: any,
  course: string,
  roleName: string,
  interaction: ButtonInteraction,
  server: Server
): Promise<void> {
  // Reply
  if (student) {
    // Check on Google Sheets
    if (await verifyStudent(student.email, course, server)) {
      const successEmbed = new EmbedBuilder()
        .setTitle("Success!")
        .setDescription(`${student.email}, You've completed your verification`)
        .setColor("#72d572");

      await interaction.editReply({
        embeds: [successEmbed],
      });

      // Give the role
      const role = interaction.guild?.roles.cache.find(
        (role) => role.name === roleName
      );

      if (role) {
        await interaction.guild?.members.cache
          .get(interaction.user.id)
          ?.roles.remove(
            interaction.guild?.members.cache.get(interaction.user.id)?.roles
              .cache ?? "None"
          );

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

    const guildId = interaction.guildId;

    // Button rows
    const spainRow =
      new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
        BasicButton,
        IntermediateButton,
        AdvancedButton,
        ProButton
      );

    const thaiRow =
      new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
        MathButton
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
      console.log("Command Expired");
    }, 10 * 60 * 1000);

    if (guildId == process.env.SP_ID) {
      await interaction.editReply({
        content: `${email}, Select your course!`,
        components: [spainRow],
      });
    } else if (guildId == process.env.TH_ID) {
      await interaction.editReply({
        content: `${email}, Select your course!`,
        components: [thaiRow],
      });
    } else {
      await interaction.editReply({
        content: `Please use this command inside a Leagues of Code server`,
      });
    }
  }

  // Events after button press
  // Clear this repeating junk
  // Spain buttons
  @ButtonComponent({ id: "basic" })
  async BasicButton(interaction: ButtonInteraction): Promise<void> {
    const student = await findStudentById(interaction.user.id);
    await interaction.deferReply({ ephemeral: true });

    await verifySelect(
      student,
      "OIE-Basic",
      "OIE-Basic",
      interaction,
      Server.SPAIN
    );
  }

  @ButtonComponent({ id: "intermediate" })
  async IntermediateButton(interaction: ButtonInteraction): Promise<void> {
    const student = await findStudentById(interaction.user.id);
    await interaction.deferReply({ ephemeral: true });

    await verifySelect(
      student,
      "OIE-Intermediate",
      "OIE-Intermediate",
      interaction,
      Server.SPAIN
    );
  }

  @ButtonComponent({ id: "advanced" })
  async AdvancedButton(interaction: ButtonInteraction): Promise<void> {
    const student = await findStudentById(interaction.user.id);
    await interaction.deferReply({ ephemeral: true });

    await verifySelect(
      student,
      "OIE-Advanced",
      "OIE-Advanced",
      interaction,
      Server.SPAIN
    );
  }

  @ButtonComponent({ id: "pro" })
  async ProButton(interaction: ButtonInteraction): Promise<void> {
    const student = await findStudentById(interaction.user.id);
    await interaction.deferReply({ ephemeral: true });

    await verifySelect(
      student,
      "OIE-Pro",
      "OIE-Pro",
      interaction,
      Server.SPAIN
    );
  }

  @ButtonComponent({ id: "math" })
  async MathButton(interaction: ButtonInteraction): Promise<void> {
    const student = await findStudentById(interaction.user.id);
    await interaction.deferReply({ ephemeral: true });

    await verifySelect(student, "Math1", "Math", interaction, Server.THAI);
  }

  // Thai buttons
}
