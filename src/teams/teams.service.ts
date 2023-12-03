import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from './schemas/teams.schema';

@Injectable()
export class TeamsService {
  constructor(@InjectModel('Team') private readonly teamModel: Model<Team>) {}

  async insertTeam(name: string, leagueId: string) {
    const newTeam = new this.teamModel({
      name,
      leagueId,
    });
    const res = await newTeam.save();

    return res.id as string;
  }

  async findAllTeams() {
    const teams = await this.teamModel.find().exec();
    return teams.map((team) => ({
      id: team._id,
      name: team.name,
      leagueId: team.leagueId,
    }));
  }

  async findOneTeamById(id: string) {
    const team = await this.findTeamById(id);
    return {
      id: team.id,
      name: team.name,
      leagueId: team.leagueId,
    };
  }

  async deleteTeamById(id: string) {
    const deleted = await this.teamModel.deleteOne({ _id: id }).exec();
    if (deleted.deletedCount === 0) {
      throw new NotFoundException('Could not find Team with id: ' + id);
    }
  }

  private async findTeamById(id: string) {
    let team;
    try {
      team = await this.teamModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException(error);
    }
    if (!team) {
      throw new NotFoundException();
    }
    return team;
  }
}
