import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";

@Discord()
export class MemberJoin {
  @On()
  guildMemberAdd([member]: ArgsOf<"guildMemberAdd">, client: Client): void {
    console.log("A new member joined", client.user?.username, member.displayName);
  }
}
