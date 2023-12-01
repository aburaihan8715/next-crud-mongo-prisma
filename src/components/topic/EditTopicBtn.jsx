"use client";

import Modal from "@/ui/Modal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicBtn({ topic }) {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;

    if (!title || !description) return alert("Title and description can not be an empty!");

    const updatedTopic = { title, description };

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${topic.id}`, {
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
        router.refresh();
        setOpenModal(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <button onClick={() => setOpenModal(!openModal)} className="c-btn bg-green-500 text-white">
        edit
      </button>
      {/* modal */}
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <form onSubmit={submitHandler} className="">
          <h3 className="text-center font-semibold uppercase mb-4 text-2xl">edit topic</h3>
          <div className="flex flex-col gap-4">
            <input defaultValue={topic.title} className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic title" />

            <input defaultValue={topic.description} className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic description" />

            <div className="text-right">
              <button className="c-btn bg-slate-600 text-white">submit</button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
