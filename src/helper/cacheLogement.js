/* Ce code exporte une fonction `cacheLogement` qui renvoie un objet avec trois propriétés : `cache`,
`updateCache` et `removeCache`. */

const cache = new Map()

export const cacheLogement = () => {
    const updateCache = (nextData, id) => {
        if (nextData.length > 1) {
            for (const data of nextData) {
                cache.set(data.id, data)
            }
            return
        }
        cache.set(id, nextData)
    }
    const removeCache = (id) => {
        cache.delete(id)
    }
    return {
        cache,
        updateCache,
        removeCache
    }
}