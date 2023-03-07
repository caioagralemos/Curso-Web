const bcrypt = require('bcrypt')

const hashPassword = async(senha) => {
    // criando o salt (pre ou post password que faz com que duas senhas iguais nao tenham o mesmo hash)
    const hash = await bcrypt.hash(senha, 12) // 12 é o nivel do salt
    console.log(hash)
}

const login = async(senha, hashedPassword) => {
    const result = await bcrypt.compare(senha, hashedPassword)
    console.log("LOG IN FEITO COM SUCESSO!")
}

// hashPassword('123456') // '$2b$10$v45B7DX3x0HR8mh4pVY0oeFiLwoZ.lx/jSjEpr8.sPgC/8IhB96kq'
login('123456', '$2b$10$v45B7DX3x0HR8mh4pVY0oeFiLwoZ.lx/jSjEpr8.sPgC/8IhB96kq') // true