import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactInfo, Employee, Meeting, Task } from './';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'msjay1043',
      database: 'typeorm_relations',
      entities: ['dist /**/*.entity{.ts,js}'],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Employee, Task, Meeting, ContactInfo]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
