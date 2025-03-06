const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { signupSchema, loginSchema } = require('../middlewares/AuthValidation');

// 🔹 User Signup
exports.signup = async (req, res) => {
    console.log("Received signup data:", req.body);

    const { error } = signupSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({ ...req.body, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "Signup successful!" });
    } catch (err) {
        console.error("❌ Signup Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// 🔹 User Login
exports.login = async (req, res) => {
    console.log("Received login data:", req.body);

    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json({ message: "Invalid email or password" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ success: true, jwtToken: token, name: user.name, message: "Login successful!" });
    } catch (err) {
        console.error("❌ Login Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
