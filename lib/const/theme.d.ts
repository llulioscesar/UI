export interface Theme {
    color: string;
    colorBase: string;
    colorSuccess: string;
    colorDanger: string;
    colorError: string;
    colorWhite: string;
    colorBlack: string;
    buttons: {
        default: {
            text: string;
            color: string;
        };
        standar: {
            text: string;
            color: string;
        };
        success: {
            text: string;
            color: string;
        };
        danger: {
            text: string;
            color: string;
        };
        error: {
            text: string;
            color: string;
        };
    };
    navigationBar: {
        color: string;
        text: string;
        title: string;
    };
}
export declare const DefaultTheme: Theme;
//# sourceMappingURL=theme.d.ts.map