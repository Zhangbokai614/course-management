import {
  HomeOutlined,
  FormOutlined,
  ReadOutlined,
  CodeOutlined,
  LineOutlined,
} from "@ant-design/icons";
import { createBrowserRouter, Link } from "react-router-dom";

import HomePage from "./pages/home";
import CourseListPage from "./pages/course-list";
import CoursePage, { loader as courseLoader } from "./pages/course";
import CodeingPage from "./pages/codeing";
import ArticlePage from "./pages/article";
import ArticleListPage from "./pages/article-list";
import PageLayout from "./pages/layout";
import ErrorPage from "./pages/error/error";
import NotFoundPage from "./pages/error/404";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PageLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "courseList",
          element: <CourseListPage />,
        },
        {
          path: "articleList",
          element: <ArticleListPage />,
        },
        {
          path: "codeing",
          element: <CodeingPage />,
        },
        {
          path: "course/:courseId",
          element: <CoursePage />,
          loader: courseLoader,
        },
        {
          path: "article/:articleId",
          element: <ArticlePage />,
        },
      ]
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]
);

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const menuItems = [
  getItem(<Link to={'/'}>Home</Link>, "Home", <HomeOutlined />),
  getItem(<Link to={'courseList'}>CourseList</Link>, "CourseList", <FormOutlined />),
  getItem(<Link to={'articleList'}>ArticleList</Link>, "ArticleList", <ReadOutlined />),
  getItem(<Link to={'codeing'}>Codeing</Link>, "Codeing", <CodeOutlined />),
  getItem(<Link to={'article/tempArticleId'}>Article</Link>, "Article", <LineOutlined />),
  getItem(<Link to={'course/tempCourseId'}>Course</Link>, "Course", <LineOutlined />),
];

export { menuItems, router };
