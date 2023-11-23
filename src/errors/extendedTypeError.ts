export class InvalidTypeError extends TypeError {
  constructor(prefix: string, ...message: string[]) {
    super(`[${prefix}]: ${message.join(' ')}`);
    this.name = 'InvalidTypeError';
  }
}
