/**
 * 不规则的时间格式 补 0
 * @param {*} str "2019-5-21"
 * @returns "2019-05-21"
 */




 export function dateAddZero(str) {
  return str.replace(/(?=\b\d\b)/g, "0");
}


