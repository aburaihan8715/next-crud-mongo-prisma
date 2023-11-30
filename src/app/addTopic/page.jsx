"use client";
export default function AddTopic() {
  const submitHandler = (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const description = e.target[1].value;

    if (!title || !description) return alert("Title and description can not be an empty!");
    const newTopic = { title, description };
    console.log(newTopic);
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
