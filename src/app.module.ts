import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    name: 'default',
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'users',
    autoLoadEntities: true,
    entities: [join(__dirname, '**/**.entity{.ts,.js}')]
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
