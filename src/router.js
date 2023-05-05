import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "./App";
import { About } from "./ui/pages/About/About";
import { Erreur404 } from "./ui/pages/Erreur404/Erreur404";
import { Home } from "./ui/pages/Home/Home";
import { Logement, loader as logementLoader } from "./ui/pages/Logement/Logement";
import { Gallery , loader as galleryLoader} from "./ui/Organisms/Gallery/Gallery";


/* Ce code crée un routeur en utilisant la fonction `createBrowserRouter` de la bibliothèque
`react-router-dom`. Le routeur est défini à l'aide de la syntaxe JSX et se compose de plusieurs
composants "Route" imbriqués. Chaque composant "Route" définit un chemin et un élément à rendre
lorsque ce chemin correspond. */
export const router = createBrowserRouter(
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