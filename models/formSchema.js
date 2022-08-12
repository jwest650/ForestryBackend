const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
    {
        type_of_id: {
            type: String,
        },
        id_number: {
            type: String,
            unique: true,
        },
        first_name: {
            type: String,
        },
        surname: {
            type: String,
        },
        other_name: {
            type: String,
        },
        gender: {
            type: String,
        },
        date_of_birth: {
            type: String,
        },
        age: {
            type: String,
        },
        address: {
            type: String,
        },
        phone_number: {
            type: String,
        },
        postal_address: {
            type: String,
        },
        profile_picture: {
            type: String,
        },
        id_picture: {
            type: String,
        },
        company_name: {
            type: String,
        },
        reg_number: {
            type: String,
        },
        president_secetary: {
            type: String,
        },
        director: {
            type: String,
        },
        postal: {
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
        region: {
            type: String,
        },
        forest_distric: {
            type: String,
        },
        district_assembly: {
            type: String,
        },
        community: {
            type: String,
        },
        family: {
            type: String,
        },
        type_of_establishment: {
            type: String,
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("Form", formSchema);
