import { EmbedBuilder, GuildMember, TextChannel } from "discord.js";
import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";

async function sendEmbed(
  member: GuildMember,
  channel: TextChannel
): Promise<void> {
  const welcomeMessageEmbed = new EmbedBuilder()
    .setColor("Aqua")
    .setTitle("New Member")
    .setDescription(
      `Welcome ${member.user.username} to the Leagues of Code \n` +
        "There is something missing from your registration process that doesn't let us enroll you in the course.\nPlease contact the Leagues of Code team through `support@leaguesofcode.com`" +
        "Enjoy your stay!"
    );

  channel.send({
    content: `<@${member.user.id}>`,
    embeds: [welcomeMessageEmbed],
  });
}

@Discord()
export class MemberJoin {
  @On()
  async guildMemberAdd(
    [member]: ArgsOf<"guildMemberAdd">,
    client: Client
  ): Promise<void> {
    const thaiWelcome = process.env.WELCOME_CHANNEL_TH;
    const spainWelcome = process.env.WELCOME_CHANNEL_SP;
    const thaiId = process.env.TH_ID;
    const spainId = process.env.SP_ID;

    const guildId = member.guild.id;

    // if join in Thai
    if (thaiWelcome !== null && guildId == thaiId) {
      const thaiWelcomeChannel = client.channels.cache.get(
        thaiWelcome!
      ) as TextChannel;

      await sendEmbed(member, thaiWelcomeChannel);
    }

    // if join in Spain
    if (spainWelcome !== null && guildId == spainId) {
      const thaiWelcomeChannel = client.channels.cache.get(
        spainWelcome!
      ) as TextChannel;

      await sendEmbed(member, thaiWelcomeChannel);
    }

    console.log(
      "A new member joined",
      client.user?.username,
      member.displayName
    );
  }
}
