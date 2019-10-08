"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var theme_1 = require("../../const/theme");
var toolbar_1 = require("../toolbar");
exports.app = function (props) {
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.DefaultTheme },
        react_1.default.createElement("div", { id: 'ui-app' },
            props.toolbar !== undefined && (react_1.default.createElement(toolbar_1.Toolbar, null, props.toolbar)),
            react_1.default.createElement("div", { id: 'ui-contenido' }, props.children))));
};
exports.Dashboard = exports.app;
//# sourceMappingURL=index.js.map