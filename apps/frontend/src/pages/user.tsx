import App from "@components/App";
import withAuth from "@context/withAuth";
import protectedContent from "@middleware/protectedContent";
import User from "@views/User";

function Page() {
  return (
    <App>
      <User />
    </App>
  );
}

export default withAuth(Page);
export const getServerSideProps = protectedContent();
