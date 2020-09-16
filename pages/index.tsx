import { withApollo } from "../apollo/client";

const IndexPage = () => (
  <>
    <h1>Hello Next.js 👋</h1>
  </>
);

export default withApollo(IndexPage);
