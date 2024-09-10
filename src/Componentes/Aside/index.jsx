import { useState } from 'react'
import { ButtonFloat } from "../ButtonFloat";
import { NavLink } from "react-router-dom";
import { HoverButton } from "../HoverButton";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon} from '@heroicons/react/20/solid';
import './styles.css'

const Aside = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const estadoTramite = [
    { name: 'Registral', description: 'Tramites de registros publicos', href: '/institucional/historia' },
    { name: 'PQRSF', description: 'Tramites referentes a PQRSF', href: '/institucional/quienes-somos' },
  ]

  return (
    <div className="fixed flex flex-col right-0 top-32 lg:top-36 z-50 h-auto gap-10">
      <div className="drawer drawer-end ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <ButtonFloat drawerId="my-drawer-4" />
        </div> 

        <div className="drawer-side ">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu self-start p-3 w-full md:w-80 min-h-full bg-base-200 text-base-content">
            {/* Close button */} 
            <li className="flex justify-end">
              <label htmlFor="my-drawer-4" className="btn btn-circle ">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </li>

            {/* Sidebar content here */}
            <PopoverGroup className="md:flex md:flex-wrap justify-start md:gap-7 lg:gap-2">

                {/* Compra Certificados */}
                  <Popover className="group item">
                    <PopoverButton className="flex w-full items-center item-efect ">
                      <NavLink to="/noticia-mercantil">
                        {/* <HoverButton text="Consulta Homonimia" /> */}
                        <span>
                          Compra tus certificados
                        </span>
                      </NavLink>
                    </PopoverButton>
                  </Popover>

                {/* Consulta Codigos CIIU */}
                  <Popover className="group item">
                    <PopoverButton className="flex w-full items-center item-efect ">
                      <NavLink to="/noticia-mercantil">
                        {/* <HoverButton text="Consulta Homonimia" /> */}
                        <span>
                          Consulta Codigos CIIU
                        </span>
                      </NavLink>
                    </PopoverButton>
                  </Popover>

                {/* Consulta Homonimia enlace a RUES */}
                  <Popover className="group item">
                    <PopoverButton className="flex w-full items-center item-efect ">
                      <NavLink to="/noticia-mercantil">
                        {/* <HoverButton text="Consulta Homonimia" /> */}
                        <span>
                          Consulta Homonimia
                        </span>
                      </NavLink>
                    </PopoverButton>
                  </Popover>

                {/* Segunto item del menu */}
                <Popover className="group item">
                    <PopoverButton className="flex w-full items-center item-efect gap-2">
                        {/* Menu estado tramite*/}
                        <span>
                          Estado del tramite
                        </span>
                        <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                    </PopoverButton>
                    <PopoverPanel anchor="bottom" className="absolute top-full z-50 w-screen md:w-72 max-w-md overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5" >
                    <div className="p-4">
                        {estadoTramite.map((item) => (
                        <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg py-3 text-sm leading-6 hover:bg-gray-50"
                        >
                            <div className="flex-auto">
                                <NavLink to={item.href}>
                                    {/* <HoverButton text={item.name}/> */}
                                    <span>
                                      {item.name}
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        ))}
                    </div>
                    </PopoverPanel>
                </Popover>
              </PopoverGroup>
              
            {/* <li className="item mx-5 text-lg">
              <span>Consulta Homonimia</span>
            </li>
            <li className="item mx-5 text-lg"><span>Tramites Registrales</span></li>
            <li className="item mx-5 text-lg"><span>services</span></li>
            <li className="item mx-5 text-lg"><span>contact</span></li> */}

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
              <div className="fixed inset-0 z-10" />
              <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Disclosure as="div" className="-mx-3">
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Nuestra Entidad
                          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {[...estadoTramite].map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              <HoverButton text={item.name} />
                            </DisclosureButton>
                          ))}
                        </DisclosurePanel>
                      </Disclosure>

                      <Disclosure as="div" className="-mx-3">
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Noticia Mercantil
                        </DisclosureButton>
                      </Disclosure>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Aside };


