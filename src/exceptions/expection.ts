import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomHttpException extends HttpException {
  constructor(status: HttpStatus, message: string) {
    super({ success: false, message }, status);
  }
}

export class UnauthorizedException extends CustomHttpException {
  constructor(message: string) {
    super(HttpStatus.UNAUTHORIZED, message);
  }
}

export class ForbiddenException extends CustomHttpException {
  constructor(message: string) {
    super(HttpStatus.FORBIDDEN, message);
  }
}

export class NotFoundException extends CustomHttpException {
  constructor(prefix: string) {
    super(HttpStatus.NOT_FOUND, `${prefix} not found`);
  }
}

export class InternalErrorException extends CustomHttpException {
  constructor(message: string) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, message);
  }
}

