import request from "umi-request"

/** 获取当前的用户 GET /api/currentUser */
export async function User(options) {
  return request("192.168.0.24:8081/article", {
    method: "GET",
    ...(options || {}),
  })
}
