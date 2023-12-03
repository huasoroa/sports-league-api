import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Player {
  @Prop({ required: true })
  name: string;

  @Prop()
  jerseyNumber: string;

  @Prop()
  teamRole: string[]; // Role in the team e.g: LW, RW or QB or PG

  @Prop()
  isFreeAgent: boolean;

  @Prop()
  statsAverages;
}
