const _= require('lodash')

const items = [1, [2, 5, [3, [4, 6]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)