module.exports = {
    install (Vue, options) {
        Vue.prototype.$debounce = function (fn, delay) {
            let timeout
            return (function () {
                
                if (fn.apply != undefined) {
                    const fnCall = () => { fn.apply(this, arguments) }
                    clearTimeout(timeout)
                    timeout = setTimeout(fnCall, delay)
                }
                else {
                    const fnCall = () => { fn }
                    clearTimeout(timeout)
                    timeout = setTimeout(fnCall, delay)
                }
                
            })()
        }
    }
}
