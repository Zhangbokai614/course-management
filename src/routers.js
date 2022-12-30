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
import CoursePage from "./pages/course";
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
              path: "course",
              element: <CoursePage />,
            },
            {
              path: "article",
              element: <ArticlePage />,
            },
          ]
        }
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
    label,
    key,
    icon,
    children,
  };
}

const menuItems = [
  getItem(<Link to={'/'}>Home</Link>, "/", <HomeOutlined />),
  getItem(<Link to={'courseList'}>CourseList</Link>, "/courseList", <FormOutlined />),
  getItem(<Link to={'articleList'}>ArticleList</Link>, "/articleList", <ReadOutlined />),
  getItem(<Link to={'codeing'}>Codeing</Link>, "/codeing", <CodeOutlined />),
  getItem(<Link to={"article/?articleId=1234"}>Article</Link>, "/article/", <LineOutlined />),
  getItem(<Link to={"course/?courseId=123"}>Course</Link>, "/course/", <LineOutlined />),
];

export { menuItems, router };
