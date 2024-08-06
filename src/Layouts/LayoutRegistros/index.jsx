const LayoutRecords = ({ Children }) => {
  return (
    <div>
      <section class="leading-normal tracking-normal text-white gradient-red-yellow">
        {/* <!--Nav--> */}

        {/* <!--Hero--> */}
        <div class="pt-24">
          <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {Children}
          </div>
        </div>


        <section class="bg-white border-b py-8">
          <div class="container max-w-5xl mx-auto m-8">
            SEGUNDA SECCION
          </div>
        </section>

        <section className="bg-white border-b py-8">
          <div className="container lg:w-2/3 mx-auto flex flex-wrap pt-4 pb-12">
            TERCERA SECCIÓN
          </div>

        </section>

        <section class="bg-gray-100 py-8">
          <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
            seccion cuatro
          </div>
        </section>

        <section class="container mx-auto text-center py-6 mb-12">
          seccion cinco
        </section>
      </section>
      
    </div>
  );
};

export { LayoutRecords };
