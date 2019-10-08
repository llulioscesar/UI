/// <reference types="styled-components" />
import React, { ComponentClass, CSSProperties, FunctionComponent, ReactNode } from "react";
import { Theme } from "../../const/theme";
declare type Props = {
    children?: Element | ReactNode | FunctionComponent<{}> | ComponentClass<{}>;
    theme?: Theme;
    color?: string;
    style?: CSSProperties;
    className?: string | undefined;
    large?: boolean;
    title?: string;
};
export declare const NavigationBar: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<Props>, "color" | "style" | "large" | "title" | "children" | "className"> & {
    theme?: any;
}>;
export {};
//# sourceMappingURL=index.d.ts.map