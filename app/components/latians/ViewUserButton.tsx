"use client";

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
      <button onClick={handleClick} className="rounded-sm p-2 bg-teal-400">
        Click DI SINI!
      </button>
    </div>
  );
};
export default ViewUserButton;
