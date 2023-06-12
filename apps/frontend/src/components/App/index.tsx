import { styled } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = styled.main`
  display: flex;
  flex-direction: column;

  min-height: calc(100vh - 70px);
`;

export default function App({ children }) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
