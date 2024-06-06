import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProxyMiddleware } from './middleware/proxy.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use the proxy middleware
  app.use(new ProxyMiddleware().use);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`API GATEWAY STARTED on port ${PORT}`);
}
bootstrap();
