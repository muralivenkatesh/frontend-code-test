import { useRouter } from "next/router";

const DetailsPage = () => {
  const { query } = useRouter();
  return <h1> Shop Page {query.id}</h1>;
};
export default DetailsPage;
