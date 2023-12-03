import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  async getAllTeams() {
    return await this.teamsService.findAllTeams();
  }

  @Get(':id')
  async getTeamById(@Param('id') teamId: string) {
    return await this.teamsService.findOneTeamById(teamId);
  }

  @Post()
  async addTeam(
    @Body('name') name: string,
    @Body('leagueId') leagueId: string,
  ) {
    return await this.teamsService.insertTeam(name, leagueId);
  }

  @Delete(':id')
  async deleteTeamById(@Param('id') teamId: string) {
    await this.teamsService.deleteTeamById(teamId);
    return null;
  }
}
