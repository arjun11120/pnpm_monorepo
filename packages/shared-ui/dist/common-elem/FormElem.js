"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var FormElem = function () {
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "container" }, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "input", placeholder: "Type something..." }) })));
};
exports.default = FormElem;
