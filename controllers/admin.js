const User = require("../models/Admin");
const bcrypt = require("bcrypt");
const customError = require("../customError");
const createAdmin = async (req, res, next) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const admin = new User({ ...req.body, password: hash });

        const adminSaved = await admin.save();
        res.status(201).json({
            success: true,
            message: "created successfully",
            adminSaved,
        });
    } catch (error) {
        next(error);
    }
};
const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.body.name });

        if (!user) return next(customError(404, "user not found"));
        const isCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isCorrect) return next(customError(400, "wrong credentials"));

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = { createAdmin, login };
