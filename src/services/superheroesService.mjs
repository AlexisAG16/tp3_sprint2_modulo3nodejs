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
    const RepoObtenerTodos = await superheroesRepository.obtenerTodos();

    return RepoObtenerTodos;
}

export async function buscarSuperheroesPorAtributo(atributo,valor)
{
    const atributoVal = await superheroesRepository.buscarPorAtributo(atributo,valor);
    //console.log(atributoVal);
    return atributoVal;
}

export async function obtenerSuperheroesMayoresDe30()
{
    return await superheroesRepository.obtenerMayoresDe30();
}