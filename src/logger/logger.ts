import chalk from 'chalk';
import { InvalidTypeError } from '../errors';
const hexReg = /^[0-9a-fA-F]+$/;

const isHex = (input: string) => {
  if ('string' !== typeof input) {
    throw new TypeError('Expected a string in input field');
  }
  return hexReg.test(input);
};

interface LoggerConfig {
  successColor: string;
  errorColor: string;
  warningColor: string;
  infoColor: string;
}

export let loggerConfig: LoggerConfig = {
  successColor: '50c878',
  errorColor: '800020',
  warningColor: 'FFDB58',
  infoColor: '008080',
};

export const createChalkColor = (hex: string) => {
  if (hex.startsWith('#')) {
    throw new InvalidTypeError(
      'NotNecessaryHash',
      'The "#" is not necessary. Provide the hex code only'
    );
  }
  if (!isHex(hex)) {
    throw new InvalidTypeError('NotAHex', 'Expected a hex string');
  }

  const colorFunction = (...text: string[]) => {
    return chalk.hex(`#${hex}`)(text.join(' '));
  };

  return colorFunction;
};

export const Logger = {
  success: (...message: any[]) =>
    console.log(
      createChalkColor(loggerConfig.successColor)(...message.join(' '))
    ),
  error: (...message: any[]) =>
    console.log(
      createChalkColor(loggerConfig.errorColor)(...message.join(' '))
    ),
  warning: (...message: any[]) =>
    console.log(
      createChalkColor(loggerConfig.warningColor)(...message.join(' '))
    ),
  info: (...message: any[]) =>
    console.log(createChalkColor(loggerConfig.infoColor)(...message.join(' '))),
};
