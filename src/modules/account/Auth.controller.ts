import {Controller, Post} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";

@Controller('auth')
@ApiTags("Accounting")
export class AuthController {
    @Post("/login")
    login(){
        //some code
    }
}
