import express from 'express';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const response = await fetch(process.env.QWEN_DEEPBLUE_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.QWEN_DEEPBLUE_API_KEY}`,
                //"X-DashScope-SSE": "enable"
            },
            body: JSON.stringify({
                input: {
                    prompt: req.body.prompt || "Who are you?"
                },
                parameters: {},
                debug: {}
            })
        });

        const data = await response.json();
        res.json(data);

    } catch (err) {
        console.error("Error calling QWEN API:", err);
        res.status(500).json({ error: "Failed to call QWEN API" });
    }
});

export default router;
