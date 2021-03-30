const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // Pure Function
    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i])
        }
        return collection
      } else {
        for (let i = 0; i < Object.keys(collection).length; i++) {
          callback(collection[Object.keys(collection)[i]])
        }
        return collection
      }
    },

    map: function(collection, callback) {
      const arr = []
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          arr.push(callback(collection[i]))
        }
        return arr
      } else {
        for (let i = 0; i < Object.keys(collection).length; i++) {
          arr.push(callback(collection[Object.keys(collection)[i]]))
        }
        return arr
      }
    },

    reduce: function(collection, callback, acc) {
      if (acc) {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection)
        }
        return acc
      } else {
        let acc = collection[0]
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection)
        }
        return acc
      }
    },

    find: function (collection, predicate) { 
      let found
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          found = collection[i]
          break
        }
      }
      return found
    },

    filter: function (collection, predicate) {
      let found = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          found.push(collection[i])
        }
      }
      return found
    },

    size: function (collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else if (Object.keys(collection)) {
        return Object.keys(collection).length
      }
    },

    first: function (array, n) {
      if (n) {
        let newArray = []
        for (let i = 0; i < n; i++) {
          newArray.push(array[i])
        }
        return newArray
      } else {
        return array[0]
      }
    },

    last: function (array, n) {
      if (n) {
        let newArray = []
        for (let i = n; i > 0; i--) {
          newArray.push(array[array.length - i])
        }
        return newArray
      } else {
        return array[array.length - 1]
      }
    },

    compact: function (array) {
      let falsy
      let trueArr = []
      for (let i = 0; i < array.length; i++) {
        falsy = Boolean(array[i])
        if (falsy === true) {
          trueArr.push(array[i])
        }
      }
      return trueArr
    },

    sortBy: function (array, callback) {
      let sortedArray = [...array]
      return sortedArray.sort(function (a, b) {
        return callback(a) - callback(b)
      })
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
