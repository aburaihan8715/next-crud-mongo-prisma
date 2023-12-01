"use client";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

export default function AppNav() {
  const [openModal, setOpenModal] = useState(false);
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
        router.refresh();
        setOpenModal(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <header>
        <nav className="bg-slate-600 px-4 py-2 flex justify-between items-center rounded">
          <Link href={"/"} className="text-white">
            <div>
              NE<span className="text-2xl text-red-700">X</span>T CRUD
            </div>
            <div className="text-xs">mongo prisma</div>
          </Link>
          {/* <Link href={"/addTopic"} className="bg-white c-btn">
            Add topic
          </Link> */}
          <button onClick={() => setOpenModal(!openModal)} className="bg-white c-btn">
            Add topic
          </button>
        </nav>
      </header>
      {/* modal */}
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <form onSubmit={submitHandler} className="">
          <h3 className="text-center font-semibold uppercase mb-4 text-2xl">add topic</h3>
          <div className="flex flex-col gap-4">
            {/* topic title input */}
            <input className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic title" />

            {/* topic description input */}
            <input className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic description" />

            {/* topic action button */}
            <div className="text-right">
              <button className="c-btn bg-slate-600 text-white">submit</button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
