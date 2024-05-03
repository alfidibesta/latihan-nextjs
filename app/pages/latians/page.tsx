import { Metadata } from "next";
import CardList from "../../../components/latians/CardList";
import ViewUserButton from "../../../components/latians/ViewUserButton";

export const metadata: Metadata = {
    title: "Latian v1 | Besta Alfidi",
    description: "Latian Nect.Js v1",
  };

const base_url = "https://jsonplaceholder.typicode.com/users";

interface usersProps {
  id: number;
  name: string;
  email: string;
}
const Latians = async () => {
  const response = await fetch(base_url, {
    // cache: "no-store",
    next: {revalidate: 3600}
  });
  const users: usersProps[] = await response.json();

  return (
    <div className="p-5 m-5 w-full">
      <p>{new Date().toLocaleTimeString()}</p>
      <h1>PAGE LATIAN</h1>
      <i className="">List Users</i>
      {users.map((user) => {
        return (
          <CardList key={user.id}>
            <p>{user.id}</p>
            <i>{user.name}</i>
            {/* button di bawah menggunakan client side redering *use client */}
            <ViewUserButton email={user.email} id={user.id} />
          </CardList>
        );
      })}
    </div>
  );
};

export default Latians;
