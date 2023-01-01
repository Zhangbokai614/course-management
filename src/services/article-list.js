import request from "./config"

export async function articleList(options) {
  return request("/article-list/data", {
    method: "GET",
    params: options,
    ...(options || {}),
  })
}
