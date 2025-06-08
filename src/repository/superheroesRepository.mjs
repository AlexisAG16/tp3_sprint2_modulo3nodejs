import SuperHero from '../models/superheroe.mjs'
import IRepository from './iRepository.mjs';

class SuperHeroRepository extends IRepository
{
    async obtenerPorId(id)
    {
        const encontrarPorId = await SuperHero.findById(id);
        console.log(encontrarPorId);

        return encontrarPorId;
    }
    async obtenerTodos()
    {
        const superheroeEncontrado = await SuperHero.find({});

        return superheroeEncontrado;
    }

     //NO FUNCIONA DE ESTA FORMA => ERROR FILTER NO ES UNA FUNCION

    /*async buscarPorAtributo(atributo,valor)
    {
        const atributoValor = await SuperHero.filter(hero =>
        String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()));

        console.log(atributoValor);
        
        return atributoValor;
    }
    async obtenerMayoresDe30()
    {
        return await SuperHero.filter(hero =>
        hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poder.length >= 2);
    }*/


    /* VALE SOLO PARA STRING
    async buscarPorAtributo(atributo, valor) 
    {
        const atributoValor = await SuperHero.find({
        [atributo]: { $regex: valor, $options: 'i' }
        });

        return atributoValor;
    }*/

    async buscarPorAtributo(atributo, valor) 
    {
    const schemaType = SuperHero.schema.paths[atributo].instance;
    let query;

    if (schemaType === 'Number') {
    query = { [atributo]: parseInt(valor) };
    if (isNaN(query[atributo])) {
      return [];
    }
    } else {
    query = { [atributo]: { $regex: valor, $options: 'i' } };
    }

    const atributoValor = await SuperHero.find(query);
    return atributoValor;
}

    async obtenerMayoresDe30() 
    {
        return await SuperHero.find({
        edad: { $gt: 30 },
        planetaOrigen: 'Tierra',
        poderes: { $exists: true, $not: { $size: 0 } }
        });
    }
}

export default new SuperHeroRepository();