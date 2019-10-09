import React, { ComponentClass, FunctionComponent, ReactChildren, ReactElement } from "react";
declare type Props = {
    icon?: Element | ReactChildren | ReactElement | FunctionComponent<{}> | ComponentClass<{}>;
    text?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};
export declare const NavigationBarLink: React.FunctionComponent<Props>;
export {};
//# sourceMappingURL=index.d.ts.map