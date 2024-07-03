import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import {HydratedDocument, Types} from 'mongoose'
import {User} from "../user/user.schema";

export type PostDocument = HydratedDocument<Post>


@Schema()
export class Post {
    @Prop({ required: true })
    content: string

    @Prop({ required: true })
    created_at: Date

    @Prop()
    image?: string

    @Prop({ required: true })
    author: User | Types.ObjectId | string

    @Prop({ required: true })
    title: string
}

export const PostSchema = SchemaFactory.createForClass(Post)