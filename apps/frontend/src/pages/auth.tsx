import App from "@components/App";
import withoutAuth from "@context/withoutAuth";
import authPage from "@middleware/authPage";
import Auth from "@views/Auth";

function Login() {
  return (
    <App>
      <Auth />
    </App>
  );
}

export default withoutAuth(Login);
export const getServerSideProps = authPage();
