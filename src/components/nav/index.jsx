export default function Nav(props) {
    // eslint-disable-next-line react/prop-types
    const { visible } = props;

    return (
        <div className="flex relative">
            <ul className={`${visible ? "w-full sm:w-48" : 'w-0'} transition-width duration-500 flex flex-col font-bold h-screen fixed top-0 right-0 bg-gray-50 justify-center items-center`}>
                <li className={`${visible ? 'flex' : 'hidden'} text-rose-500 hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}>Início</li>
                <li className={`${visible ? 'flex' : 'hidden'} text-rose-500 hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}>Categorias</li>
                <li className={`${visible ? 'flex' : 'hidden'} text-rose-500 hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}>Filtros</li>
                <li className={`${visible ? 'flex' : 'hidden'} text-rose-500 hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}>Sobre</li>
            </ul>
        </div>
    )
}