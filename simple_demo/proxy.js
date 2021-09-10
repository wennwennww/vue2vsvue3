const data = {
  name: 'wenwen',
}

function reactive(target) {
  const handler = {
    get(target, key, receiver) {
      console.log(`跑“${key}”這個attr`);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      console.log(`把${key}由->${target[key]}->變成->${value}`);
      Reflect.set(target, key, value, receiver);
    }
  }

  return new Proxy(target, handler);
}

const proxyData = reactive(data);

