const { Newsletter } = require("../db");

const createNewsletter = async (email) => {
    const newEmail = await Newsletter.findOrCreate({
        where: {email},
    })
    return newEmail
}

const getNewsletter = async () => {
    const newsletter = await Newsletter.findAll({
        attributes: ['email']
    });
    const arrNewsletter = newsletter.map((dato) => {
        return dato.email
      });
    return arrNewsletter
}


module.exports = {
    createNewsletter,
    getNewsletter
}