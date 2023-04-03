import { ButtonInteraction } from "discord.js";
import { verifySelect } from "../commands/verify.js";
import { findStudentById } from "./redis.js";
import { Server } from "./types.js";

export interface ButtonOptions {
  id: string;
  role: string;
  serverType: Server;
}

export default function createButtonHandler({
  id,
  role,
  serverType,
}: ButtonOptions) {
  return async function ButtonHandler(
    interaction: ButtonInteraction
  ): Promise<void> {
    const student = await findStudentById(interaction.user.id);
    await interaction.deferReply({ ephemeral: true });

    await verifySelect(student, role, role, interaction, serverType);
  };
}

const AdvancedButtonHandler = createButtonHandler({
  id: "advanced",
  role: "OIE-Advanced",
  serverType: Server.SPAIN,
});
