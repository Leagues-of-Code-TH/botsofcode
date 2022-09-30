import { EmbedBuilder, TextChannel } from "discord.js";
import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";

@Discord()
export class MemberJoin {
  @On()
  guildMemberAdd([member]: ArgsOf<"guildMemberAdd">, client: Client): void {
    const welcomeChannelId = "1025383372299710464";

    if (welcomeChannelId !== null) {
      const welcomeChannel = client.channels.cache.get(
        welcomeChannelId
      ) as TextChannel;

      const welcomeMessageEmbed = new EmbedBuilder()
        .setColor("Aqua")
        .setTitle("New Member")
        .setDescription(
          `Welcome ${member.user.username} to the Leagues of Code \n` +
            "Select your class using `/somecommand` before interacting with the server\n" +
            "Enjoy your stay!"
        );

      welcomeChannel.send({
        content: `<@${member.user.id}>`,
        embeds: [welcomeMessageEmbed],
      });
    }

    console.log(
      "A new member joined",
      client.user?.username,
      member.displayName
    );
  }
}
