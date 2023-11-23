interface LoggerConfig {
    successColor: string;
    errorColor: string;
    warningColor: string;
    infoColor: string;
}
export declare let loggerConfig: LoggerConfig;
export declare const createChalkColor: (hex: string) => (...text: string[]) => string;
export declare const Logger: {
    success: (...message: any[]) => void;
    error: (...message: any[]) => void;
    warning: (...message: any[]) => void;
    info: (...message: any[]) => void;
};
export {};
//# sourceMappingURL=logger.d.ts.map