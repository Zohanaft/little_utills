module.exports = {
    install (Vue, options) {
        Vue.prototype.$debounce = function (fn, delay) {
            let timeout
            return (function () {
                const fnCall = () => { 
                    if (fn.apply) {
                        return fn.apply(this, arguments)
                    }
                    else {
                        return fn()
                    }
                }
                clearTimeout(timeout)
                timeout = setTimeout(fnCall, delay)
            })()
        }
    }
}
