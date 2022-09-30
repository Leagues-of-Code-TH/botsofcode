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
            "Use `/rolemenu` to choose your pings and languages roles\n" +
            "Enjoy your stay!"
        );

      welcomeChannel.send({
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
