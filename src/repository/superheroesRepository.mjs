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
    async buscarPorAtributo(atributo, valor) 
    {
        const atributoValor = await SuperHero.find(
        {
        [atributo]: { $regex: valor, $options: 'i' }
        });
        console.log(atributoValor);
        return atributoValor;
    }

    async obtenerMayoresDe30() 
    {
        return await SuperHero.find({ edad: { $gt: 30 } });
    }
    /*
    async buscarPorAtributo(atributo,valor)
    {
        const atributoValor = await SuperHero.find(hero =>
        String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()));

        console.log(atributoValor);
        
        return atributoValor;
    }
    async obtenerMayoresDe30()
    {
        return await SuperHero.find(hero => hero.edad > 30 );
    }*/
}

export default new SuperHeroRepository();