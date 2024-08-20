import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    teamName: String,
    skills: String,
    experience: String,
    dietaryRestrictions: String,
    tshirtSize: String,
    githubProfile: String,
    linkedinProfile: String,
    motivation: { type: String, required: true },
    codeOfConductAgreed: { type: Boolean, required: true },
    registrationDate: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
