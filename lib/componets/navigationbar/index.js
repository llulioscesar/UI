"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../const/theme");
var color_1 = require("../../const/color");
var navigationBar = function (props) {
    return (react_1.default.createElement("div", { className: props.className, style: props.style },
        props.large == true && (react_1.default.createElement("div", { className: 'ui-navigation-bar-container' },
            react_1.default.createElement("div", { className: 'ui-navigation-bar-controls' }, props.children),
            react_1.default.createElement("div", { className: 'ui-navigation-bar-title' }, props.title))),
        props.large == false && (react_1.default.createElement("div", { className: 'ui-navigation-bar-container' },
            react_1.default.createElement("div", { className: 'ui-navigation-bar-controls' },
                // @ts-ignore
                props.children[0] || props.children || (react_1.default.createElement("div", null)),
                react_1.default.createElement("div", { className: 'ui-navigation-bar-title' }, props.title),
                // @ts-ignore
                props.children[1] || (react_1.default.createElement("div", null)))))));
};
var getColor = function (props) {
    // @ts-ignore
    var color = props.color || props.theme.colorBase || color_1.COLOR_BASE;
    return color;
};
navigationBar = styled_components_1.default(navigationBar)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display:flex;\n    flex:1;\n    width: 100%;\n    height:", ";\n    align-items: center;\n    background: ", ";\n    \n    .ui-navigation-bar-container {\n        padding: 0 15px;\n        display:flex;\n        flex:1;\n        height:", ";\n        flex-direction: ", ";\n        width:100%;\n        align-items: center;\n    }\n    \n    .ui-navigation-bar-controls {\n        height:44px\n        min-height:44px;\n        max-height:44px\n        display:flex;\n        flex:1;\n        align-items: center;\n        width:100%;\n        justify-content: space-between;\n    }\n    \n    .ui-navigation-bar-title {\n        font-style: normal;\n        font-weight: bold!important;\n        display: ", ";\n        font-size: ", ";\n        color: black;\n        max-height: 52px;\n        height: ", ";\n        width: ", ";\n        text-align: left;\n    }\n    \n    @media (max-width:767px){\n        .ui-navigation-bar-container {\n            padding:0 8px\n            height: ", "\n        }\n        \n        & {\n            height: ", "\n        }\n    }\n    \n"], ["\n    display:flex;\n    flex:1;\n    width: 100%;\n    height:", ";\n    align-items: center;\n    background: ", ";\n    \n    .ui-navigation-bar-container {\n        padding: 0 15px;\n        display:flex;\n        flex:1;\n        height:", ";\n        flex-direction: ", ";\n        width:100%;\n        align-items: center;\n    }\n    \n    .ui-navigation-bar-controls {\n        height:44px\n        min-height:44px;\n        max-height:44px\n        display:flex;\n        flex:1;\n        align-items: center;\n        width:100%;\n        justify-content: space-between;\n    }\n    \n    .ui-navigation-bar-title {\n        font-style: normal;\n        font-weight: bold!important;\n        display: ", ";\n        font-size: ", ";\n        color: black;\n        max-height: 52px;\n        height: ", ";\n        width: ", ";\n        text-align: left;\n    }\n    \n    @media (max-width:767px){\n        .ui-navigation-bar-container {\n            padding:0 8px\n            height: ", "\n        }\n        \n        & {\n            height: ", "\n        }\n    }\n    \n"])), function (props) { return props.large ? '102px' : '50px'; }, function (props) { return getColor(props); }, function (props) { return props.large ? '102px' : '50px'; }, function (props) { return props.large ? 'column' : 'row'; }, function (props) { return props.large ? 'block' : 'unset'; }, function (props) { return props.large ? '2.3125rem!important' : '1.0625rem!important'; }, function (props) { return props.large ? '52px' : 'auto'; }, function (props) { return props.large ? '100%' : 'auto'; }, function (props) { return props.large ? '96px' : '44px'; }, function (props) { return props.large ? '96px' : '44px'; });
navigationBar.defaultProps = {
    theme: theme_1.DefaultTheme,
    large: true,
    title: 'My App'
};
exports.NavigationBar = styled_components_1.withTheme(navigationBar);
var templateObject_1;
//# sourceMappingURL=index.js.map