const Form = require("../models/formSchema");

const getform = async (req, res, next) => {
    try {
        const Formdata = await Form.find();
        res.status(200).json(Formdata);
    } catch (error) {
        next(error);
    }
};
const postform = async (req, res, next) => {
    try {
        const Formdata = new Form(req.body);
        const newForm = await Formdata.save();
        res.status(200).json({
            success: true,
            newForm,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { postform, getform };
