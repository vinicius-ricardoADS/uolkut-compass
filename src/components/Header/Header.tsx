import brand from '../../assets/UOLkut.png';
import imgGlass from '../../assets/MagnifyingGlass.svg';
import userImg from '../../assets/gabriel.png';
import arrowDown from '../../assets/CaretDown.svg';
import classes from './Header.module.css';

type HeaderProps = {
    home: boolean;
}

const Header = ({ home }: HeaderProps) => {
    return (
        <>
          {home ? (
            <header className={classes.header}>
                <div className={classes.flex}>
                    <img src={brand} className={classes.brand} />
                    <ul className={classes["flex-information"]}>
                        <li className={classes.information}>Centro de segurança</li>
                    </ul>
                </div>
            </header>
          ): (
            <header className={classes.header}>
                <div className={classes['flex-profile']}>
                    <div className={classes['flex-profile']}>
                        <img src={brand} className={classes['brand-profile']} />
                        <ul className={classes["flex-info-profile"]}>
                            <li className={classes.information}>
                                <a href='/'>Início</a>
                            </li>
                            <li >
                                <a className={classes['information-profile']} href='/profiles'>Perfil</a>
                            </li>
                            <li className={classes.information}>
                                <a href='#'>Comunidades</a>
                            </li>
                            <li className={classes.information}>
                                <a href='#'>Jogos</a>
                            </li>
                        </ul>
                    </div>
                    <div className={classes['flex-profile']}>
                        <form className={classes.searchForm}>
                            <img src={imgGlass} />
                            <input
                                type="text"
                                placeholder="Pesquisar no UOLkut"
                                className={classes.searchInput}
                            />
                        </form>
                        <ul className={classes.user}>
                            <li>
                                <img src={userImg} className={classes.userImg} />
                            </li>
                            <li>
                                <a href="/" className={classes.link}>
                                    <p>Gabriel Barbosa</p>
                                </a>
                            </li>
                            <li>
                                <a href="/" className={classes.link}>
                                <img src={arrowDown} className={classes.caret} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
          )}
          
        </>
    );
};

export default Header;