import {Module} from "@nestjs/common";
import {AuthController} from "./Auth.controller";

@Module({

    controllers: [AuthController],

})
export class AccountModule {}