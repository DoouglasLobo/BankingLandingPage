import Image from "next/image";

import { ItemMenu } from "./itemMenu";
import { Search } from "./Search";

import Hamburguer from '@/assets/hamburger.svg'
import Logo from '@/assets/logo.svg'
import IconUser from '@/assets/icon-user.svg'
import { Container } from "./Container";

export function Header() {
    return (
        <header className="relative flex items-center w-full h-20 bg-primary-orange">
            <div className="absolute top-0 right-0 bg-primary-blue h-full w-[19%] z-0"></div>
            <Container>
                <div className="flex flex-1 items-center justify-between">
                    <div className="w-full md:w-auto xl:w-auto flex items-center justify-between gap-14 z-10">
                        <Image
                            src={Logo}
                            alt="logo"
                        />
                        <ul className="hidden xl:flex md:flex items-center gap-12">
                            <li>
                                <ItemMenu
                                    name="Para você"
                                />
                            </li>
                            <li>
                                <ItemMenu 
                                    name="Para empresas"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                    name="Serviços"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                    name="Ajuda"
                                />
                            </li>
                        </ul>
                        <div className="hidden xl:flex md:flex">
                            <Search />
                        </div>
                        <button>
                            <Image
                                src={Hamburguer}
                                width={40}
                                height={40}
                                alt="menu hamburguer"
                                className="block md:hidden xl:hidden"
                            />
                        </button>
                    </div>
                </div>
                <button className="hidden md:flex xl:flex items-center gap-4 bg-primary-blue h-20 pl-10 z-10">
                    <Image src={IconUser} alt="icon user" />
                    <span className="text-white font-bold">Acessar Conta</span>
                </button>
            </ Container>
        </header>
    )
}