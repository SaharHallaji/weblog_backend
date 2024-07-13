import {Module} from '@nestjs/common';
import {AccountModule} from "./modules/account/account.module";
import env from "./config/env";
import {PostModule} from "./modules/post/post.module";
import {MongooseModule} from "@nestjs/mongoose"
import {GraphQLModule} from "@nestjs/graphql"
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo"
import { join } from 'path';

@Module({
    imports: [

        // Mongoose config
        MongooseModule.forRootAsync({
            useFactory: () => {
                console.log("MongoDB", `MongoDB is running at ${env().MONGO_CONNECTION}`)

                return {
                    uri: env().MONGO_CONNECTION
                }
            }
        }),

        // GraphQL Config
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            playground: true,
            path: '/api/graphql'
        }),

        AccountModule,
        PostModule
    ]
})

export class AppModule {
}