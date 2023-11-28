import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul className="mt-6 flex flex-col gap-4">
        <li className="border py-6 px-4  flex justify-between">
          <div>
            <h2 className="text-2xl font-medium capitalize">Topic title</h2>
            <p>Topic description</p>
          </div>
          <div className="flex gap-2 items-start">
            <button className="c-btn bg-red-500 text-white">delete</button>
            <Link href="/editTopic">
              <button className="c-btn bg-green-500 text-white">edit</button>
            </Link>
          </div>
        </li>
        <li className="border py-6 px-4  flex justify-between">
          <div>
            <h2 className="text-2xl font-medium capitalize">Topic title</h2>
            <p>Topic description</p>
          </div>
          <div className="flex gap-2 items-start">
            <button className="c-btn bg-red-500 text-white">delete</button>
            <Link href="/editTopic">
              <button className="c-btn bg-green-500 text-white">edit</button>
            </Link>
          </div>
        </li>
        <li className="border py-6 px-4  flex justify-between">
          <div>
            <h2 className="text-2xl font-medium capitalize">Topic title</h2>
            <p>Topic description</p>
          </div>
          <div className="flex gap-2 items-start">
            <button className="c-btn bg-red-500 text-white">delete</button>
            <Link href="/editTopic">
              <button className="c-btn bg-green-500 text-white">edit</button>
            </Link>
          </div>
        </li>
      </ul>
    </main>
  );
}
