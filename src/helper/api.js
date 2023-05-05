
/**
 * Cette fonction récupère les données d'un fichier JSON contenant des informations sur les logements
 * et les renvoie sous la forme d'un objet JavaScript.
 * @param {Object} option - Le paramètre `option` est un objet qui peut contenir diverses options pour la
 * fonction `fetch`, telles que `method`, `headers`, `body`, etc. Ces options sont utilisées pour
 * personnaliser la requête HTTP qui est envoyée au serveur. En diffusant l'objet `option` à l'aide de
 * la syntaxe de diffusion
 * @returns {Promise<Array>} La fonction `getAllLogement` renvoie une Promise qui résout les données extraites du
 * fichier `logements.json`. Les données sont renvoyées sous la forme d'un objet JavaScript. Si une
 * erreur se produit lors de la récupération ou de l'analyse de la réponse, la fonction consigne
 * l'erreur dans la console et ne renvoie rien.
 */
export const getAllLogement = async (option) => {
    try {
        const response = await fetch(`${window.location.origin}/logements.json`,{...option})
        const data = await response.json()
        return data
    } catch (err) {
        console.error(err)
    }
}


/**
 * Cette fonction récupère un fichier JSON contenant des données de logement et renvoie l'objet
 * logement avec l'ID spécifié.
 * @param {string} id  - Le paramètre `id` est un identifiant unique pour un logement spécifique que nous
 * souhaitons récupérer depuis le fichier `logements.json`.
 * @param {Object} option - Le paramètre `option` est un objet qui peut contenir des options supplémentaires à
 * passer à la fonction `fetch`. Ces options peuvent inclure des éléments tels que les en-têtes, la
 * méthode de requête et le corps. En utilisant l'opérateur de propagation (`...`), toutes les options
 * passées dans le paramètre `option` seront fusionnées avec le
 * @returns {Promise<Object>} Cette fonction renvoie une promesse qui se résout en un objet logement à partir d'un
 * tableau de logements extrait d'un fichier JSON, en fonction du paramètre id fourni. La fonction
 * accepte également un paramètre d'option facultatif qui peut être utilisé pour configurer la demande
 * de récupération. Si une erreur se produit lors de la récupération ou de l'analyse de la réponse, la
 * fonction consigne l'erreur dans la console.
 */
export const getLogementById = async (id, option) => {
    try {
        const response = await fetch(`${window.location.origin}/logements.json`,{...option})
        const data = await response.json()
        return data.find(logement => logement.id === id)
    }catch (err) {
        console.error(err)
    }
} 