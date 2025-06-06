export function renderizarSuperheroe(superheroe)
{
    console.log('Trayendo superheroes y renderizando',superheroe);

    console.log('el nombre',superheroe.nombreReal);

    return {
        nombreSuperHeroe: superheroe.nombreSuperHeroe,
        nombreReal: superheroe.nombreReal,
        edad: superheroe.edad,
        planetaOrigen: superheroe.planetaOrigen,
        debilidad: superheroe.debilidad,
        poderes: superheroe.poderes,
        aliados: superheroe.aliados,
        enemigos: superheroe.enemigos
    };
}

export function renderizarListaSuperheroes(superHeroes)
{
    return superHeroes.map(superheroe => renderizarSuperheroe(superheroe));
}