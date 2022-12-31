import request from "./config"

export async function currentUser(options) {
  return request("/article/markdown", {
    method: "GET",
    ...(options || {}),
  })
}
