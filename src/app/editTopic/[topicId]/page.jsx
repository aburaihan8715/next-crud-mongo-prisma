import UpdateTopicForm from "@/components/topic/UpdateTopicForm";

// get single topic
async function getTopicData(topicId) {
  const res = await fetch(`http://localhost:3000/api/topics/${topicId}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function EditTopic({ params }) {
  const { topicId } = params;
  const topicData = await getTopicData(topicId);

  return (
    <div className="max-w-md mx-auto">
      <UpdateTopicForm topicData={topicData} />
    </div>
  );
}
