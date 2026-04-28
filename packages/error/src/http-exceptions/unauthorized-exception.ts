import { BaseHTTPException, HTTPExceptionOptions } from './base-exception';

export class UnauthorizedException extends BaseHTTPException {
  constructor(opts?: HTTPExceptionOptions) {
    super(401, opts);
  }
}