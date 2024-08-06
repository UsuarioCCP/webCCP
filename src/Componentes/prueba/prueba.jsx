const Prueba = () => {
  return (
    <div className="flex justify-center h-[100vh]">
      <section className="absolute flex justify-end w-5/6 h-[100vh] bg-white overflow-hidden">
        <div className="flex flex-wrap bg-white w-full h-[100vh]">
          <div className="z-10 flex flex-nowrap bg-white w-full h-[50vh]">
            <h2 className=" font-semibold"> Titulo no tan largo</h2>
            <p className="text-black"> Mas texto</p>
          </div>
          <div className="z-10 flex w-full"
            style={{ 
              backgroundImage: "url('https://img.freepik.com/foto-gratis/vista-ciudad-nueva-york-ee_53876-160509.jpg?t=st=1718664783~exp=1718668383~hmac=872336b9c0670eb380ea55dea895aa29e055a296bcd1afa8f701b8d381be01c0&w=1380')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '400px'  // Ajusta la altura según sea necesario
          }}>
                    <div className="flex self-center gradient-rose opacity-50 w-full h-[30vh]">
                      <p className="text-white text-lg">Aqui va el texto</p>
                    </div>
                    <div className="absolute w-3/5 flex justify-end z40">
                        <div>
                          <img src="" alt="" />
                        </div>
                        <p>Texto 1</p>
                      </div>
          </div>
        </div>
        <div className="absolute z-20 transform -skew-x-[20deg] flex justify-end gradient-blue w-[22rem] h-[80vh] right-[-5rem] shadow-sm"></div>
        <div className="absolute z-30 transform -skew-x-[20deg] flex justify-end gradient-rose w-36 h-[50vh] right-60 shadow-sm"></div>
        <div className="absolute z-40 transform -skew-x-[150deg] flex justify-center items-center bg-white w-[27rem] h-[100vh] right-20">
          <div className="transform -skew-x-[-150deg]">
            <div className=" left-20 w-full">
              <div>
                <img src="" alt="" />
              </div>
              <p>Texto 1</p>
            </div>
            <div className=" right-6 w-full">
              <div>
                <img src="" alt="" />
              </div>
              <p>Texto 1</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export {Prueba};