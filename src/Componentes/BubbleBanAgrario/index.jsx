const BubbleBanAgrario = () => {
  return (
    <div className="fixed lg:bottom-0 z-50 w-full drop-shadow-lg">
      <div className="grid justify-items-start mx-2">
        <div
            className="avatar grid justify-items-center cursor-pointer"
            onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <div className="w-20 rounded-full">
            <img src="https://i.postimg.cc/L6RG9kR6/Ban-Agrario.jpg"/>
          </div>


          <button
              className="text-sky-700 bg-white btn w-28"
              onClick={() => document.getElementById("my_modal_3").showModal()}
          >
              Apoyando el comercio
          </button>
        </div>
      </div>



      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          <div className="w-full">
            <img
              className=""
              src="https://i.postimg.cc/pVmvFJnW/Banner-Ban-Agrario-Dos.webp"
            />
          </div>
          <div className="flex justify-center my-2">
            <a href="https://bit.ly/alianzasBAgrario">
              <button class="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Clic Aqui
              </button>
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export { BubbleBanAgrario };
