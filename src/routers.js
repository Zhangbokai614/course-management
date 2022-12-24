import {
  HomeOutlined,
  FormOutlined,
  ReadOutlined,
  CodeOutlined,
  LineOutlined,
} from "@ant-design/icons";

import HomePage from "./pages/home";
import CourseListPage from "./pages/course-list";
import CoursePage from "./pages/course";
import Codeing from "./pages/codeing";
import ArticlePage from "./pages/article";
import ArticleListPage from "./pages/article-list";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const PageControl = (page, changePage, context = {}) => {
  const routers = {
    Home: <HomePage changePage={changePage} context={context} />,
    CourseList: <CourseListPage changePage={changePage} context={context} />,
    Course: <CoursePage changePage={changePage} context={context} />,
    Codeing: <Codeing changePage={changePage} context={context} />,
    Article: <ArticlePage changePage={changePage} context={context} />,
    ArticleList: <ArticleListPage changePage={changePage} context={context} />,
  };

  return routers[page];
};

const menuItems = [
  getItem("Home", "Home", <HomeOutlined />),
  getItem("CourseList", "CourseList", <FormOutlined />),
  getItem("ArticleList", "ArticleList", <ReadOutlined />),
  getItem("Codeing", "Codeing", <CodeOutlined />),
  getItem("Article", "Article", <LineOutlined />),
  getItem("Course", "Course", <LineOutlined />),
];

export { menuItems, PageControl };
