import request from "umi-request"

export async function currentUser(options) {
  return request("/article/markdown", {
    method: "GET",
    prefix: "http://localhost:4000",
    ...(options || {}),
  })
}
