import classes from './ProfileDetails.module.css'
import Star from '../../assets/Star.png';
import Smile from '../../assets/Smiley.png';
import ThumbsUp from '../../assets/ThumbsUp.png';
import Heart from '../../assets/Heart.png';
import { useEffect } from 'react';
import { User } from '../../types/User';

type PropsProfileDetails = {
    user: User;
}

function ProfileDetails({ user }: PropsProfileDetails) {

    const age = calculateAge(user?.date_birth);
    const birth_date = calculateBirthDate(user?.date_birth);

    function calculateAge(birthDate: Date) {
        if (!birthDate) return null;

        const today = new Date();
        const birth = new Date(birthDate);

        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }

    function calculateBirthDate(birthDate: Date) {
        if (!birthDate) return null;
      
        const birth_date_full = new Date(birthDate);
        const day = birth_date_full.getDate();
        const month = birth_date_full.getMonth() + 1;
        const year = new Date().getFullYear();

        let dayString: string = '';
        let monthString: string = '';

        if (day < 10) dayString = '0' + day;

        if (month < 10) monthString = '0' + month;
      
        return dayString + '/' + monthString + '/' + year;
      }
        
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 360) {
                const spans = document.querySelectorAll(`.${classes.__divPreferences} span`)! as NodeListOf<HTMLSpanElement>;

                spans.forEach((span) => {
                    const text = span.textContent;

                    if (text !== 'Trap' && text !== 'A rede social' && text !== 'Ver Todos') {
                        span.style.display = 'none';
                    }
                });
            }
        };

        
        handleResize();

        
        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <div className={classes.__divContainer}>

                <h3 className={classes.nameTag}>Boa tarde, {user?.name}</h3>
                <h3 className={classes.inputName}><span className={classes.inputNameContent}>Programar sem café é igual poeta sem poesia.</span></h3>
                <div className={classes.__divSpans}> 
                    <p className={classes.p}>Fãs</p>
                    <p className={classes.p}>Confiável</p>
                    <p className={classes.p}>Legal</p>
                    <p className={classes.p}>Sexy</p>
                </div>
                <div className={classes.__divImg}>
                    <div className={classes.img}>
                        <img src={Star} alt="Star" />
                    </div>
                    <div className={classes.img}>
                        <img src={Smile} alt="Smile" />
                        <img src={Smile} alt="Smile" />
                    </div>
                    <div className={classes.img}>
                        <img src={ThumbsUp} alt="Like" />
                        <img src={ThumbsUp} alt="Like" />
                        <img src={ThumbsUp} alt="Like" />
                    </div>
                    <div className={classes.img}>
                        <img src={Heart} alt="Heart" />
                        <img src={Heart} alt="Heart" />
                    </div>
                </div>
                <div className={classes.__divDetails}>
                    <h4 className={classes.details}>Relacionamento: <span>{user?.relationship}</span></h4>
                    <h4 className={classes.details}>Aniversario: <span>{birth_date}</span></h4>
                    <h4 className={classes.details}>Idade: <span>{age}</span></h4>
                    <h4 className={classes.details}>Quem sou eu: <span>{user?.profession}</span></h4>
                    <h4 className={classes.details}>Moro: <span>{user?.city}</span></h4>
                    <h4 className={classes.details}>País: <span>{user?.country}</span></h4>
                    <h4 className={classes.details}>Cidade: <span>{user?.city}</span></h4>
                </div>
                <div className={classes.__divPreferences}>
                    <h4 className={classes.h}>
                        Músicas: <span className={classes.word}>Trap</span> <span className={classes.word}>Rap</span> <span className={classes.word}>Indie</span> <span className={classes.verTodos}>Ver Todos</span>
                    </h4>
                    <h4 className={classes.h}>
                        Filmes: <span className={classes.word}>A rede social</span> <span className={classes.word}>Meu amigo totoro</span> <span className={classes.verTodos}>Ver Todos</span>
                    </h4>
                </div>

            </div>
        </>
    )
}

export default ProfileDetails