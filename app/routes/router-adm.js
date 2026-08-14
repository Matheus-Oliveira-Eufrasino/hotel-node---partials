const express = require("express");
const router = express.Router();
const { validationResult } = require('express-validator');
const { validacaoCadCliente } = require('../helpers/validacoes');


router.get("/", (req, res)=>{
    res.render("pages/index-adm");
})

router.get("/adm-cliente", (req, res)=>{
    res.render("pages/adm-cliente");
})

router.get("/adm-cliente-novo", (req, res)=>{
    res.render("pages/adm-cliente-novo", { errors: [], formData: {} });
})

router.post("/adm-cliente-novo", validacaoCadCliente, (req, res)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).render("pages/adm-cliente-novo", {
            errors: errors.array(),
            formData: req.body
        });
    }

    res.render("pages/adm-cliente-novo", {
        errors: [],
        formData: req.body,
        sucesso: "Cliente validado com sucesso!"
    });
})

router.get("/adm-cliente-edit", (req, res)=>{
    res.render("pages/adm-cliente-edit");
})

router.get("/adm-cliente-list", (req, res)=>{
    res.render("pages/adm-cliente-list");
})

router.get("/adm-cliente-del", (req, res)=>{
    res.render("pages/adm-cliente-del");
})







module.exports = router;