import { useRouteError } from "react-router-dom";
import ServerErrorPage from "./500";
import NotAuthorizedAccessPage from "./403";
import NotFoundPage from "./404";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let ErrorPage = (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );

  switch (error.status) {
    case 500:
      ErrorPage = <ServerErrorPage />;
      break;
    case 403:
      ErrorPage = <NotAuthorizedAccessPage />;
      break;
    case 404:
      ErrorPage = <NotFoundPage />;
      break;
    default:
  }

  return <ErrorPage />;
}
