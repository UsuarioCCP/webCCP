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
                <SectionSeparator background="https://i.postimg.cc/yxBJKm6n/banner.png" title="¡Registra tu empresa hoy mismo!" description="Haz crecer tu negocio de manera formal y segura" />
                <NewsSection />
                <SectionSeparatorEvent />
                <EventSection />
            </LayoutGeneral>
        </div>
    );
};

export {Home}