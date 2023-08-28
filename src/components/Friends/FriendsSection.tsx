import classes from './FriendsSection.module.css'

import Ana from '../../assets/friends/Ana.png'
import Carlos from '../../assets/friends/carlos.png'
import Carol from '../../assets/friends/carol.png'
import Eiji from '../../assets/friends/eiji.png'
import Fernando from '../../assets/friends/fernando.png'
import Julia from '../../assets/friends/julia.png'
import Matheus from '../../assets/friends/matheus.png'
import Ramos from '../../assets/friends/ramos.png'
import Vitor from '../../assets/friends/vitor.png'

const FriendsSection = () => {
    return (
        <div className={classes.whole}>
            <section className={classes.container}>
                <section className={classes.friends}>
                    <p>Amigos (248)</p>
                    <a href="/">Ver todos</a>
                </section>
                <section>
                    <ul className={classes.friendsView}>
                        <li>
                            <img className={classes.img} src={Ana} alt="Ana" />
                            <p className={classes.p}>Ana</p>
                        </li>
                        <li>
                            <img className={classes.img} src={Carlos} alt="Carlos" />
                            <p className={classes.p}>Carlos</p>
                        </li>
                        <li>
                            <img className={classes.img} src={Carol} alt="Carol" />
                            <p>Carol</p>
                        </li>
                        <li>
                            <img className={classes.img} src={Eiji} alt="Eiji" />
                            <p>Eiji</p>
                        </li>
                        <li>
                            <img className={classes.img} src={Fernando} alt="Fernando" />
                            <p>Fernando</p>
                        </li>
                        <li>
                            <img className={classes.img} src={Julia} alt="Julia" />
                            <p>Julia</p>
                        </li>
                        <li>
                            <img className={classes.img} src={Matheus} alt="Matheus" />
                            <p>Matheus</p>
                        </li>
                        <li>
                            <img className={classes.img} src={Ramos} alt="Ramos" />
                            <p>Ramos</p>
                        </li>
                        <li>
                            <img className={classes.img} src={Vitor} alt="Vitor" />
                            <p>Vitor</p>
                        </li>
                    </ul>
                </section>
            </section>
        </div>
    )
}

export default FriendsSection;