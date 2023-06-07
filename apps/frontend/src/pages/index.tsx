import { trpc } from "@services/trpc";

export default function Home() {
  const { data } = trpc.hello.useQuery();
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => console.log(data)}>click</button>
    </>
  );
}
