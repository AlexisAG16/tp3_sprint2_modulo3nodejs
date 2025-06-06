import superheroesRepository from '../repository/superheroesRepository.mjs';

export async function obtenerSuperheroePorId(id)
{
    return await superheroesRepository.obtenerPorId(id);
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
    return superheroesRepository.buscarPorAtributo(atributo,valor);
}

export function obtenerSuperheroesMayoresDe30()
{
    return superheroesRepository.obtenerMayoresDe30();
}