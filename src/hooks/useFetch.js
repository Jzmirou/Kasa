import { useEffect, useReducer, useRef } from "react";

/**
 * La fonction useFetch est un crochet React personnalisé qui récupère les données d'une URL et les met
 * en cache, tout en gérant les états de chargement et d'erreur.
 * @param url - L'URL du point de terminaison de l'API à partir duquel extraire les données.
 * @param option - Le paramètre `option` est un objet facultatif qui peut contenir des options
 * supplémentaires à transmettre à la fonction `fetch`, telles que les en-têtes, la méthode, le corps,
 * etc. Il permet de personnaliser la requête de récupération.
 * @returns Le hook personnalisé `useFetch` renvoie l'objet `state` qui contient trois propriétés :
 * `error`, `data` et `loading`. Ces propriétés sont mises à jour en fonction de l'état de la requête
 * de récupération asynchrone envoyée à l'"url" fournie. L'objet `state` est géré par la fonction
 * `fetchReducer` qui est appelée par le crochet `useReducer`.
 */
export const useFetch = (url, option) => {
    const cache = useRef({})
    const cancelRequest = useRef(false)
    const initialState = {
        error: undefined,
        data: undefined,
        loading: undefined
    }
    const fetchReducer = (state, action) => {
        switch(action.type) {
            case 'loading':
                return {...initialState, loading: true}
            case 'fetched':
                return {...initialState, data: action.payload }
            case 'error':
                return {...initialState, error: action.payload}
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(fetchReducer, initialState)
    useEffect(() => {
        if(!url) return
        cancelRequest.current = false
        const abortController = new AbortController()
        const fetchData = async () => {
            dispatch({type: 'loading'})

            if(cache.current[url]) {
                dispatch({type: 'fetched', payload: cache.current[url]})
            }
            try {
                const response = await fetch(url, {...option, signal: abortController.signal})
                if(!response.ok) throw new Error(response.statusText)
                const data = await response.json()
                cache.current[url] = data
                if(cancelRequest.current) return
                dispatch({type: 'fetched', payload: data})
            } catch (error) {
                if (cancelRequest.current) return
                dispatch({type: 'error', payload: error})
            }
        }
        fetchData()
        return () => {
            cancelRequest.current = true
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
    return state
}