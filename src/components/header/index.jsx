import Menu from "../menu";
import Logo from '../assets/images/image.png'

export default function Header() {

    return (
        <header className="w-100 sm:w-6/12 lg:h-36 bg-gray-50 flex justify-around lg:items-center p-5 border-b-2">
            <div className="flex-1">
                <img src={Logo} className="lg:h-24" />
            </div>
            <div className="md:hidden">
                <Menu />
            </div>
            <nav className="hidden w-2/3 md:flex justify-around text-rose-500">
                <div>Home</div>
                <div>About</div>
                <div>Catalog</div>
                <div>Contact</div>
            </nav>
        </header>
    );
}