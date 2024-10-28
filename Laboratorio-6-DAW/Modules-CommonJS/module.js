// Módulos COMMON.JS

module.exports.login = (username, password) => {
    if(!username && !password) return console.log("Usuario no Autorizado")
        console.log(`Bienvenido ${username}`)
}

module.exports.LIKES = 150

