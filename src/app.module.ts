import { Module } from '@nestjs/common';
import {AccountModule} from "./modules/account/account.module";
import {MongooseModule} from "@nestjs/mongoose";
import env from "./config/env";


@Module({
    imports:[
        AccountModule,

        // Mongoose config
        MongooseModule.forRootAsync({
            useFactory: () => {
                console.log("MongoDB", `MongoDB is running at ${env().MONGO_CONNECTION}`)

                return {
                    uri: env().MONGO_CONNECTION
                }
            }
        }),

    ]
})

export class AppModule {}