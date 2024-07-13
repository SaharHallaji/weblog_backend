import {Resolver, Query, Mutation, Args} from "@nestjs/graphql";
import {Post} from "../../schemas/post/post.schema";
import {PostService} from "./post.service"


@Resolver(() => Post)
export class PostResolver {
    constructor(private readonly postService: PostService) {
    }

    @Query(() => [Post])
    getPosts(): Promise<Post[]> {
        return this.postService.findAllPosts()
    }



}