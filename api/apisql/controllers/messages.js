const express = require("express");
//incluir a conexao com o BD
const db = require('../db/models')
const router = express.Router();

router.post("/", async (req, res) => {

  let data = req.body;

  //salvando no DB
  await db.Formulario.create(data).then((dataMessage) => {
    return res.json({
      error: false,
      message: "Chamado cadastrado com sucesso",
      data: dataMessage
    })
  }).catch(() => {
    return res.json({
      error: false,
      message: "Chamado não cadastrado",
      
    });
  });


});

module.exports = router;


