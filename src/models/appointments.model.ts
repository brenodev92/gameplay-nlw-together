import { Guild } from "./guilds.model";

export type Appointments = {
  id: string;
  guild: Guild;
  category: string;
  date: string;
  description: string;
}