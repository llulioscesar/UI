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
var polished_1 = require("polished");
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
    var color = props.color || props.theme.navigationBar.color || color_1.COLOR_BASE;
    return color;
};
var getTextColor = function (props) {
    // @ts-ignore
    return props.textColor || props.theme.navigationBar.text;
};
var getTitleColor = function (props) {
    // @ts-ignore
    return props.titleColor || props.theme.navigationBar.title;
};
navigationBar = styled_components_1.default(navigationBar)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display:flex;\n    flex:1;\n    width: 100%;\n    height:", ";\n    align-items: center;\n    background: ", ";\n    border-bottom: 1px solid #dddddf;\n    \n    \n    \n    .ui-navigation-bar-container {\n        padding: 0 15px;\n        display:flex;\n        flex:1;\n        height:", ";\n        flex-direction: ", ";\n        width:100%;\n        align-items: center;\n    }\n    \n    .ui-navigation-bar-controls {\n        height:44px\n        min-height:44px;\n        max-height:44px\n        display:flex;\n        align-items: center;\n        width:100%;\n        justify-content: space-between;\n        position:relative;\n    }\n    \n    .ui-navigation-bar-title {\n        font-style: normal;\n        font-weight: bold!important;\n        display: ", ";\n        font-size: ", ";\n        color: ", ";\n        max-height: 52px;\n        height: ", ";\n        width: 100%;\n        text-align: ", ";\n        position: ", ";\n        top: ", ";\n        transform: ", ";\n        z-index:1\n    }\n    \n    .ui-navigation-bar-link {\n        color: ", ";\n        display: flex;\n        align-items: center;\n        cursor:pointer;\n        font-size: 17px;\n    }\n    \n    .ui-navigation-bar-controls > svg,\n    .ui-navigation-bar-panel > svg,\n    .ui-navigation-bar-link > svg {\n        fill: ", ";\n        width:30px;\n        height:30px;\n        margin-rigth:0px;\n        cursor:pointer;\n    }\n    \n    .ui-navigation-bar-controls > svg:active,\n    .ui-navigation-bar-panel > svg:active,\n    .ui-navigation-bar-link:active > svg {\n        fill: ", "!important; \n    }\n    \n    .ui-navigation-bar-link:active {\n        color: ", "!important;\n    }\n    \n    .ui-navigation-bar-panel {\n        display:flex;\n        color:", "!important;\n        align-items: center;\n        z-index: 10;\n        font-size: 17px;\n    }\n    \n    @media (max-width:767px){\n        .ui-navigation-bar-container {\n            padding:0 8px\n            height: ", "\n        }\n        \n        & {\n            height: ", "\n        }\n    }\n    \n"], ["\n    display:flex;\n    flex:1;\n    width: 100%;\n    height:", ";\n    align-items: center;\n    background: ", ";\n    border-bottom: 1px solid #dddddf;\n    \n    \n    \n    .ui-navigation-bar-container {\n        padding: 0 15px;\n        display:flex;\n        flex:1;\n        height:", ";\n        flex-direction: ", ";\n        width:100%;\n        align-items: center;\n    }\n    \n    .ui-navigation-bar-controls {\n        height:44px\n        min-height:44px;\n        max-height:44px\n        display:flex;\n        align-items: center;\n        width:100%;\n        justify-content: space-between;\n        position:relative;\n    }\n    \n    .ui-navigation-bar-title {\n        font-style: normal;\n        font-weight: bold!important;\n        display: ", ";\n        font-size: ", ";\n        color: ", ";\n        max-height: 52px;\n        height: ", ";\n        width: 100%;\n        text-align: ", ";\n        position: ", ";\n        top: ", ";\n        transform: ", ";\n        z-index:1\n    }\n    \n    .ui-navigation-bar-link {\n        color: ", ";\n        display: flex;\n        align-items: center;\n        cursor:pointer;\n        font-size: 17px;\n    }\n    \n    .ui-navigation-bar-controls > svg,\n    .ui-navigation-bar-panel > svg,\n    .ui-navigation-bar-link > svg {\n        fill: ", ";\n        width:30px;\n        height:30px;\n        margin-rigth:0px;\n        cursor:pointer;\n    }\n    \n    .ui-navigation-bar-controls > svg:active,\n    .ui-navigation-bar-panel > svg:active,\n    .ui-navigation-bar-link:active > svg {\n        fill: ", "!important; \n    }\n    \n    .ui-navigation-bar-link:active {\n        color: ", "!important;\n    }\n    \n    .ui-navigation-bar-panel {\n        display:flex;\n        color:", "!important;\n        align-items: center;\n        z-index: 10;\n        font-size: 17px;\n    }\n    \n    @media (max-width:767px){\n        .ui-navigation-bar-container {\n            padding:0 8px\n            height: ", "\n        }\n        \n        & {\n            height: ", "\n        }\n    }\n    \n"])), function (props) { return props.large ? '102px' : '50px'; }, function (props) { return getColor(props); }, function (props) { return props.large ? '102px' : '50px'; }, function (props) { return props.large ? 'column' : 'row'; }, function (props) { return props.large ? 'block' : 'unset'; }, function (props) { return props.large ? '34px!important' : '17px!important'; }, function (props) { return getTitleColor(props); }, function (props) { return props.large ? '52px' : 'auto'; }, function (props) { return props.large ? 'left' : 'center'; }, function (props) { return props.large ? 'relative' : 'absolute'; }, function (props) { return props.large ? '0%' : 'calc(50% - 20px)'; }, function (props) { return props.large ? 'none' : 'translateY(50%)'; }, function (props) { return getTextColor(props); }, function (props) { return getTextColor(props); }, function (props) { return polished_1.darken(0.1, getTextColor(props)); }, function (props) { return polished_1.darken(0.1, getTextColor(props)); }, function (props) { return getTextColor(props); }, function (props) { return props.large ? '96px' : '44px'; }, function (props) { return props.large ? '96px' : '44px'; });
navigationBar.defaultProps = {
    theme: theme_1.DefaultTheme,
    large: true,
    title: 'My App'
};
exports.NavigationBar = styled_components_1.withTheme(navigationBar);
var templateObject_1;
//# sourceMappingURL=index.js.map