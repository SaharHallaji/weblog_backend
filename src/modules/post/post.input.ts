import {Field, ID, InputType} from "@nestjs/graphql"
import {Length} from "class-validator"
import {User} from "../../schemas/user/user.schema";
import {Schema} from "mongoose";


@InputType()
export class PostInput {
    @Field()
    content: string

    @Field(()=> Date)
    created_at: Date

    @Field({nullable:true})
    image?: string

    @Field(()=> ID)
    author: string

    @Field()
    title: string
}