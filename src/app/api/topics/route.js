// url: http://localhost:3000/api/topics

import prisma from "@/libs/db";
import { NextResponse } from "next/server";

// create topic
export async function POST(request) {
  try {
    // this for form data
    // const formData = await request.formData();
    // const title = formData.get("title");
    // const description = formData.get("description");

    // this is for raw json
    const { title, description } = await request.json();
    const newTopic = await prisma.Topic.create({
      data: { title, description },
    });

    // TODO: if we fetched data based on our information then we should use the following guard otherwise not need, like get all topics
    if (!newTopic) return NextResponse.json({ success: false, message: "Topic is  found" }, { status: 404 });

    return NextResponse.json({ success: true, message: "Topic created successfully!", data: newTopic }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to create topic", error }, { status: 500 });
  }
}

// get all topics
export async function GET() {
  try {
    const topics = await prisma.Topic.findMany();
    return NextResponse.json({ success: true, message: "Topics returned successfully!!", data: topics }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to get topics", error }, { status: 500 });
  }
}
