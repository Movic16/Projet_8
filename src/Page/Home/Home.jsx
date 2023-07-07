import Main from '../../Layout/Main/main';
import Header from '../../Layout/Header/Header';

import About from '../../Componants/About/about';
import Materiel from '../../Componants/Materiel/materiel';
import Project from '../../Componants/Project/project';
import Navig from '../../Componants/Navig/navig';

function Home()
{
    return (
        <>
            <Header>
                <Navig />
            </Header>

            <Main>
                <About />
                <Materiel />
                <Project />
            </Main>
        </>
    )  
}

export default Home;