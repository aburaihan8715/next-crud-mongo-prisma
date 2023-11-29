import DeleteTopicBtn from "@/components/topic/DeleteTopicBtn";
import Link from "next/link";

// async function getTopicsData() {
//   const res = await fetch('https://api.example.com/...')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

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
            <DeleteTopicBtn />
            <Link href="/editTopic">
              <button className="c-btn bg-green-500 text-white">edit</button>
            </Link>
          </div>
        </li>
      </ul>
    </main>
  );
}
