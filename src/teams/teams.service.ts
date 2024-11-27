import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TeamsService {
  constructor(private readonly db: PrismaService) {}

  create(CreateTeamDto: CreateTeamDto) {
    return this.db.team.create({
      data: CreateTeamDto
    });
  }

  findAll() {
    return this.db.team.findMany();
  }

  findOne(id: number) {
    return this.db.team.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return this.db.team.update({
      where: {
        id
      },
      data: updateTeamDto
    })
  }

  remove(id: number) {
    return this.db.team.delete({
      where: {
        id
      }
    });
  }

  addPlayer(teamId: number, playerId: number) {
    return this.db.team.update({
      where: {
        id: teamId
      },
      data: {
        players: {
          connect: {id: playerId}
        }
      }
    })
  }
}
