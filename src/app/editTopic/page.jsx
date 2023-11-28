export default function EditTopic() {
  return (
    <div className="max-w-md mx-auto">
      <form className="mt-8">
        <div className="flex flex-col gap-4">
          <input className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic title" />

          <input className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic description" />

          <div className="text-right">
            <button className="c-btn bg-slate-600 text-white">Update topic</button>
          </div>
        </div>
      </form>
    </div>
  );
}
