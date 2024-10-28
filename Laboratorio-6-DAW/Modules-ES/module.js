// Módulos ES

export const login = (username,password) => {
    if(!username && !password) return console.log("Usuario no Autorizado")
    console.log(`Bienvenido ${username}`)
}

