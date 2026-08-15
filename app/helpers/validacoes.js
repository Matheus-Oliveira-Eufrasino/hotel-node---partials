const { body } = require('express-validator');

const validacaoCadCliente = [
    body('nome').trim().notEmpty().withMessage('O nome é obrigatório.').isLength({ min: 3, max: 100 }).withMessage('O nome deve ter entre 3 e 100 caracteres.'),
    body('cep').trim().notEmpty().withMessage('O CEP é obrigatório.').matches(/^\d{5}-?\d{3}$/).withMessage('Informe um CEP válido (ex.: 06400-000).'),
    body('nomeUsuario').trim().notEmpty().withMessage('O nome de usuário é obrigatório.').isLength({ min: 3, max: 30 }).withMessage('O nome de usuário deve ter entre 3 e 30 caracteres.').matches(/^[a-zA-Z0-9._-]+$/).withMessage('O nome de usuário contém caracteres inválidos.'),
    body('email').trim().notEmpty().withMessage('O e-mail é obrigatório.').isEmail().withMessage('Informe um e-mail válido.'),
    body('senha').notEmpty().withMessage('A senha é obrigatória.').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres.'),
    body('tipo').isIn(['1', '2']).withMessage('Selecione um tipo de usuário válido.'),
    body('status').isIn(['0', '1']).withMessage('Selecione um status válido.')
];

module.exports = { validacaoCadCliente };
