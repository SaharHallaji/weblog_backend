"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process = require("process");
exports.default = () => ({
    PORT: parseInt(process.env.PORT) || 8080,
});
//# sourceMappingURL=env.js.map