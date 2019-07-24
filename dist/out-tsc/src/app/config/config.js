import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let config = class config {
    constructor() {
        this.APIresult = "https://localhost:44344/";
    }
    getAPIresult() {
        return this.APIresult;
    }
};
config = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], config);
export { config };
//# sourceMappingURL=config.js.map