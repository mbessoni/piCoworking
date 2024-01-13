"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialect = exports.config = void 0;
exports.config = {
    HOST: "localhost",
    PORT: 3306,
    USER: "root",
    PASSWORD: "@Amoragape",
    DB: "picoworking",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
exports.dialect = "mysql";
//# sourceMappingURL=db.config.js.map