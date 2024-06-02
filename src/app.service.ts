import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { User } from "@prisma/client";

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createUser(userData: any): Promise<User>
  {
    return this.prisma.user.create({ data: userData });
  }

  async findAllUsers(){
    return this.prisma.user.findMany()
  }

  async findOneUser(id: string){
    return this.prisma.user.findUnique({
      where:{id}
    })
  }

  async updateUser(id: string, data: any){
    return this.prisma.user.update({
      where: {id},
      data
    })
  }

  async deleteUser(id: string){
    return this.prisma.user.delete({
      where: {id}
    })
  }
}
