import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
  const logger = new Logger('NestApplication');
  logger.log(`App Listening on http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();