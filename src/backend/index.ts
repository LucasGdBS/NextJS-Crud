import obterTodos from "./usuario/obterTodos";
import salvarUsuario from "./usuario/salvarUsuario";
import excluir from "./usuario/excluirUsuario";


// Padrão Facade
export default class Backend {
  static readonly usuarios = {
    salvarUsuario,
    obterTodos,
    excluir,
    
  };
}
