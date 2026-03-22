const Button = ({onmouseover, children, color = "primary"}) =>
{
    const styles = {
        primary: "text-[#984C35CC] bg-white",
        secondary: "text-white bg-[#984C35CC]",
    };
    
    return (
        <button
        onmouseover={onmouseover}
        className={`px-4 py-2 roudend ${styles[color]}`}>
            {children}
        </button>
    );
};

export default Button;