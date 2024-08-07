import {Module} from "@nestjs/common";
import {PostService} from "./post.service";
import {PostResolver} from "./post.resolver";
import {MongooseModule} from "@nestjs/mongoose";
import {Post, PostSchema} from "../../schemas/post/post.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Post.name, schema: PostSchema}
        ])
    ],
    providers: [PostService, PostResolver],

})
export class PostModule {}