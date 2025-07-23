const  Article = ({title, text, tags, image, alt }) => {
    return <div className="p-5 bg-gray-200 dark:bg-blue-100 sm:rounded-xl sm:shadow-lg flex flex-col items-center gap-2">
        <h3 className="text-xl text-blue-950 dark:text-blue-950 font-bold  ">{title}</h3>
        <div className="w-full flex flex-row justify-end gap-2 pr-5 font-bold text-blue-900 ">
            {
                tags.map((tag) => <span className="bg-blue-300 dark:bg-indigo-300 px-4 py-0.2 rounded-full text-xs uppercase font-bold"  key={tag}>{tag}</span>)
            }
        </div>
        <div className="grid gap-1 ">
            {
                text.map((content, index ) => <p key={index} className="text-blue-950 dark:text-black" >{content}</p>)
            }
        </div>
        {image && <img className="sm:p-4" src={image} />}
        {image && alt && <span className="sr-only">{alt}</span>}
    </div>
}

export default Article