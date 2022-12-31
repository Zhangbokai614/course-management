import request from "./config"

export async function tabControl(options) {
  return request("/courseList/", {
    method: "GET",
    ...(options || {}),
  })
}

export async function User(url, options) {
  return request("/courseList/" + url, {
    method: "GET",
    ...(options || {}),
  })
}
