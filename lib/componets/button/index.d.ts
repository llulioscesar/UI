/// <reference types="styled-components" />
import React, { CSSProperties } from 'react';
import { Theme } from "../../const/theme";
declare type Props = {
    className?: string | undefined;
    text?: string;
    color?: string;
    textColor?: string;
    style?: CSSProperties;
    full?: boolean;
    width?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    theme: Theme;
};
export declare const Button: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<Props>, "color" | "style" | "text" | "children" | "width" | "className" | "onClick" | "textColor" | "full"> & {
    theme?: any;
}>;
export {};
//# sourceMappingURL=index.d.ts.map