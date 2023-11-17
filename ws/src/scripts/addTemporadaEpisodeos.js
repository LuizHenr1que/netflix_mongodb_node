const database = require('../services/database');
const Filme = require('../models/filme');
const Temporada = require('../models/temporada');
const Epsodeo = require('../models/episodeo');
const Episodeo = require('../models/episodeo');

const addTemporadasEpisodeos = async () => {
    try {
        const series = await Filme.find({tipo: 'serie'}).select('_id');
        for (let serie of series) {
            console.log(`FILME ${serie}--------`)
            const numTemporada = Math.floor(Math.random() * 5) + 1;
            for (let i = 1; i <= numTemporada; i++) {
                console.log(`Inserindo temporada ${i} de ${numTemporada}`)
                const temporada = await new Temporada({
                    filme_id: serie,
                    titulo: `Temporada ${i}`
                }).save();

                const numEpisodeos = Math.floor(Math.random() * 5) + 1;
                for (let x = 1; x <= numEpisodeos; x++){
                    console.log(`Inserindo episodeos ${x} de ${numEpisodeos}`);
                    await new Episodeo({
                        temporada_id: temporada._id,
                        titulo: `Episodeo ${x}`,
                        numerro: x,
                        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                        capa: 'https://picsum.photos/300/200'
                    }).save()
                } 
            }
        }

        console.log('final do script')
    } catch(err) {
        console.log(err.message);
    }
}

addTemporadasEpisodeos();