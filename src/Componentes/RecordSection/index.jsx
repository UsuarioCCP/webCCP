import React from "react";
import { RecordsCard } from "../RecordsCard";
// import { SectionSeparator } from "../SectionSeparator";

const RecordSection = () => {
    return (
        <section className="grid justify-items-center lg:h-[60vh] md:h-[75vh] mt-10 mb-6">
            <h2 className="text-center text-4xl self-center mb-3 font-bold drop-shadow-xl">
                <span className="text-gradient-rose">Descubre </span> 
                Todo lo que Necesitas Saber
            </h2> 
            <div className="grid items-end lg:w-full md:w-11/12 lg:h-[45vh] md:h-[65vh]">
                <div className="grid place-content-center">
                    <RecordsCard />
                    {/* <button className="btn btn-wide text-black hover-gradient-red ">Button</button>
                    <button className="btn btn-wide btn-accent">Button</button>
                    <button className="btn btn-wide btn-accent">Button</button> */}
                </div>
            </div>
            {/* <div className="flex justify-center mb-4">
                <SectionSeparator />
            </div> */}
        </section>
    );
}

export { RecordSection }