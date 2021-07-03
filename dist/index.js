"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const crmRoutes_1 = __importDefault(require("./src/routes/crmRoutes"));
const app = express_1.default();
// annotate the PORT var (ie adding a type)
const PORT = 3000;
// mongoose connection
mongoose_1.default
    .connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to Mongo client'));
// bodyparser setup
app.use(express_1.default.json());
crmRoutes_1.default(app);
// serving static files
app.use(express_1.default.static('public'));
app.get('/', (req, res) => res.send(`Node and express server is running on port ${PORT}`));
app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
