import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UsersModule } from "src/modules/users/users.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthService } from "./auth.service";
import { SendEmailModule } from "src/modules/send-email/send-email.module";

@Module({
    imports: [JwtModule.register({
        secret: process.env.SECRET
    }),
        UsersModule,
        PrismaModule,
        SendEmailModule
    ],
    controllers: [AuthController],
    providers:[AuthService],
    exports:[AuthService]
})
export class AuthModule { }