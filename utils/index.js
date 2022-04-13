/**
 * @description 检测一个变量是否是数组并且不为空
 * @param arr
 * @returns {boolean}
 */
export const isArrayEmpty = (arr) => {
  return Array.isArray(arr) && arr.length > 0
}

/**
 * @description 检测一个变量是否是数组
 * @param arr
 * @returns {boolean}
 */
export const isArray = (arr) => {
  return Array.isArray(arr)
}