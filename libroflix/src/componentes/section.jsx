const Section = ({
    title,
    titleAlign = 'left',
    children,   
    titleSize = 'text-2xl md:text-2x1',
    titleColor = 'text-neutral-800',
}) => {
    return (
        <section className="mb-10 px-3 md:px-6">
            <div className={`flex items-center mb-6 ${
                titleAlign === 'justify-start' ? 'justify-center' : 'justify-end'
            }`}>
                <h2
                 className={`${titleSize} font-bold ${titleColor} ${titleAlign === 'text-left' ? 'text-center' : "text-right"}`}
                 >
                    {title}
                </h2>
            </div>

            <div>{children}</div>
        </section>
    );
};

export default Section;