import { CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';
import { ForbiddenException } from 'src/exceptions/expection';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthVerify implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const data = await this.authService.checkToken(
        (authorization ?? '').split(' ')[1],
      );
      request.tokenPayload = data;
      request.user = await this.userService.findOne(data.id);
      return true;
    } catch {
      new HttpException('message', 400, { cause: new Error('Some Error') });
    }
  }
}
