import { Usuario } from "@/core/model/Usuario";
import { PrismaClient } from "@prisma/client";

export default class RepostiórioUsuario {
    private static db: PrismaClient = new PrismaClient();

    
    static async salvar(usuario: Usuario): Promise<Usuario> {
        return this.db.usuario.upsert({
            where: { id: usuario.id },
            update: usuario,
            create: usuario
        });
    }
    
    static async obterTodos(): Promise<Usuario[]> {
        return this.db.usuario.findMany();
    }

    static async obterPorId(id: string): Promise<Usuario> {
        const usuario = await this.db.usuario.findUnique({
            where: { id }
        })
        return usuario as Usuario;
    }

    static async excluir(id: string): Promise<Usuario> {
        return this.db.usuario.delete({
            where: { id }
        });
    }
}