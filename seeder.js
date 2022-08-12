const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Form = require("./models/formSchema");

mongoose
    .connect(process.env.MONGOOSE_URL, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("connection open");
    })
    .catch((err) => {
        console.log(err);
    });

n;

const forms = JSON.parse(
    fs.readFileSync(`${__dirname}/data/form_data.json`, "utf-8")
);
const importData = async () => {
    await Form.deleteMany({});
    await Form.insertMany(forms);
};

importData().then(() => {
    mongoose.connection.close();
});
