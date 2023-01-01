import { useRouteError } from "react-router-dom";
import ServerErrorPage from "./500";
import NotAuthorizedAccessPage from "./403";
import NotFoundPage from "./404";

export default function ErrorPage() {
  const error = useRouteError();

  switch (error.status) {
    case 403:
      return <NotAuthorizedAccessPage />;
    case 404:
      return <NotFoundPage />;
    default:
      return <ServerErrorPage text={error.statusText || error} />;
  }
}
