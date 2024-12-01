const Recipe = require('../models/Recipe');
const Follow = require('../models/Follow');

exports.getFeed = async (req, res) => {
    try {
        const follows = await Follow.find({ followerId: req.user.id }).select('followedId');
        const followedIds = follows.map(f => f.followedId);

        const recipes = await Recipe.find({ ownerId: { $in: followedIds }, isPublic: true })
            .sort({ createdAt: -1 })
            .populate('ownerId', 'name');
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPopularRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({ isPublic: true })
            .sort({ likesCount: -1 })  // Suponiendo un campo likesCount en Recipe
            .limit(10)
            .populate('ownerId', 'name');

        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
