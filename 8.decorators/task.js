//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    const value = func(...args);
    const  objectInCache = cache.find(item => item.hash === hash);
    if (objectInCache) {
        const result = objectInCache;
        console.log ("Из кеша " + objectInCache.value);
        return "Из кеша: " + objectInCache.value;
    } else {
    cache.push({hash, value});
    if (cache.length > 5) {
        cache.shift();
    }
    console.log ("Вычисляем " + value);
    return "Вычисляем: " + value;
    }
  }
  return wrapper;
}

//Задача № 2
// function debounceDecoratorNew(func, delay) {
//   let timeoutId = null;
//   func.count = 0;
//   func.allCount = 0;
//   return function (...args) {
//     func.allCount++;
    
//     if (timeoutId) {
//         clearTimeout(timeoutId);
//     } else {
//         func(...args);
//         func.count ++; 
//     }

//     timeoutId = setTimeout(() => {
//         func(args);
//         func.count ++;
//     }, delay);
//   }
// }


function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    function wrapper (...args) {
      wrapper.allCount++;
      
      if (timeoutId) {
          clearTimeout(timeoutId);
      } else {
          func(...args);
          wrapper.count ++; 
      }
  
      timeoutId = setTimeout(() => {
          func(args);
          wrapper.count ++;
      }, delay);
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
  }