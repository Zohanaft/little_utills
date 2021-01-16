module.exports = {
    install (Vue, options) {
        Vue.prototype.$debounce = function (fn, delay) {
            let timeout
            return (function () {
                const fnCall
                if (fn.apply != undefined) {
                    fnCall = () => { fn.apply(this, arguments) }
                }
                else {
                    fnCall = () => { fn }
                }
                clearTimeout(timeout)
                timeout = setTimeout(fnCall, delay)
            })()
        }
    }
}
