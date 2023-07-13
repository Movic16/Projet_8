import Main from '../../Layout/Main/main';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';

import About from '../../Componants/About/about';
import Materiel from '../../Componants/Materiel/materiel';
import Project from '../../Componants/Project/project';
import Navig from '../../Componants/Navig/navig';
import Hfooter from '../../Page/Footer/Footer';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import  FormContact from '../../Componants/Formul/formContact';

function Home()
{
    return (
        <>
            <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xs" dir='letf'>

                <Header>
                    <Navig />
                </Header>

                <Main>
                    <About />
                    <Materiel />
                    <Project />
                    <FormContact />
                </Main>

                <Footer>
                    <Hfooter />
                </Footer>
            </ThemeProvider>
        </>
    )  
}

export default Home;