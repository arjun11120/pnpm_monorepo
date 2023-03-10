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
var Container_1 = __importDefault(require("react-bootstrap/Container"));
var Nav_1 = __importDefault(require("react-bootstrap/Nav"));
var Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
var NavDropdown_1 = __importDefault(require("react-bootstrap/NavDropdown"));
function BasicExample() {
    return ((0, jsx_runtime_1.jsx)(Navbar_1.default, __assign({ bg: "primary", variant: "dark", expand: "lg" }, { children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default.Brand, __assign({ href: "#home" }, { children: "React-Bootstrap" })), (0, jsx_runtime_1.jsx)(Navbar_1.default.Toggle, { "aria-controls": "basic-navbar-nav" }), (0, jsx_runtime_1.jsx)(Navbar_1.default.Collapse, __assign({ id: "basic-navbar-nav" }, { children: (0, jsx_runtime_1.jsxs)(Nav_1.default, __assign({ className: "me-auto" }, { children: [(0, jsx_runtime_1.jsx)(Nav_1.default.Link, __assign({ href: "#home" }, { children: "Home" })), (0, jsx_runtime_1.jsx)(Nav_1.default.Link, __assign({ href: "#link" }, { children: "Link" })), (0, jsx_runtime_1.jsxs)(NavDropdown_1.default, __assign({ title: "Dropdown", id: "basic-nav-dropdown" }, { children: [(0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, __assign({ href: "#action/3.1" }, { children: "Action" })), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, __assign({ href: "#action/3.2" }, { children: "Another action" })), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, __assign({ href: "#action/3.3" }, { children: "Something" })), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Divider, {}), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, __assign({ href: "#action/3.4" }, { children: "Separated link" }))] }))] })) }))] }) })));
}
exports.default = BasicExample;
