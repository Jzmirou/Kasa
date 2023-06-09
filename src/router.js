import { Suspense, lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { loader as logementLoader } from "./ui/pages/Logement/Logement";
import { Layout } from "./ui/Layout/Layout";
import { LoadingSpinner } from "./ui/Atoms/LoadingSpinner/LoadingSpinner";
import { stop } from "./helper/api";
import { Gallery, loader as galleryLoader } from "./ui/Organisms/Gallery/Gallery";
import { LogementLoading } from "./ui/pages/Logement/LogementLoading";
import { HomeLoading } from "./ui/pages/Home/HomeLoading";
import { AboutLoading } from "./ui/pages/About/AboutLoading";

/* Ce code définit les routes pour une application React à l'aide de la bibliothèque
`react-router-dom`. Il utilise la fonction "lazy" pour charger de manière asynchrone les
composants de chaque route uniquement lorsqu'ils sont nécessaires, améliorant ainsi les performances
de l'application. La fonction `createRoutesFromElements` crée les routes basées sur les éléments JSX
définis dans le code. Les composants `Route` définissent les chemins et les composants à rendre pour
chaque route. Le composant `Suspense` est utilisé pour afficher un spinner de chargement pendant le
chargement du composant. La fonction `createBrowserRouter` crée l'objet routeur qui peut être
utilisé pour naviguer entre les différentes routes. */

const Home = lazy(() =>
    import("./ui/pages/Home/Home").then((module) => {
        return {
            default: module.Home,
        };
    })
);
const Logement = lazy(() =>
    import("./ui/pages/Logement/Logement").then((module) => {
        return {
            default: module.Logement,
        };
    })
);
const About = lazy(() =>
    import("./ui/pages/About/About").then((module) => {
        return {
            default: module.About,
        };
    })
);

// const Home = lazy(() =>
//     stop(2).then(() =>
//         import("./ui/pages/Home/Home").then((module) => {
//             return {
//                 default: module.Home,
//             };
//         })
//     )
// );
// const Logement = lazy(() =>
//     stop(2).then(() =>
//         import("./ui/pages/Logement/Logement").then((module) => {
//             return {
//                 default: module.Logement,
//             };
//         })
//     )
// );
// const About = lazy(() =>
//     stop(2).then(() =>
//         import("./ui/pages/About/About").then((module) => {
//             return {
//                 default: module.About,
//             };
//         })
//     )
// );
const Erreur404 = lazy(() =>
    import("./ui/pages/Erreur404/Erreur404").then((module) => {
        return {
            default: module.Erreur404,
        };
    })
);

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route
                path="/"
                element={
                    <Suspense fallback={<HomeLoading />}>
                        <Home />
                    </Suspense>
                }
            >
                <Route index element={<Gallery />} loader={galleryLoader} />
            </Route>
            <Route
                path="/logement/:id"
                element={
                    <Suspense fallback={<LogementLoading />}>
                        <Logement />
                    </Suspense>
                }
                errorElement={<Erreur404 />}
                loader={logementLoader}
            />
            <Route
                path="/about"
                element={
                    <Suspense fallback={<AboutLoading />}>
                        <About />
                    </Suspense>
                }
            />
            <Route
                path="*"
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <Erreur404 />
                    </Suspense>
                }
            />
        </Route>
    )
);
