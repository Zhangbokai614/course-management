import request from "./config"

export async function getCourseByLanguage(language, courseId) {
    return request("/course", {
        getResponse: true,
        method: "GET",
        dat: {
            language,
            courseId
        }
    })
}
