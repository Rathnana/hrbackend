"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const generalTypeDeft = (0, apollo_server_express_1.gql) `
    scalar Date
`;
exports.default = generalTypeDeft;
