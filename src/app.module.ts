import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './teams/teams.module';
import { LeaguesModule } from './leagues/leagues.module';
import { PlayersModule } from './players/players.module';
import { GamesModule } from './games/games.module';
import { SeasonsModule } from './seasons/seasons.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/sports-league'),
    TeamsModule,
    LeaguesModule,
    PlayersModule,
    GamesModule,
    SeasonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
