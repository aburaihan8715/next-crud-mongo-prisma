import DeleteTopicBtn from "@/components/topic/DeleteTopicBtn";
import EditTopicBtn from "@/components/topic/EditTopicBtn";

async function getTopicsData() {
  const res = await fetch("http://localhost:3000/api/topics", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Home() {
  const data = await getTopicsData();
  const topics = data.data;

  return (
    <main>
      <ul className="mt-6 flex flex-col gap-4">
        {topics?.map((topic) => (
          <li key={topic.id} className="border py-6 px-4  flex justify-between">
            <div>
              <h2 className="text-2xl font-medium uppercase">{topic.title}</h2>
              <p className="capitalize">{topic.description}</p>
            </div>
            <div className="flex gap-2 items-start">
              <DeleteTopicBtn id={topic.id} />
              {/* <Link href={`/editTopic/${topic.id}`}>
                <button className="c-btn bg-green-500 text-white">edit</button>
              </Link> */}
              <EditTopicBtn topic={topic} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
