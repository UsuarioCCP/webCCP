'use client'

import { useState } from 'react'
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
//   ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon} from '@heroicons/react/20/solid';

const nuestraEntidad = [
  { name: 'Historia', description: 'Get a better understanding of your traffic', href: '/institucional/historia' },
  { name: 'Quienes Somos', description: 'Speak directly to your customers', href: '/institucional/quienes-somos' },
  { name: 'Politica Calidad', description: 'Your customers’ data will be safe and secure', href: '/institucional/politica-calidad' },
  { name: 'Nuestra Jurisdicción', description: 'Connect with third-party tools', href: '/institucional/jurisdiccion' },
]
const centroConciliacion = [
  { name: 'Requisitos y Tarifas', description: 'Get a better understanding of your traffic', href: '/centro-conciliacion/requisitos-tarifas', icon: ChartPieIcon },
  { name: 'Conciliadores', description: 'Speak directly to your customers', href: '/centro-conciliacion/conciliadores', icon: CursorArrowRaysIcon },
  { name: 'Reglamento del Centro', description: 'Your customers’ data will be safe and secure', href: '/centro-conciliacion/reglamento', icon: FingerPrintIcon },
]
const leyTransparencia = [
  { name: 'Información de la entidad', description: 'Get a better understanding of your traffic', href: '/ley-transparencia/info-entidad', icon: ChartPieIcon },
  { name: 'Normatividad de la entidad', description: 'Speak directly to your customers', href: '/ley-transparencia/normatividad', icon: CursorArrowRaysIcon },
  { name: 'Contratación', description: 'Your customers’ data will be safe and secure', href: '/ley-transparencia/contratacion', icon: FingerPrintIcon },
  { name: 'Planeación', description: 'Your customers’ data will be safe and secure', href: '/ley-transparencia/planeacion', icon: FingerPrintIcon },
  { name: 'Tramites', description: 'Your customers’ data will be safe and secure', href: '/ley-transparencia/tramites', icon: FingerPrintIcon },
  { name: 'Participa', description: 'Your customers’ data will be safe and secure', href: '/ley-transparencia/participa', icon: FingerPrintIcon },
  { name: 'Datos Abiertos', description: 'Your customers’ data will be safe and secure', href: '/ley-transparencia/datos-abiertos', icon: FingerPrintIcon },
  { name: 'Información Especifica para Grupos de Interes', description: 'Your customers’ data will be safe and secure', href: '/ley-transparencia/info-grupos', icon: FingerPrintIcon },
  { name: 'Obligación de Reporte de Información Especifica por Parte de la Entidad', description: 'Your customers’ data will be safe and secure', href: '/ley-transparencia/reporte-entidad', icon: FingerPrintIcon },
  { name: 'Atención y Servicios a la Ciudadanía', description: 'Your customers’ data will be safe and secure', href: '/ley-transparencia/atencion-ciudadania', icon: FingerPrintIcon },
  { name: 'Noticias', description: 'Your customers’ data will be safe and secure', href: '/ley-transparencia/noticias', icon: FingerPrintIcon },
]

export default function HeaderDos() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky z-50 bg-white shadow-lg">
      <nav aria-label="Global" className="text-base mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Cámara de Comercio de Pamplona</span>
            <img src="https://i.postimg.cc/9FDdqdpT/Logo-Camara.png" alt="logo camara" className="relative w-16" />
            {/* <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" /> */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex md:gap-7 lg:gap-8">
            <Popover className="group">
                <PopoverButton className="flex items-center gap-2">
                    <HoverButton text="Nuestra Entidad" />
                    <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                </PopoverButton>
                <PopoverPanel anchor="bottom" className="absolute -left-8 top-full z-50 mt-3 w-screen md:w-56 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5" >
                <div className="p-4">
                    {nuestraEntidad.map((item) => (
                    <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                        <div className="flex-auto">
                            <NavLink to={item.href}>
                                <HoverButton text={item.name}/>
                            </NavLink>
                        </div>
                    </div>
                    ))}
                </div>
                </PopoverPanel>
            </Popover>

            <Popover className="group">
                <PopoverButton className="flex items-center gap-2">
                        <NavLink to="/noticia-mercantil">
                          <HoverButton text="Noticia Mercantil" />
                        </NavLink>
                    {/* <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" /> */}
                </PopoverButton>
                {/* <PopoverPanel anchor="bottom" className="absolute -left-8 top-full z-10 mt-3 w-screen md:w-56 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5" >
                <div className="p-4">
                    {products.map((item) => (
                    <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                        <div className="flex-auto">
                            <NavLink to={item.href}>
                                <HoverButton text={item.name}/>
                            </NavLink>
                        </div>
                    </div>
                    ))}
                </div>
                </PopoverPanel> */}
            </Popover>

            <Popover className="group">
                <PopoverButton className="flex items-center gap-2">
                  <NavLink to="/centro-conciliacion">
                    <HoverButton text="Centro Conciliación" />
                  </NavLink>
                  <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                </PopoverButton>
                <PopoverPanel anchor="bottom" className="absolute -left-8 top-full z-50 mt-3 w-screen md:w-56 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5" >
                <div className="p-4">
                    {centroConciliacion.map((item) => (
                    <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                        <div className="flex-auto">
                            <NavLink to={item.href}>
                                <HoverButton text={item.name}/>
                            </NavLink>
                        </div>
                    </div>
                    ))}
                </div>
                </PopoverPanel>
            </Popover>

            <Popover className="group">
                <PopoverButton className="flex items-center gap-2">
                  <NavLink to="/ley-transparencia">
                    <HoverButton text="Ley Transparencia" />
                  </NavLink>
                    <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                </PopoverButton>
                <PopoverPanel anchor="bottom" className="absolute -left-8 top-full z-50 mt-3 w-screen md:w-56 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5" >
                <div className="p-4">
                    {leyTransparencia.map((item) => (
                    <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                        <div className="flex-auto">
                            <NavLink to={item.href}>
                                <HoverButton text={item.name}/>
                            </NavLink>
                        </div>
                    </div>
                    ))}
                </div>
                </PopoverPanel>
            </Popover>

          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Posible espacio para vue <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Cámara de Comercio de Pamplona</span>
              <img src="https://i.postimg.cc/9FDdqdpT/Logo-Camara.png" alt="logo camara" className="h-20 w-auto" />
            </a>
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
                    {[...nuestraEntidad].map((item) => (
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

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Centro Conciliación
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...centroConciliacion].map((item) => (
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
                    Ley Transparencia
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...leyTransparencia].map((item) => (
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


                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a> */}
                
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  posible espacio para VUE
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
