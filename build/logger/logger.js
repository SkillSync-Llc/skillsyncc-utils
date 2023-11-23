"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.createChalkColor = exports.loggerConfig = void 0;
const chalk_1 = __importDefault(require("chalk"));
const errors_1 = require("../errors");
const hexReg = /^[0-9a-fA-F]+$/;
const isHex = (input) => {
    if ('string' !== typeof input) {
        throw new TypeError('Expected a string in input field');
    }
    return hexReg.test(input);
};
exports.loggerConfig = {
    successColor: '50c878',
    errorColor: '800020',
    warningColor: 'FFDB58',
    infoColor: '008080',
};
const createChalkColor = (hex) => {
    if (hex.startsWith('#')) {
        throw new errors_1.InvalidTypeError('NotNecessaryHash', 'The "#" is not necessary. Provide the hex code only');
    }
    if (!isHex(hex)) {
        throw new errors_1.InvalidTypeError('NotAHex', 'Expected a hex string');
    }
    const colorFunction = (...text) => {
        return chalk_1.default.hex(`#${hex}`)(text.join(' '));
    };
    return colorFunction;
};
exports.createChalkColor = createChalkColor;
exports.Logger = {
    success: (...message) => console.log((0, exports.createChalkColor)(exports.loggerConfig.successColor)(...message.join(' '))),
    error: (...message) => console.log((0, exports.createChalkColor)(exports.loggerConfig.errorColor)(...message.join(' '))),
    warning: (...message) => console.log((0, exports.createChalkColor)(exports.loggerConfig.warningColor)(...message.join(' '))),
    info: (...message) => console.log((0, exports.createChalkColor)(exports.loggerConfig.infoColor)(...message.join(' '))),
};
//# sourceMappingURL=logger.js.map