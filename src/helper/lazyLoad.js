
import { lazy } from "react";

export const lazyLoad =  (path, namedExport) => {
    return lazy(async () => {
        const promise = await import(path)
        console.log(promise)
        if (namedExport == null) {
            return promise
        } else {
            return promise.then(module => ({default: module[namedExport]}))
        }
    })
}