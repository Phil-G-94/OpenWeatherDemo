import Login from "../Login/Login";

import { login } from "../../store/auth";

import { useDispatch } from "react-redux";

const Form = () => {
    /* btn login handler */

    const dispatch = useDispatch();

    const loginHandler = (event) => {
        event.preventDefault();
        dispatch(login());
    };

    return (
        <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
            <div className="grid grid-cols-1 gap-6 place-items-center">
                <form action="submit">
                    <Login />
                    <button
                        className="rounded-md bg-slate-500 text-white p-2 m-2 hover:bg-slate-200 hover:text-black"
                        onClick={loginHandler}
                        type="submit"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
