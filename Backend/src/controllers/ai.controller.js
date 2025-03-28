const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {  // Fixed parameter order
    try {
        const code = await req.body.code;
        if (!code) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const response = await aiService(code);
        res.send(response);
    } catch (error) {
        console.error("Error generating response:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
