import request from "umi-request"

export async function tabControl(options) {
  return request("/courseList/", {
    method: "GET",
    prefix: "http://localhost:4000",
    ...(options || {}),
  })
}

export async function User(url, options) {
  return request("/courseList/" + url, {
    method: "GET",
    prefix: "http://localhost:4000",
    ...(options || {}),
  })
}
