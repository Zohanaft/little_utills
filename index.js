module.exports = {
    install (Vue, options) {
        Vue.prototype.$debounce = function (fn, delay) {
            let timeout
            return (function () {
                const fnCall = () => { 
                    try {
                        return fn.apply(this, arguments)
                    }
                    catch (err) {
                        return fn(this, arguments)
                    }
                }
                clearTimeout(timeout)
                timeout = setTimeout(fnCall, delay)
            })()
        }
    }
}
