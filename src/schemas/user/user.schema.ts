import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import {Field, ID, ObjectType} from "@nestjs/graphql";

export type UserDocument = HydratedDocument<User>

@ObjectType()
@Schema()
export class User {
    @Field(()=> ID)
    id?: string

    @Field()
    @Prop({ required: true })
    first_name: string

    @Field()
    @Prop({ required: true })
    last_name: string

    @Field()
    @Prop({ required: true })
    email: string

    @Field()
    @Prop({ required: true })
    password: string

    @Field()
    @Prop()
    date_of_birth: Date
}

export const UserSchema = SchemaFactory.createForClass(User)