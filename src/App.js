import { Header } from "./ui/Organisms/Header/Header";
import styles from "./App.module.scss";
import { Footer } from "./ui/Organisms/Footer/Footer";
import { router } from "./router";
import { RouterProvider, Outlet } from "react-router-dom";


function App() {
    return <RouterProvider router={router} />
}
export default App;

/**
 * Il s'agit d'un composant fonctionnel React qui renvoie une mise en page avec un en-tête, une zone de
 * contenu principale et un pied de page.
 * @returns Le composant `Layout` est renvoyé, qui est un composant wrapper qui inclut un `Header`, une
 * section `main` qui restitue les itinéraires enfants à l'aide du composant `Outlet` et un `Footer`.
 * La prop `className` est utilisée pour appliquer des styles CSS à l'élément `div` qui encapsule ces
 * composants.
 */
export const Layout = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
