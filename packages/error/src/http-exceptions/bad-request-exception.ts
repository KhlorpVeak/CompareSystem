import { BaseHTTPException, HTTPExceptionOptions } from './base-exception';

export class BadRequestException extends BaseHTTPException {
  constructor(opts?: HTTPExceptionOptions) {
    super(400, opts);
  }
}