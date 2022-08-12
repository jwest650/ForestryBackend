const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
const formRoute = require("./routes/formRoute");
const adminRoute = require("./routes/adminRoute");
const app = express();
var cors = require("cors");
dotenv.config();

const port = process.env.PORT;
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log(`connected`);
    } catch (error) {
        console.log(`${error}`);
    }
};

app.use(express.json());
app.use(cors());
app.use("/api", formRoute);
app.use("/api", adminRoute);
app.use("/", (req, res) => {
    res.status(200).json({ message: "forestry server", success: true });
});
app.use(errorHandler);
app.listen(port, async () => {
    await connect();
    console.log(`app is listening on ${port}`);
});
