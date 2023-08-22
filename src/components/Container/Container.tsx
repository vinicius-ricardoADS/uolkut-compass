import classes from './Container.module.css';

type ContainerProps = {
    children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
};

export default Container;