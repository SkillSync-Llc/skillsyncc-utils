"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTypeError = void 0;
class InvalidTypeError extends TypeError {
    constructor(prefix, ...message) {
        super(`[${prefix}]: ${message.join(' ')}`);
        this.name = 'InvalidTypeError';
    }
}
exports.InvalidTypeError = InvalidTypeError;
//# sourceMappingURL=extendedTypeError.js.map