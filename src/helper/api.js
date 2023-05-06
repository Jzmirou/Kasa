

export const stop = (seconde) =>
    new Promise((resolve) => {
        const time = seconde * 1000
        setTimeout(() => resolve(), time);
    });

/**
 * Cette fonction récupère les données JSON à partir d'une URL spécifiée et les renvoie après un délai
 * de 2 secondes, ou génère une erreur si les données ne peuvent pas être récupérées.
 * @param option - Le paramètre `option` est un objet qui contient des options pour la fonction
 * `fetch`. Ces options peuvent inclure des éléments tels que la méthode HTTP (par exemple, GET, POST),
 * les en-têtes et le corps. L'opérateur de propagation (`...`) est utilisé pour passer toutes les
 * propriétés de l'objet `option` comme
 * @returns La fonction `fetchJson` renvoie une promesse qui se résout en données JSON extraites de
 * l'URL spécifiée (`${window.location.origin}/logements.json`) après un délai de 2 000 millisecondes.
 * S'il y a une erreur lors de la récupération ou de l'analyse des données JSON, la fonction renvoie un
 * message d'erreur.
 */
const fetchJson = async (option) => {
    try {
        const response = await fetch(`${window.location.origin}/logements.json`, { ...option });
        const data = await response.json();
        // await stop(1);
        return data;
    } catch (error) {
        console.error(error);
        throw "la recuperation des données n'a pas fonctionner";
    }
};


/**
 * Cette fonction récupère toutes les données de logement en fonction des options proposées.
 * @param option - Le paramètre `option` est probablement un objet qui contient des options pour la
 * fonction `fetchJson`. Sans voir l'implémentation de `fetchJson`, il est difficile de dire exactement
 * quelles options il attend, mais cela pourrait inclure des choses comme l'URL à partir de laquelle
 * récupérer les données, les en-têtes à inclure dans la requête,
 * @returns La fonction `getAllLogement` renvoie les données extraites de la fonction `fetchJson`.
 */
export const getAllLogement = async (option) => {
    const data = await fetchJson(option);
    return data;
};

/**
 * Cette fonction récupère un objet logement par son ID depuis une source de données JSON.
 * @param id - Le paramètre `id` est un identifiant unique pour un logement spécifique que nous voulons
 * récupérer à partir des données.
 * @param option - Le paramètre "option" n'est pas défini dans l'extrait de code fourni. Cependant,
 * d'après le code, il semble que `option` soit passé en argument à la fonction `fetchJson`. Il est
 * possible que `option` soit un objet contenant des options pour l'API `fetch`,
 * @returns La fonction `getLogementById` renvoie une promesse qui se résout en l'objet logement avec
 * l'`id` spécifié à partir du tableau `data` obtenu à partir de la fonction `fetchJson`. Si aucun
 * logement avec le `id` spécifié n'est trouvé, il renverra `undefined`.
 */
export const getLogementById = async (id, option) => {
    const response = await fetchJson(option)
    const data = response.find((logement) => logement.id === id);
    if (!data) throw new Response("Not Found", {status: 400})

    return data
};
