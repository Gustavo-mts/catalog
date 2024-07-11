export default function Footer() {
    return (
        <footer className="lg:h-24 bg-gray-50 text-rose-500 p-4 border-t-2">
            <div className="container mx-auto text-center flex flex-col-reverse md:flex-col">
                <p className="text-sm">© 2024 My Company. Todos os direitos reservados.</p>
                <div className="flex flex-col-reverse md:flex-row justify-center space-x-4 mt-2">
                    <a href="#" className="hover:text-gray-300">Política de Privacidade</a>
                    <a href="#" className="hover:text-gray-300">Termos de Uso</a>
                    <a href="#" className="hover:text-gray-300">Contato</a>
                </div>
            </div>
      </footer>
    );
}