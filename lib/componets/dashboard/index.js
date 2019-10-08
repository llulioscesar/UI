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
var dashboard = function (props) {
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.DefaultTheme },
        react_1.default.createElement("div", { className: props.className, style: props.style },
            props.renderNavigationBar,
            react_1.default.createElement("div", { className: 'ui-dashboard-content' }, props.children))));
};
dashboard = styled_components_1.default(dashboard)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    .ui-dashboard-content {\n        padding: 0 15px;\n    }\n    \n    @media(max-width:767px){\n        .ui-dashboard-content {\n            padding: 0 8px\n        }\n    }\n"], ["\n    .ui-dashboard-content {\n        padding: 0 15px;\n    }\n    \n    @media(max-width:767px){\n        .ui-dashboard-content {\n            padding: 0 8px\n        }\n    }\n"])));
dashboard.defaultProps = {
    theme: theme_1.DefaultTheme
};
exports.Dashboard = styled_components_1.withTheme(dashboard);
var templateObject_1;
//# sourceMappingURL=index.js.map