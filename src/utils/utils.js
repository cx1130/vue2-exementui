import axios from "axios";
import { template } from "lodash-es";

/**
 * 获取用户信息
 * @param {String} userName
 * @returns {Promise<object>} 用户信息
 */
export const getUserInfo = (userName) => {
  const apiPath = "https://api.github.com/users";
  return axios.get(`${apiPath}/${userName}`);
};

function executeString(string) {
  return new Function('"use strict";return ' + string)();
}
export const templateHtml = () => {
  const num1 = 1;
  const num2 = 2;
  const num3 = 3;
  const num4 = 4;
  const num5 = 51;
  const amountParams = {
    num1,
    num2,
    num3,
    num4,
    num5,
  };
  const amountString = "${num1} + ${num2} + ${num3} + ${num4} + ${num5}";
  const compiled = template(amountString);
  const amountResult = compiled(amountParams);
  console.log(amountResult);
  console.log(executeString(amountResult));
  // console.log(eval(amountResult));
};
