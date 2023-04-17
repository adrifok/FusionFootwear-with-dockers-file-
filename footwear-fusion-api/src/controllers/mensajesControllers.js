//importamos transporte para mandar los correos
const { transporter } = require("../config/nodeMailer");

// const mensajeBienvenida = async (email) => {
//     await transporter.sendMail({
//         from: '"FOOTWEAR FUSION" <pt10henry@gmail.com>',//quien envia el mensaje
//         to: email,//el email al que se va a mandar o varios email ej: to: ["bar@example.com, baz@example.com"].join(", ")
//         subject: "Hola",//el titulo del correo
//         //el cuerpo del correo, puede ser tipo TEXT o HTML
//         html: `<b>Hola ${email}<b/>,
//         <a target="_blank" href="http://localhost:3000" >Bienvenido</a>
//         `,
//     });
// }

const mensajeBienvenida = async (email, subject, html) => {
    if (!Array.isArray(email)) {
      email = [email]; // convertir el correo electrónico a un array si es un string
    }
  
    for (let i = 0; i < email.length; i++) {
      await transporter.sendMail({
        from: '"FOOTWEAR FUSION" <pt10henry@gmail.com>', //quien envia el mensaje
        to: email[i], //el email al que se va a mandar o varios email ej: to: ["bar@example.com, baz@example.com"]
        subject: subject, //el titulo del correo
        //el cuerpo del correo, puede ser tipo TEXT o HTML
        html: html,
      });
    }
  };

  const registroNewsletter = async (email, subject, html) => {
    if (!Array.isArray(email)) {
      email = [email]; // convertir el correo electrónico a un array si es un string
    }
  
    for (let i = 0; i < email.length; i++) {
      await transporter.sendMail({
        from: '"FOOTWEAR FUSION" <pt10henry@gmail.com>', //quien envia el mensaje
        to: email[i], //el email al que se va a mandar o varios email ej: to: ["bar@example.com, baz@example.com"]
        subject: subject, //el titulo del correo
        //el cuerpo del correo, puede ser tipo TEXT o HTML
        html: html,
      });
    }
  };

  const Newsletter = async (email, subject, html) => {
    if (!Array.isArray(email)) {
      email = [email]; // convertir el correo electrónico a un array si es un string
    }
  
    for (let i = 0; i < email.length; i++) {
      await transporter.sendMail({
        from: '"FOOTWEAR FUSION" <pt10henry@gmail.com>', //quien envia el mensaje
        to: email[i], //el email al que se va a mandar o varios email ej: to: ["bar@example.com, baz@example.com"]
        subject: subject, //el titulo del correo
        //el cuerpo del correo, puede ser tipo TEXT o HTML
        html: html,
      });
    }
  };

module.exports = {
  mensajeBienvenida,
  registroNewsletter,
  Newsletter
};
