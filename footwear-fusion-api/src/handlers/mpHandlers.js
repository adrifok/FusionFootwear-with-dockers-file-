// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
require("dotenv").config();
const { PROD_ACCESS_TOKEN } = process.env;

mercadopago.configure({
    access_token: PROD_ACCESS_TOKEN,
});

const createPreferenceHandlers = async (req, res) => {
    const datos = req.body
  
    const items = datos.map(elem => {
        return {
                id: elem.id,
                code: elem.code,
                title: elem.title,
                image: elem.image,
                unit_price: parseInt(elem.price),
                marca: elem.marca,
                size: elem.size,
                quantity: parseInt(elem.qty),
                description: elem.description
            }
       
    })
   
    let preference = {
        items: items,
        back_urls: {
            "success": "http://localhost:3000",
            "failure": "http://localhost:3000",
            "pending": ""
        },
        auto_return: "approved",
        binary_mode: true,
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.json({
                global: response.body
            });
        }).catch(function (error) {
            console.log(error);
        });
};

const feedbackHandlers = async (req, res) => {
    res.json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    });
};

module.exports = {
    createPreferenceHandlers,
    feedbackHandlers
}