import request from "umi-request"

export async function articleList(options) {
  return request("/article-list/data", {
    method: "GET",
    prefix: "http://localhost:4000",
    ...(options || {}),
  })
}
