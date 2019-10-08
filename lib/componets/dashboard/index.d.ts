/// <reference types="styled-components" />
import React, { ReactNode, FunctionComponent, ComponentClass, CSSProperties } from "react";
import { Theme } from '../../const/theme';
declare type Props = {
    style?: CSSProperties;
    className?: string | undefined;
    theme?: Theme;
    renderNavigationBar?: Element | ReactNode | FunctionComponent<{}> | ComponentClass<{}>;
    children: Element | ReactNode | FunctionComponent<{}> | ComponentClass<{}>;
};
export declare const Dashboard: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<Props>, "style" | "children" | "className" | "renderNavigationBar"> & {
    theme?: any;
}>;
export {};
//# sourceMappingURL=index.d.ts.map