"use client";

import { Button } from "../ui/button";

//! menggunakan client side rendering 
//? agar bisa menggunakan tool browser

interface ViewUserButtonProbs {
  id: number;
  email: string;
}
const ViewUserButton: React.FC<ViewUserButtonProbs> = ({ email, id }) => {
  const handleClick = () => {
    alert(`id: ${id} -> email : ${email}`);
  };
  return (
    <div className="p-2 m-5 w-full">
      <Button onClick={handleClick}>
        Click DI SINI!
      </Button>
    </div>
  );
};
export default ViewUserButton;
