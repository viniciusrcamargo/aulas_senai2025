import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const [herois, setHerois] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    const fetchHerois = async () => {
        try {
            setCarregando(true);
            setErro(null);
            const resposta = await fetch('https://superheroes-api-one.vercel.app/api/herois')
            console.log(resposta)
            if (!resposta.ok) {
                setErro('Erro ao buscar os Heróis');
                throw new Error('Erro ao buscar os Heróis')
            }
            const dados = await resposta.json();
            const lista = Array.isArray(dados) ? dados : dados?.herois || [];
            setHerois(lista);
        } catch (erro) {
            setErro(erro.message || 'Erro inesperado')
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        fetchHerois();
    }, [])

    return (
        <>
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container'>
                    <span className='navbar-brand mb-0 h1'>Super Heróis</span>
                    <button className='btn btn-outline-light btn-sm' onClick={fetchHerois}>Recarregar</button>
                </div>
            </nav>

            <main className='py-4' style={{ background: '#f7f8fa', minHeight: '100vh' }}>
                <div className='container'>
                    {carregando && (
                        <div className='d-flex justify-content-center my-5'>
                            <div className="spinner-border text-primary" role='status' aria-label='Carregando'>

                            </div>
                        </div>
                    )}

                    {erro && !carregando  && (
                        <div className='alert alert-danger d-flex justify-content-between align-items-center' role='alert'>
                            <span>{erro}</span>
                            <button className='btn btn-sm btn-danger' onClick={fetchHerois}>Tente novamente</button>
                        </div>
                    )}

                    {!carregando && !erro && (
                        <>
                        <div>
                            <h3>Catálogo</h3>
                            <small>Total: {herois.length} de heróis</small>
                        </div>

                        <div>
                            {herois.map((hero, idx) =>{
                                const id = hero.id || idx;
                                const nome = hero.nome || 'Herói';
                                const foto = hero.foto || 'https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg'
                                const habilidade = hero.habilidade || 'Sem habilidade';
                                const forca = hero.forca || 'Sem força';
                                return(
                                    <div key={id}>
                                        <div>
                                            <img src={foto}/>
                                            <h5>{nome}</h5>
                                            <span>{forca}</span>
                                            <span>{habilidade}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {herois.length === 0 && (
                            <div>
                                <span>Nenhum herói disponível</span>
                            </div>
                        )}
                        </>
                    )}

                </div>
            </main>
        </>
    )

}