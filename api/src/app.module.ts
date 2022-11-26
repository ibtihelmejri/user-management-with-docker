import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import {config} from './orm.config'
import { RegistrationsModule } from './registrations/registrations.module';
// import { ConfigModule } from '@nestjs/config';
// import { userInfo } from 'os';

@Module({
  imports: [
    // TypeOrmModule.forRoot(config), 
    // UsersModule, RegistrationsModule
    // ConfigModule.forRoot({isGlobal: true}),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   url: process.env.DATABASE_URL,
    //   // autoLoadEntities: true,
    //   synchronize: true,
    //   entities:['dist/**/*.entity{.ts,.js}'],

    // }),
    // UsersModule, RegistrationsModule
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'db',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule, RegistrationsModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
