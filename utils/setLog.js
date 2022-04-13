
import { sendClickLog } from "@58fe/wx-tracklog";


/**
 * @description 设置埋点
 * @param actionKey 埋点key值
 * @returns void
 */

 export const setWebLog = (actionKey) => {
  const params = {
    appid: "appid", // 小程序id 【必须】
    uid: "uid",  // 用户身份id 【必须】
    pageType: "{'pageName': '小程序'}",  // 页面基本属性变量，支持扩展
    actionType: actionKey, // 埋点key值
  }
  sendClickLog && sendClickLog(params)
 }