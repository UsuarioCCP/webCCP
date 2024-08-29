import { LayoutGeneral } from '../../Layouts/LayoutGeneral';
// import { Header } from '../../Componentes/Header'
import { Hero } from '../../Componentes/Hero';
import { RecordSection } from '../../Componentes/RecordSection';
// import { Aside } from '../../Componentes/Aside';
import { NewsSection } from '../../Componentes/NewsSection';
import { SectionSeparator } from '../../Componentes/SectionSeparator';
import { SectionSeparatorEvent } from '../../Componentes/SectionSeparatorEvent';
import { EventSection } from '../../Componentes/EventSection';
// import { SectionSeparator } from './Componentes/SectionSeparator';

const Home = () => {
    return(
        <div>
            <LayoutGeneral>
                <Hero />
                <RecordSection />
                    {/* <SectionSeparator
                    imageUrl=""
                    /> */}
                {/* <Aside /> */}
                <SectionSeparator />
                <NewsSection />
                <SectionSeparatorEvent />
                <EventSection />
            </LayoutGeneral>
        </div>
    );
};

export {Home}