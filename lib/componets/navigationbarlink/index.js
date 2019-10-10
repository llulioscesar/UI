"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var navigationBarLink = function (props) {
    var click = function (e) {
        if (props.onClick !== undefined) {
            props.onClick(e);
        }
    };
    return (react_1.default.createElement("div", { className: 'ui-navigation-bar-link', onClick: function (e) { return click(e); } },
        props.icon !== undefined && props.icon,
        props.text !== undefined && props.text,
        props.text === undefined && props.icon === undefined && props.children));
};
navigationBarLink.displayName = 'NavigationBarLink';
exports.NavigationBarLink = navigationBarLink;
//# sourceMappingURL=index.js.map