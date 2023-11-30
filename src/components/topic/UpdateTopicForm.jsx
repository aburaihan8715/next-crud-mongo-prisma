"use client";
import { useRouter } from "next/navigation";

export default function UpdateTopicForm({ topicData }) {
  const router = useRouter();
  const { id, title, description } = topicData.data;

  const submitHandler = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;

    if (!title || !description) return alert("Title and description can not be an empty!");

    const updatedTopic = { title, description };

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PATCH",
        body: JSON.stringify(updatedTopic),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      if (data.success) {
        // show notification
        alert("Topic updated successfully!");
        // redirect somewhere or reset the fields
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler} className="mt-8">
      <div className="flex flex-col gap-4">
        <input defaultValue={title} className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic title" />

        <input defaultValue={description} className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic description" />

        <div className="text-right">
          <button className="c-btn bg-slate-600 text-white">Update topic</button>
        </div>
      </div>
    </form>
  );
}
