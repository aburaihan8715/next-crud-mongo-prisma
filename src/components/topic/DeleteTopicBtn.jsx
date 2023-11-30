"use client";

import { useRouter } from "next/navigation";

export default function DeleteTopicBtn({ id }) {
  const router = useRouter();
  const deleteHandler = async () => {
    const agree = confirm("Are you sure?");
    if (agree) {
      try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.success) {
          alert("Topic deleted successfully!");
          router.refresh();
        }
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <>
      <button onClick={deleteHandler} className="c-btn bg-red-500 text-white">
        delete
      </button>
    </>
  );
}
