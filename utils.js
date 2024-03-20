/**
 * 获取某一项cookie的值
 * @param {string} name 
 * @returns {string} 正则匹配到的cookie中name的value
 */
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

/**
 * 设置cookie
 * @param {string} name 
 * @param {string} value 
 * @param {object} options 
 * eg:setCookie('user', 'John', {secure: true, 'max-age': 3600});
 */
function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // 如果需要，可以在这里添加其他默认值
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}
  
/**
 * 删除cookie
 * @param {string} name 
 */
function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
}