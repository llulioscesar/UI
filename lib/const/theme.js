"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("./color");
exports.DefaultTheme = {
    color: color_1.COLOR_DEFAULT,
    colorBase: color_1.COLOR_BASE,
    colorDanger: color_1.COLOR_DANGER,
    colorError: color_1.COLOR_ERROR,
    colorSuccess: color_1.COLOR_SUCCESS,
    colorWhite: color_1.COLOR_WHITE,
    colorBlack: color_1.COLOR_BLACK,
    buttons: {
        default: {
            text: color_1.COLOR_WHITE,
            color: color_1.COLOR_DEFAULT
        },
        standar: {
            text: color_1.COLOR_DEFAULT,
            color: color_1.COLOR_WHITE
        },
        success: {
            text: color_1.COLOR_WHITE,
            color: color_1.COLOR_SUCCESS
        },
        danger: {
            text: color_1.COLOR_WHITE,
            color: color_1.COLOR_DANGER
        },
        error: {
            text: color_1.COLOR_WHITE,
            color: color_1.COLOR_ERROR
        }
    }
};
//# sourceMappingURL=theme.js.map