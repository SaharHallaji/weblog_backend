import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import {HydratedDocument, Types} from 'mongoose'
import {User} from "../user/user.schema";
import {Field, ID, ObjectType} from "@nestjs/graphql";


export type PostDocument = HydratedDocument<Post>


@Schema()
@ObjectType({ description: 'Post schema' })
export class Post {
    @Field(() => ID)
    id?: string

    @Field()
    @Prop({ required: true })
    content: string

    @Field(()=> Date)
    @Prop({ required: true })
    created_at: Date

    @Field({nullable:true})
    @Prop()
    image?: string

    @Field(()=> User)
    @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
    author: User | Types.ObjectId | string

    @Field()
    @Prop({ required: true })
    title: string
}


export const PostSchema = SchemaFactory.createForClass(Post)