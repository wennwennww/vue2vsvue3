function reactive(obj, key, value) {
  Object.defineProperty(data, key, {
    get() {
      console.log(`跑“${key}”這個attr`)
      return value;
    },
    set(val) {
      console.log(`把${key}由->${value}->變成->${val}`)
      if (value !== val) {
        value = val;
      }
    }
  })
}

const data = {
  name: 'wenwen',
}

Object.keys(data).forEach(key => reactive(data, key, data[key]));
