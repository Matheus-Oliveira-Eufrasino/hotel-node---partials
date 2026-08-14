const test = require('node:test');
const assert = require('node:assert/strict');
const { validationResult } = require('express-validator');
const { validacaoCadCliente } = require('../app/helpers/validacoes');

async function validar(body) {
    const req = { body };
    for (const middleware of validacaoCadCliente) {
        await middleware(req, {}, () => {});
    }
    return validationResult(req);
}

test('cadastro válido não deve gerar erros', async () => {
    const result = await validar({
        nome: 'João da Silva',
        cep: '06400-000',
        nomeUsuario: 'joao.silva',
        email: 'joao@example.com',
        senha: '123456',
        tipo: '1',
        status: '1'
    });
    assert.equal(result.isEmpty(), true);
});

test('cadastro inválido deve apontar os campos obrigatórios', async () => {
    const result = await validar({
        nome: '',
        cep: '123',
        nomeUsuario: '',
        email: 'email-invalido',
        senha: '123',
        tipo: '9',
        status: '9'
    });
    assert.equal(result.isEmpty(), false);
    const fields = result.array().map(error => error.path);
    assert.ok(fields.includes('nome'));
    assert.ok(fields.includes('cep'));
    assert.ok(fields.includes('nomeUsuario'));
    assert.ok(fields.includes('email'));
    assert.ok(fields.includes('senha'));
    assert.ok(fields.includes('tipo'));
    assert.ok(fields.includes('status'));
});
