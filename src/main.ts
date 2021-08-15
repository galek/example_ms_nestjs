import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { VersioningType } from "@nestjs/common";
import {SentryLogger} from "./utils/sentryLogger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    //app.use(csurf());
    app.enableCors();
    app.use(helmet());
    app.use(compression());
    app.enableVersioning({
        type: VersioningType.URI
    });

    SentryLogger.InitSentry("", app)

    const config = new DocumentBuilder()
        .setTitle('Galek example of http microservice')
        .setDescription('The API description of example of http microservice')
        .setVersion('1.0')
        .addTag('Galek micro-service')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process?.env?.PORT ?? 3000);
}

bootstrap();
