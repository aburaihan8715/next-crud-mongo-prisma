"use client";

import { useRouter } from "next/navigation";

export default function AddTopic() {
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;

    if (!title || !description) return alert("Title and description can not be an empty!");

    const newTopic = { title, description };

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        body: JSON.stringify(newTopic),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      if (data.success) {
        // show notification
        alert("Topic created successfully!");
        // redirect somewhere or reset the fields
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={submitHandler} className="mt-8">
        <div className="flex flex-col gap-4">
          {/* topic title input */}
          <input className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic title" />

          {/* topic description input */}
          <input className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic description" />

          {/* topic action button */}
          <div className="text-right">
            <button className="c-btn bg-slate-600 text-white">Add topic</button>
          </div>
        </div>
      </form>
    </div>
  );
}
