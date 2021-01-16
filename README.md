# little_utills

Install:
-----------------------------------
### yarn add https://github.com/Zohanaft/little_utills.git

Add to Vue: 
-----------------------------------

```js
import Vue from 'vue'
import Debounce from 'debounce/index'

Vue.use(Debounce)
```

Usage: 
-----------------------------------
@mouseup="$debounce(updatePrice, 500)"
