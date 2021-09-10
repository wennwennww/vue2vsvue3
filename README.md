# Vue2.x vs Vue3.x 簡略差異解說
#### 建立vue instance方法不同
```javascript
// vue2.x

let app = new Vue({
  el: '#app',
  data: {...},
  methods: {...},
  ...
})

// vue3.x
const app = Vue.createApp({
  data() {
    return {...}
  },
  methods: {...},
  ...
})

const vm = app.mount('#app');

```

#### Teleport 內建物件
https://v3.cn.vuejs.org/guide/teleport.html
```javascript
<teleport to="body">
  modal or others...
</teleport>
```

#### Fragments 內建物件
https://v3.vuejs.org/guide/migration/fragments.html
```javascript
// vue2.x
<template>
	<div>
		<button>Add</button>
		<p> {{count}}</p>
	</div>
</template>

// vue3.x
<template>
	<button>Add</button>
	<p> {{count}}</p>
</template>

```

#### Suspense 內建物件
https://v3.cn.vuejs.org/guide/migration/suspense.html#%E4%BB%8B%E7%BB%8D
``` javascript
<template>
  <Suspense>
    <template #default> // 有資料時
     {{ dataList }}
    </template>
    <template #fallback> // 等待資料時
      <div>
        Loading ...
      </div>
    </template>
  </Suspense>
</template>

```


#### v-for mixed v-if (不推薦)
vue2.x 混在一起用跟 vue3.x 混在一起用的結果不一樣
	- vue2.x : for --> if
	- vue3.x : if --> for

#### 生命週期的變化
![](https://i.imgur.com/vbLehZC.png)

#### vue3.x TypeScript支援度更好

#### vue3.x 可向下兼容 vue2.x (大部分可以)

#### vue2.x 與 vue3.x 雙向綁定核心改變
**point:** object.defineproperty vs Proxy
reference:  https://juejin.cn/post/7001999813344493581

#### composition API vs options API
reference: 
- https://juejin.cn/post/6891640356543627278
- https://juejin.cn/post/6954996635617198093
