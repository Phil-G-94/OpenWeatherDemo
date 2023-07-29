import { useSelector } from "react-redux";
import Card from "./components/Card";
import Navigation from "./components/Navigation";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherQuery from "./components/WeatherQuery";
import Form from "./components/Form/Form";

function App() {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    return (
        <>
            <main>
                <section></section>

                <section>
                    <div className="flex flex-col place-items-center">
                        {!isAuth && <Form></Form>}

                        {isAuth && (
                            <Card>
                                <Navigation />
                                <WeatherDisplay />
                                <WeatherQuery />
                            </Card>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
