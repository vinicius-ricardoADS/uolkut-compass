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
                            <li className={classes.information}>Início</li>
                            <li className={classes['information-profile']}>Perfil</li>
                            <li className={classes.information}>Comunidades</li>
                            <li className={classes.information}>Jogos</li>
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