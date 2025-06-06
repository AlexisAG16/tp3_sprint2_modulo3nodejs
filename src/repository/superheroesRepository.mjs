import SuperHero from '../models/superheroe.mjs'
import IRepository from './iRepository.mjs';

class SuperHeroRepository extends IRepository
{
    async obtenerPorId(id)
    {
        return await SuperHero.findById(id);
    }
    async obtenerTodos()
    {
        console.log('Estoy en repositorio para traer todos los superheroes');
        const superheroeEncontrado = await SuperHero.find({});
        console.log(superheroeEncontrado);

        return superheroeEncontrado;
    }
    async buscarPorAtributo(atributo,valor)
    {
        return await SuperHero.filter(hero =>
        String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()))
    }
    async obtenerMayoresDe30()
    {
        return await SuperHero.filter(hero => hero.edad > 30 );
    }
}

export default new SuperHeroRepository();