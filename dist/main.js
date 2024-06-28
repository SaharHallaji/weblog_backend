"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const fs = require("fs");
const env_1 = require("./config/env");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Weblog Backend')
        .setDescription('An Sample Project Development App')
        .setVersion('1.0.0')
        .addBearerAuth({ type: "http", scheme: "bearer" })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        deepScanRoutes: true
    });
    swagger_1.SwaggerModule.setup('docs', app, document, {
        explorer: true,
        customCss: fs.readFileSync("./src/config/swagger_theme.css").toString("utf8")
    });
    await app.listen((0, env_1.default)().PORT, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map