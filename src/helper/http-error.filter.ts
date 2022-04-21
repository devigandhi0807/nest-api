import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Response, Request } from "express";

@Catch()
export class HttpErrorFilter implements ExceptionFilter{

  catch(exception:HttpException , host:ArgumentsHost){
   const context=host.switchToHttp();
   const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();
    const errorResponse = {
        statusCode: status,
        timestamp: new Date().toLocaleDateString(),
        path: request.url,
        method:request.method,
        message:exception.message || null
      }
      Logger.error(`${request.method} ${request.url}`,JSON.stringify(errorResponse),'ExceptionFilter');
    response
      .status(status)
      .json(errorResponse);
  }
}
