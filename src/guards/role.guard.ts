import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from 'src/auth/auth.service';
import { ROLES_KEY } from 'src/decorators/role.decorator';
import { Role } from 'src/enums/role.enum';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const requiredRole = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRole) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    const data = await this.authService.checkToken(
      (authorization ?? '').split(' ')[1],
    );
    
    const user = await this.userService.findOne(data.id)
    console.log(user);
    

    const hasRequiredRole = requiredRole.filter((role) => role === user.role);
    console.log(hasRequiredRole.length > 0);
    return hasRequiredRole.length > 0;
  }
}
