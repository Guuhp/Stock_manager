import { Body, Controller, Post } from '@nestjs/common';
import { AuthLogin } from './dto/auth.login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @Post('login')
    signIn(@Body() authLogin:AuthLogin){
        return this.authService.signIn(authLogin)
    }
}
