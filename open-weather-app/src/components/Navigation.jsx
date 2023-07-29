import { logout } from "../store/auth";
import { useDispatch } from "react-redux";

const Navigation = () => {
    const dispatch = useDispatch();

    const logoutHandler = (event) => {
        event.preventDefault();

        dispatch(logout());
    };

    return (
        <nav>
            <ul className="flex flex-col m-0 p-0 gap-4 list-none justify-between md:flex-row">
                <li className="border-1 border-slate-50">Home</li>
                <li className="border-1 border-slate-50">News</li>
                <li className="border-1 border-slate-50">Contact</li>
                <li>
                    <button
                        className="rounded-md bg-slate-500 text-white p-2 m-2 hover:bg-slate-200 hover:text-black"
                        onClick={logoutHandler}
                        type="button"
                    >
                        Log out
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
