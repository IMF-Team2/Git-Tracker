import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);

  constructor(@InjectConnection() private readonly connection: Connection) {}

  onModuleInit() {
    this.connection.on('connected', () => {
      this.logger.log('✅ Database connected successfully');
    });

    this.connection.on('disconnected', () => {
      this.logger.error('❌ Database disconnected');
    });

    this.connection.on('error', (error) => {
      this.logger.error(`❌ Database connection error: ${error}`);
    });
  }

  getHello(): string {
    const state = this.connection.readyState;

    this.logger.log(`Current DB connection state: ${state}`);
    return 'Hello world! Chck the console logs for DB status';
  }
}
