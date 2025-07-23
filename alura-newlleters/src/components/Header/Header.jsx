import ToogleTheme from "../ToogleTheme/ToogleTheme";


const Header = ({user}) => {
    return (
        <div className="flex h-20 bg-gradient-to-l from to-blue-950 to bg-cyan-950 dark:bg-gray-900 justify-between items-center px-10 sm:rounded-xl sm:m-5 transition-colors duration-300">
            <span className="text-blue-50 dark:text-gray-100">Olá, {user?.name ||"Usuário"}</span>
            <h1 className="text-blue-50 dark:text-gray-100 text-xl">Alura Newsletter</h1>
            <ToogleTheme />
        </div>
    );
};

export default Header;
