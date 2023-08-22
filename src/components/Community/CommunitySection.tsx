import classes from './CommunitySection.module.css'

import bart from '../../assets/community/bart.png'
import cafe from '../../assets/community/cafe.png'
import carro from '../../assets/community/carro.png'
import livro from '../../assets/community/livro.png'
import naruto from '../../assets/community/naruto.png'
import ovo from '../../assets/community/ovo.png'
import urso from '../../assets/community/urso.png'
import woody from '../../assets/community/woody.png'

const CommunitySection = () => {
    return (
        <div className={classes.wholes}>
            <section className={classes.container}>
                <section className={classes.community}>
                    <p>Comunidade (42)</p>
                    <a href="/">Ver todos</a>
                </section>
                <section>
                    <ul className={classes.communityView}>
                        <li>
                            <img className={classes.img} src={carro} alt="Carros" />
                            <p>Carros</p>
                        </li>
                        <li>
                            <img className={classes.img} src={woody} alt="Desenhos" />
                            <p>Desenhos</p>
                        </li>
                        <li>
                            <img className={classes.img} src={bart} alt="Crazy" />
                            <p>Crazy</p>
                        </li>
                        <li>
                            <img className={classes.img} src={urso} alt="Fofos" />
                            <p>Fofos</p>
                        </li>
                        <li>
                            <img className={classes.img} src={naruto} alt="Animes" />
                            <p>Animes</p>
                        </li>
                        <li>
                            <img className={classes.img} src={livro} alt="Leitura" />
                            <p>Leitura</p>
                        </li>
                        <li>
                            <img className={classes.img} src={ovo} alt="Meu ovo" />
                            <p>Meu ovo</p>
                        </li>
                        <li>
                            <img className={classes.img} src={livro} alt="My books" />
                            <p>My books</p>
                        </li>
                        <li>
                            <img className={classes.img} src={cafe} alt="Cafeeee" />
                            <p>Cafeeee</p>
                        </li>
                    </ul>
                </section>
            </section>
        </div>
    )
}

export default CommunitySection;