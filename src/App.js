import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import { Header } from "./ui/Organisms/Header/Header";
import { About } from "./ui/pages/About/About";
import { Erreur404 } from "./ui/pages/Erreur404/Erreur404";
import { Home } from "./ui/pages/Home/Home";
import { Logement, loader as logementLoader } from "./ui/pages/Logement/Logement";
import styles from "./App.module.scss";
import { Footer } from "./ui/Organisms/Footer/Footer";
import { Gallery , loader as galleryLoader} from "./ui/Organisms/Gallery/Gallery";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />} >
                <Route path="/" element={<Home />}>
                    <Route index element={<Gallery />} loader={galleryLoader} />
                </Route>
                <Route path="/logement/:id" element={<Logement />} errorElement={<Erreur404/>}  loader={logementLoader} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Erreur404 />} />
            </Route>
        )
    );
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
