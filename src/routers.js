import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import HomePage from './pages/home';
import CourseListPage from './pages/course-list';
import CoursePage from './pages/course';
import Codeing from './pages/codeing';
import ArticlePage from './pages/article';
import ArticleListPage from './pages/article-list';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const routers = {
    'Home': <HomePage />,
    'CourseList': <CourseListPage />,
    'Course': <CoursePage />,
    'Codeing': <Codeing />,
    'Article': <ArticlePage />,
    'ArticleList': <ArticleListPage />,
}

const menuItems = [
    getItem('Home', 'Home', <PieChartOutlined />),
    getItem('CourseList', 'CourseList', <DesktopOutlined />),
    getItem('Course', 'Course', <UserOutlined />),
    getItem('Codeing', 'Codeing', <TeamOutlined />),
    getItem('Article', 'Article', <FileOutlined />),
    getItem('ArticleList', 'ArticleList', <FileOutlined />),
];

export { routers, menuItems }