"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const departmetntSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    profile_image: String,
    head: { type: mongoose_1.Schema.Types.ObjectId, ref: 'employees' },
    created_at: { type: Date, default: Date.now }
});
departmetntSchema.plugin(mongoose_paginate_v2_1.default);
const departments = (0, mongoose_1.model)('departments', departmetntSchema);
exports.default = departments;
