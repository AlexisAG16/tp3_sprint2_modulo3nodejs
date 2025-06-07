import superheroesRepository from '../repository/superheroesRepository.mjs';

export async function obtenerSuperheroePorId(id)
{
    //console.log(id);

    const obtenerId = await superheroesRepository.obtenerPorId(id);
    console.log(obtenerId);

    return obtenerId;
}

export async function obtenerTodosLosSuperheroes()
{
    console.log('Estoy en la capa de servicios en la funcion obtener todos los superheroes');
    const RepoObtenerTodos = await superheroesRepository.obtenerTodos();

    console.log('Estoy en la capa de servicios en la funcion de obtener todos devolviendo a todos los superheroes',RepoObtenerTodos);
    
    return RepoObtenerTodos;
}

export async function buscarSuperheroesPorAtributo(atributo,valor)
{
    const atributoVal = await superheroesRepository.buscarPorAtributo(atributo,valor);
    console.log(atributoVal);
    return atributoVal;
}

export async function obtenerSuperheroesMayoresDe30()
{
    return await superheroesRepository.obtenerMayoresDe30();
}