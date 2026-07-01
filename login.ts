interface Usuario {
    usuario: string;
    senha: string;
}

class SistemaLogin {
    private usuarios: Usuario[] = [
        {
            usuario: "admin",
            senha: "123456"
        },
        {
            usuario: "recepcionista",
            senha: "recep2026"
        }
    ];

    public login(usuario: string, senha: string): boolean {

        if (!usuario || !senha) {
            console.log("Usuário e senha são obrigatórios.");
            return false;
        }

        const usuarioEncontrado = this.usuarios.find(
            u => u.usuario === usuario && u.senha === senha
        );

        if (usuarioEncontrado) {
            console.log("Login realizado com sucesso!");
            console.log(`Bem-vindo, ${usuarioEncontrado.usuario}!`);
            return true;
        }

        console.log("Usuário ou senha inválidos.");
        return false;
    }
}


const sistema = new SistemaLogin();

sistema.login("admin", "123456"); 

sistema.login("admin", "111111"); 

sistema.login("recepcionista", "recep2026"); 