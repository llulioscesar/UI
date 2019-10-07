"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var color_1 = require("../../const/color");
var styled_components_1 = __importDefault(require("styled-components"));
var polished_1 = require("polished");
function withDefault(o, defaultProps) {
    o.defaultProps = defaultProps;
    return o;
}
var button = function (props) {
    // getComputedStyle(document.body).getPropertyValue('--default')
    var click = function (event) {
        if (props.onClick !== undefined) {
            props.onClick(event);
        }
    };
    return (react_1.default.createElement("button", { className: props.className, onClick: function (event) { return click(event); }, style: props.style }, props.text));
};
button = styled_components_1.default(button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 8px 16px;\n    border-radius: 100px;\n    min-width: 100px;\n    border: none;\n    width: ", "\n    background-color: ", ";\n    color: ", ";\n    outline: none;\n    :hover {\n        box-shadow: -1px 1px 10px -3px ", ";\n    }\n    :active {\n        background-color: ", ";\n    }\n"], ["\n    padding: 8px 16px;\n    border-radius: 100px;\n    min-width: 100px;\n    border: none;\n    width: ", "\n    background-color: ", ";\n    color: ", ";\n    outline: none;\n    :hover {\n        box-shadow: -1px 1px 10px -3px ", ";\n    }\n    :active {\n        background-color: ", ";\n    }\n"])), function (props) { return props.width || (props.full ? '100%' : 'auto'); }, function (props) { return props.color; }, function (props) { return props.textColor; }, function (props) { return polished_1.opacify(0.7, "" + props.color); }, function (props) { return polished_1.darken(0.05, "" + props.color); });
button.defaultProps = {
    color: color_1.COLOR_DEFAULT,
    textColor: color_1.COLOR_DEFAULT_BUTTON_TEXT
};
exports.Button = button;
var templateObject_1;
//# sourceMappingURL=index.js.map