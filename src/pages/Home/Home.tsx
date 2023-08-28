import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <>
            <Header home={true}/>
            <Container>
                <Card />
                <Form />
            </Container>
            <Footer />
        </>
    )
};

export default Home;