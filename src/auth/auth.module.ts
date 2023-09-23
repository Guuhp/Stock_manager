import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UsersModule } from "src/users/users.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthService } from "./auth.service";

@Module({
    imports: [JwtModule.register({
        secret: "*V}Nh5f/o*>44I)0_qh£(gv_8@#8iaPad"
    }),
        UsersModule,
        PrismaModule],
    controllers: [AuthController],
    providers:[AuthService],
    exports:[AuthService]
})
export class AuthModule { }