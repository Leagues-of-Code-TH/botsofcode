import { EmbedBuilder, GuildMember, TextChannel } from "discord.js";
import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";

import { thaiWelcome } from "../lib/thaiEmbeds.js";
import { spainWelcome } from "../lib/spainEmbeds.js";

async function sendEmbed(
  member: GuildMember,
  channel: TextChannel,
  embed: EmbedBuilder
): Promise<void> {
  channel.send({
    content: `<@${member.user.id}>`,
    embeds: [embed],
  });
}

@Discord()
export class MemberJoin {
  @On()
  async guildMemberAdd(
    [member]: ArgsOf<"guildMemberAdd">,
    client: Client
  ): Promise<void> {
    const thaiWelcomeId = process.env.WELCOME_CHANNEL_TH;
    const spainWelcomeId = process.env.WELCOME_CHANNEL_SP;
    const thaiId = process.env.TH_ID;
    const spainId = process.env.SP_ID;

    const guildId = member.guild.id;

    // if join in Thai
    if (thaiWelcomeId !== null && guildId == thaiId) {
      const thaiWelcomeChannel = client.channels.cache.get(
        thaiWelcomeId!
      ) as TextChannel;

      await sendEmbed(member, thaiWelcomeChannel, thaiWelcome);
    }

    // if join in Spain
    if (spainWelcomeId !== null && guildId == spainId) {
      const spainWelcomeChannel = client.channels.cache.get(
        spainWelcomeId!
      ) as TextChannel;

      await sendEmbed(member, spainWelcomeChannel, spainWelcome);
    }

    console.log(
      "A new member joined",
      client.user?.username,
      member.displayName
    );
  }
}
