const Form = ({ onSubmit }) => {
    const safeSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;

        onSubmit({ name, email });
    };

    return (
        <form onSubmit={safeSubmit} className=" h-full flex flex-col items-center justify-center gap-10 -mt-60 ml-20 ">
            <input className="w-full max-w-max dark:bg-blue-950 dark:text-amber-50 pl-2 border border-blue-400 rounded py-1 focus:outline-none hover:scale-110 transition-transform duration-0.8" type="text" name="name" placeholder="Insira seu nome..." required />
            <input className="w-full max-w-max dark:bg-blue-950 dark:text-amber-50 pl-2 border border-blue-400 rounded py-1 focus:outline-none hover:scale-110 transition-transform duration-0.8" name="email" placeholder="Insira seu e-mail..." />
            <button type="submit" className="py-1 px-10 bg-blue-950 rounded text-cyan-50 dark:text-blue-50 mr-4 mt-5 hover: shadow-sm animate-pulse cursor-pointer uppercase " >Seguir</button>
        </form>
    );
};

export default Form;
