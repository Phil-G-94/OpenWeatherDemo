const Card = (props) => {
    return (
        <div className="mx-4 my-auto p-4 max-w-2xl w-11/12 bg-slate-400 rounded-md text-center">
            {props.children}
        </div>
    );
};

export default Card;
