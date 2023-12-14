import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    
    console.log(exception.getStatus());
    console.log(exception.getResponse());

    const {status, body} = 
        exception instanceof HttpException
        ? {
            status: exception.getStatus(),
            body: exception.getResponse()
        }:
        {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            body: {
                status_code: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: request.url
            }
        } 
    response.status(status).json(body);
  }
}
