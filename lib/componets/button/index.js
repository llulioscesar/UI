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
var color_1 = require("../../const/color");
var styled_components_1 = __importStar(require("styled-components"));
var polished_1 = require("polished");
var theme_1 = require("../../const/theme");
var getColor = function (props) {
    var color = (props.color || color_1.COLOR_DEFAULT);
    if (props.color === undefined) {
        switch (props.typeStyle) {
            case "default":
                // @ts-ignore
                color = props.invested ? 'white' : props.theme.buttons.default.color;
                break;
            case "standar":
                // @ts-ignore
                color = props.theme.buttons.standar.color;
                break;
            case "success":
                // @ts-ignore
                color = props.invested ? 'white' : props.theme.buttons.success.color;
                break;
            case "danger":
                // @ts-ignore
                color = props.invested ? 'white' : props.theme.buttons.danger.color;
                break;
            case "error":
                // @ts-ignore
                color = props.invested ? 'white' : props.theme.buttons.error.color;
                break;
        }
    }
    return color;
};
var getTextColor = function (props) {
    var color = (props.textColor || color_1.COLOR_WHITE);
    if (props.color === undefined) {
        switch (props.typeStyle) {
            case "default":
                // @ts-ignore
                color = props.invested ? props.theme.buttons.default.color : props.theme.buttons.default.text;
                break;
            case "standar":
                // @ts-ignore
                color = props.theme.buttons.standar.text;
                break;
            case "success":
                // @ts-ignore
                color = props.invested ? props.theme.buttons.success.color : props.theme.buttons.success.text;
                break;
            case "danger":
                // @ts-ignore
                color = props.invested ? props.theme.buttons.danger.color : props.theme.buttons.danger.text;
                break;
            case "error":
                // @ts-ignore
                color = props.invested ? props.theme.buttons.error.color : props.theme.buttons.error.text;
                break;
        }
    }
    return color;
};
var button = function (props) {
    // getComputedStyle(document.body).getPropertyValue('--default')
    var click = function (event) {
        if (props.onClick !== undefined) {
            props.onClick(event);
        }
    };
    return (react_1.default.createElement("button", { className: props.className, onClick: function (event) { return click(event); }, style: props.style }, props.text));
};
button = styled_components_1.default(button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 8px 16px;\n    border-radius: 6px;\n    font-family: \"productsans\";\n    font-weight: normal\n    text-align: center;\n    font-size: medium;\n    text-decoration: none;\n    border: none;\n    width: ", "\n    background-color: ", ";\n    color: ", ";\n    outline: none;\n    :hover {\n        box-shadow: -1px 1px 10px -3px ", ";\n    }\n    :active {\n        background-color: ", ";\n    }\n"], ["\n    padding: 8px 16px;\n    border-radius: 6px;\n    font-family: \"productsans\";\n    font-weight: normal\n    text-align: center;\n    font-size: medium;\n    text-decoration: none;\n    border: none;\n    width: ", "\n    background-color: ", ";\n    color: ", ";\n    outline: none;\n    :hover {\n        box-shadow: -1px 1px 10px -3px ", ";\n    }\n    :active {\n        background-color: ", ";\n    }\n"])), function (props) { return props.full ? '100%' : props.width; }, function (props) { return getColor(props); }, function (props) { return getTextColor(props); }, function (props) { return props.typeStyle === 'standar' || props.invested === true ? (props.color !== undefined ? (polished_1.opacify(0.7, "" + props.color)) : 'rgba(0,0,0,0.7)') : polished_1.opacify(0.7, getColor(props)); }, function (props) { return polished_1.darken(0.05, getColor(props)); });
button.defaultProps = {
    full: false,
    typeStyle: "default",
    theme: theme_1.DefaultTheme,
    invested: false,
    width: '120px'
};
exports.Button = styled_components_1.withTheme(button);
var templateObject_1;
//# sourceMappingURL=index.js.map