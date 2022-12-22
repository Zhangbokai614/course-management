import request from "umi-request"

export async function currentUser(options) {
  return request("/article/markdown", {
    method: "GET",
    prefix: "http://192.168.0.24:4000",
    ...(options || {}),
  })
}
