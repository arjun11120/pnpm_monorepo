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
var Button_1 = __importDefault(require("react-bootstrap/Button"));
var Form_1 = __importDefault(require("react-bootstrap/Form"));
function Form1() {
    return ((0, jsx_runtime_1.jsxs)(Form_1.default, __assign({ method: 'post' }, { children: [(0, jsx_runtime_1.jsxs)(Form_1.default.Group, __assign({ className: "mb-3", controlId: "formBasicEmail" }, { children: [(0, jsx_runtime_1.jsx)(Form_1.default.Label, { children: "Email address" }), (0, jsx_runtime_1.jsx)(Form_1.default.Control, { type: "email", placeholder: "Enter email" }), (0, jsx_runtime_1.jsx)(Form_1.default.Text, __assign({ className: "text-muted" }, { children: "We'll never share your email with anyone else." }))] })), (0, jsx_runtime_1.jsxs)(Form_1.default.Group, __assign({ className: "mb-3", controlId: "formBasicPassword" }, { children: [(0, jsx_runtime_1.jsx)(Form_1.default.Label, { children: "Password" }), (0, jsx_runtime_1.jsx)(Form_1.default.Control, { type: "password", placeholder: "Password" })] })), (0, jsx_runtime_1.jsx)(Form_1.default.Group, __assign({ className: "mb-3", controlId: "formBasicCheckbox" }, { children: (0, jsx_runtime_1.jsx)(Form_1.default.Check, { type: "checkbox", label: "Check me out" }) })), (0, jsx_runtime_1.jsx)(Button_1.default, __assign({ variant: "primary", type: "submit" }, { children: "Submit" }))] })));
}
exports.default = Form1;
