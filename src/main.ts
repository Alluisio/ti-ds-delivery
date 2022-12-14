import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { envs } from "./common/env-values";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: "*" });
  await app.listen(envs.APP_PORT);
}
bootstrap();
