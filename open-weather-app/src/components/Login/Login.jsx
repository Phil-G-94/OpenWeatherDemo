const Login = () => {
    return (
        <>
            <label
                htmlFor="username"
                className="block"
            >
                <input
                    className="mt-2 block w-full"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                />
            </label>
            <label
                htmlFor="password"
                className="block"
            >
                <input
                    className="mt-2 block w-full"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                />
            </label>
        </>
    );
};

export default Login;
