import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
    {
        nom: {
            type: String,
            required: [true, "Please enter product name"]
        },

        email: {
            type: String,
            required: [true, "Entrer votre email"]
        },

        telephone: {
            type: String,
            required: [true, "entrer votre numero de telephone"]
        },
    },
    {
        timestamps: true
    }
);

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
