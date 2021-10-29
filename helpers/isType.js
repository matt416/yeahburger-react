
export const isObject = (obj) => typeof obj === 'object' && !Array.isArray(obj) && obj !== null
export const isArray = (obj) => Array.isArray(obj);
export const isString = (obj) => typeof obj === "string" || obj instanceof String
export const toKebabCase = (s) => s.replace(/\.?([A-Z]+)/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "");
