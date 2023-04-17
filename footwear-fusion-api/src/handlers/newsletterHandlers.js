const { createNewsletter, getNewsletter } = require("../controllers/newsletterControllers")

const registroNewsletter = async (req, res) => {
    try {
        const {email} = req.body;
        const registro = await createNewsletter(email);
        res.status(201).json(registro);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const getNewsletterHandlers = async (req, res) => {
    try {
        const newsletter = await getNewsletter();
        res.status(201).json(newsletter);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    registroNewsletter,
    getNewsletterHandlers
}