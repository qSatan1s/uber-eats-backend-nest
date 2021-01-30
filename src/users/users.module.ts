import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { JwtService } from '../jwt/jwt.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigService, JwtService],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
