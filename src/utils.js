const userRegex = /^[a-z0-9A-Z]+$/

/**
 * @param {String} field
 * @param {String} value
 * @returns {Object} { state:Boolean 错误状态, message:String 错误提示}
 */
export const validate = (field, value) => {
  if (typeof value === 'string') value = value.trim()
  switch (field) {
    case 'username':
      if (value.length < 4 || value.length > 16 || !userRegex.test(value)) {
        return {
          state: true,
          message: '只允许包含数字，大小写字母，长度为4~16'
        }
      } else {
        return { state: false, message: '' }
      }

    case 'password':
      if (value.length < 8 || value.length > 32) {
        return {
          state: true,
          message: '密码长度为8~32'
        }
      } else {
        return { state: false, message: '' }
      }
    default:
      break
  }
}

/**
 * @param {Number} arg
 * @returns {Boolean}
 */
export const isObject = arg => {
  return Object.prototype.toString.call(arg) === '[object Object]'
}

/**
 * @param {Object} data
 * @returns {FormData}
 */
export const initFormData = data => {
  const formdata = new FormData()

  if (!isObject(data)) return formdata
  for (const key in data) {
    formdata.append(key, data[key])
  }
  return formdata
}

/**
 * @param {String} token
 * @returns {String} token
 */
export const setToken = (token = '') => {
  localStorage.setItem('token', token)
  return token
}

/**
 * @returns {String} token
 */
export const getToken = () => localStorage.getItem('token')
