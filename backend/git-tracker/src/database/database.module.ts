import { Module, Global, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService, ConfigModule } from '@nestjs/config';
import mongoose from 'mongoose'; // Import full mongoose to connect manually

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const logger = new Logger('DatabaseModule');
        const uri = configService.get<string>('dbURI');

        // Manually connect to ensure events are captured
        if (!uri) {
          throw new Error(
            'Database URI is not defined in environment variables',
          );
        }
        try {
          await mongoose.connect(uri);
          logger.log(' Database connected successfully');
        } catch (err) {
          logger.error(' Failed to connect to database', err);
        }

        mongoose.connection.on('disconnected', () => {
          logger.warn(' Database disconnected');
        });

        return {
          uri, // Still needed by MongooseModule
        };
      },
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
