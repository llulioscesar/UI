/// <reference types="styled-components" />
import React, { CSSProperties } from 'react';
import { Theme } from "../../const/theme";
interface Button {
    className?: string | undefined;
    text?: string;
    color?: string;
    textColor?: string;
    style?: CSSProperties;
    full?: boolean;
    width?: string;
    typeStyle?: "default" | "standar" | "danger" | "success" | "error";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    theme?: Theme;
    invested?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<Button>, "color" | "style" | "text" | "children" | "width" | "className" | "onClick" | "textColor" | "full" | "typeStyle" | "invested"> & {
    theme?: any;
}>;
export {};
//# sourceMappingURL=index.d.ts.map