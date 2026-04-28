import type { ZodError } from 'zod';

import { BaseError } from './base-error';
import { parseZodErrorIssues } from './utils';
import { ErrorCode } from './error-code';

type Context = { raw: unknown };

export class SchemaError extends BaseError<Context> {
  public readonly name = 'SchemaError';
  public readonly code: ErrorCode = 'UNPROCESSABLE_ENTITY';

  constructor(opts: {
    message: string;
    cause?: BaseError;
    context?: Context;
  }) {
    super(opts);
  }

  static fromZod<T>(e: ZodError<T>, raw: unknown): SchemaError {
    return new SchemaError({
      message: parseZodErrorIssues(e.issues),
      context: { raw: JSON.stringify(raw) },
    });
  }
}
