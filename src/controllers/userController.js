const User = require('../models/User');

exports.testUser = (req, res) => {
    res.status(200).json({ message: 'test user controller' });
}

exports.createUser = async (req, res) => {
    try {
        const { auth0Id, name, email, userType, picture } = req.body;
        const user = new User({ auth0Id, name, email, userType, picture });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { auth0Id, name, email, userType, picture } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { auth0Id, name, email, userType, picture }, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
