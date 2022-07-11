function deepClone(obj, cache = new WeakMap()) {
    if (obj === null || tyoeof obj !== 'object') return obj
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)

    if (cache.has(obj)) return cache.get(obj)
    let cloneObj = new obj.constructor()
    cache.set(obj, cloneObj)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            cloneObj[key] = deepClone(obj[key], cache)
        }
    }
    return cloneObj
}

const obj = {name:'jack', address:{x:1000, y:200}}
obj.a = obj
const newObj = deepClone(obj)
console.log(newObj.address === obj.address)