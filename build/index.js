"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const merge_1 = require("@graphql-tools/merge");
const load_files_1 = require("@graphql-tools/load-files");
const path_1 = __importDefault(require("path"));
const mongoose_1 = require("mongoose");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const resolversFiles = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, './schema/resolvers'));
const typeDefsFiles = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, './schema/typeDefs'));
const resolvers = (0, merge_1.mergeResolvers)(resolversFiles);
const typeDefs = (0, merge_1.mergeTypeDefs)(typeDefsFiles);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    // await connect(`${process.env.DB_PRODUCTION_PORT}`)
    yield (0, mongoose_1.connect)(`${process.env.DB_DEV_PORT}`)
        .then(e => console.log('DB Connected'))
        .catch(er => console.log('DB Connection Error', er));
    const app = (0, express_1.default)();
    const httpServer = (0, http_1.createServer)(app);
    const apolloServer = new apollo_server_express_1.ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => ({ req })
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: '/api'
    });
    httpServer.listen({ port: process.env.PORT || 2700 }, () => console.log(`Server listening on http://localhost:${process.env.PORT + apolloServer.graphqlPath}`));
});
startServer();
