"use strict";
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
const api_1 = __importDefault(require("./api"));
const generate = (queryDescription) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api_1.default.createCompletion({
        model: "text-davinci-003",
        prompt: `Convert the following natural language description into a SQL query:\n\n${queryDescription}`,
        max_tokens: 1,
        temperature: 0,
    });
    return response.data.choices[0].text;
});
exports.default = generate;
//# sourceMappingURL=generate.js.map