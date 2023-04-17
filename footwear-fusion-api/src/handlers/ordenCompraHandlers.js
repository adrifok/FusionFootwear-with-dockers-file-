const {createOrdenCompra, updateOrdenCompra, getOrdenCompra, deleteOrdenCompra} = require('../controllers/ordenCompraControllers')

const createOrdenCompraHandler = async (req, res) => {
    try {
        const loginUserId = req.params.loginUserId;
        const cart = await createOrdenCompra(loginUserId);
        res.status(201).json(cart)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateOrdenCompraHandler = async (req, res) => {
    try {
        const loginUserId = req.params.loginUserId;
        const cart = await updateOrdenCompra(loginUserId);
        res.status(201).json(cart)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getOrdenCompraHandler = async (req, res) => {
    try {
        const loginUserId = req.params.loginUserId;
        const cart = await getOrdenCompra(loginUserId);
        res.status(201).json(cart)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const deleteOrdenCompraHandler = async (req, res) => {
    try {
        const loginUserId = req.params.loginUserId;
        const cart = await deleteOrdenCompra(loginUserId);
        res.status(201).json(cart)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createOrdenCompraHandler, 
    updateOrdenCompraHandler, 
    getOrdenCompraHandler, 
    deleteOrdenCompraHandler
}