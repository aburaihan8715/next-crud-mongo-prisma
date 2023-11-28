export default function AddTopic() {
  return (
    <div className="max-w-md mx-auto">
      <form className="mt-8">
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
