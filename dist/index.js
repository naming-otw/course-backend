"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const home_1 = __importDefault(require("./routes/home"));
const endpoints_1 = __importDefault(require("./routes/endpoints"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use('/', home_1.default);
app.use('/api', endpoints_1.default);
app.listen(PORT, () => {
    console.log('Server running on port 3000');
});
//# sourceMappingURL=index.js.map