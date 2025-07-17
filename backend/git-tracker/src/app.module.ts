import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './modules/project/projects.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigService available everywhere
      envFilePath: '.env',
    }),
    DatabaseModule,
    ProjectsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
