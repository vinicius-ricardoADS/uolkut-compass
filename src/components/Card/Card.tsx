import presentation from '../../assets/img_presentation.png';
import classes from './Card.module.css';

const Card = () => {
    return (
        <div className={classes['container-img']}>
            <img src={presentation} className={classes.img} alt="Group friends" />
            <div className={classes.middle}>
                <p className={classes.description}>
                    Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas
                </p>
            </div>
        </div>
    );
};

export default Card;