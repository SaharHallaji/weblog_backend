import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger"
import * as fs from "fs"
import env from './config/env'
import helmet from 'helmet'

async function bootstrap() {
    // Initialize app
    const app = await NestFactory.create(AppModule)

    // Helmet security setup
    app.use(helmet())


    // Config Swagger
    const config = new DocumentBuilder()
        .setTitle('Weblog Backend')
        .setDescription('An Sample Project Development App')
        .setVersion('1.0.0')
        .addBearerAuth({type: "http", scheme: "bearer"})
        .build()

    const document = SwaggerModule.createDocument(app, config, {
        deepScanRoutes: true
    })

    // Setup Swagger
    SwaggerModule.setup('docs', app, document, {
        explorer: true,
        customCss: fs.readFileSync("./src/config/swagger_theme.css").toString("utf8")
    })

    // Run app
    await app.listen(env().PORT, '0.0.0.0')
}

bootstrap()
