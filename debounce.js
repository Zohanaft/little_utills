const Debounce =  {
    install (Vue, options) {
        Vue.prototype.$debounce = function (fn, delay) {
            let timeout
            return (function () {
                const fnCall = () => { fn.apply(this, arguments) }
                clearTimeout(timeout)
                timeout = setTimeout(fnCall, ms)
            })()
        }
    }
}

export default Debounce
