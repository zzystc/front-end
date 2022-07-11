class myPromise{
    constructor(executor) {
        this.status = 'pending'
        this.value = null
        this.reason = null
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
        let resolve = value =>{
            if (this.status === 'pending') {
                this.status = 'rejected'
                this.reason = this.reason
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        let reject = reason => {
            if (this.status === 'pending') {
                this.status = 'rejected'
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        };
        try {
            executor(reslove, reject)
        } catch (err) {
            reject(err)
        }
    }
    then(onFulfilled, onRejected) {
        return new myPromise((reslove,reject) => {
            if (this.status === 'fulfilled'){
                setTimeout( () => {
                    const x = onFulfilled(this.value);
                    x instanceof MyPromise ? x.then(resolve)
                })
            }
            if (this.status === 'rejected') {
                setTimeout( () => {
                    const x = onRejected(this.reason)
                    x instanceof Mypromise ? x.then(resolve, reject) : resolve(x)

                })
            }
            if  (this.status === 'pending') {
                this.onFulfilledCallbacks.push( () => {
                    setTimeout( () => {
                        const x = onFulfilled(this.value)
                        x instanceof MyPromise ? x.then(reslove, reject) : resolve(x)
                    })
                })
            }
        })
    }
}

function p1() {
    return new MyPromise((resolve, rejected) => {
        setTimeout(resolve, 1000, 2)
    })
}
function p2() {
    return new MyPromise((resolve, reject) => {
        setTimeout(resolve, 1000, 2)
    })
}
p1().then(res => {
    console.log(res)
    return p2()
}).then(ret => {
    console.log(ret)
})