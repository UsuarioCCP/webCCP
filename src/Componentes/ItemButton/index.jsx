import React from "react";

const ItemButton = ({nombre, modalId, contenido }) => {
    return (
      <div className="bg-white rounded-2xl hover:scale-105 hover-gradient-rose hover:opacity-90 transition-transform duration-300">
        <button
            className=" btn-md lg:btn-lg flex items-center gap-2 "
            onClick={() => document.getElementById(modalId).showModal()}
            >
            <i class="fa-regular fa-file-lines"></i> {/* Font Awesome icon */}
            {nombre}
        </button>
  
        <dialog id={modalId} className="modal">
          <div className="modal-box max-w-[72rem] h-[80vh]">
            <form method="dialog">
              <button className="btn btn-circle btn-ghost absolute right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </form>
            <div className="card-body px-4 pt-2 pb-0 m-0">
              {contenido}
            </div>
          </div>
        </dialog>
      </div>
    );
  };

export { ItemButton };