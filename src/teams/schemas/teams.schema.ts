import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { League } from 'src/leagues/schemas/league.schema';
import { Player } from 'src/players/schema/player.schema';

export type TeamDocument = mongoose.HydratedDocument<Team>;

export const TeamSchema = new mongoose.Schema({
  playerIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  leagueId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'League' }],
  name: { type: String, required: true },
  owner: { type: String, required: true },
});
@Schema()
export class Team {
  @Prop({ required: true })
  name: string;

  @Prop()
  owner: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] })
  players: Player[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'League' }] })
  leagues: League[];
}
