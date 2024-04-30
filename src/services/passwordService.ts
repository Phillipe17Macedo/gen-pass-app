export default function generatePass(){
    let senha: string = ''
    let caracteres: string = '@$#*!@$!1234567890abcdfghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let tamanhoSenha = 17

    for(let index = 0; index < tamanhoSenha; index++){
        senha += caracteres.charAt(
            Math.floor(Math.random() * caracteres.length)
        )
    }   
    return senha
}