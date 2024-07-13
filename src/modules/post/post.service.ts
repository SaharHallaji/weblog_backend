import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Post, PostDocument} from "../../schemas/post/post.schema";
import {Query} from "@nestjs/graphql";

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {
    }

    async findAllPosts() {
        return this.postModel.find({}).exec()
    }


}