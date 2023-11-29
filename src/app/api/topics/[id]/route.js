// url: http://localhost:3000/api/topics/123
import prisma from "@/libs/db";
import { NextResponse } from "next/server";

// get topic by id
export async function GET(request, { params }) {
  try {
    const id = params.id;
    const topic = await prisma.Topic.findUnique({
      where: { id },
    });

    if (!topic) return NextResponse.json({ success: false, message: "Topic not found with this id" }, { status: 404 });

    return NextResponse.json({ success: true, message: "Topic returned successfully!", data: topic }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch topic", error }, { status: 500 });
  }
}

// update topic by id
export async function PATCH(request, { params }) {
  try {
    const id = params.id;
    const { title, description } = await request.json();

    const updatedTopic = await prisma.Topic.update({
      where: {
        id,
      },
      data: { title, description },
    });

    // TODO: if we fetched data based on our information then we should use the following guard otherwise not need like get all topics
    if (!updatedTopic) return NextResponse.json({ success: false, message: "Topic is not updated!" }, { status: 400 });

    return NextResponse.json({ success: true, message: "Topic updated successfully!", data: updatedTopic }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to update topic", error }, { status: 500 });
  }
}

// update topic by id
export async function DELETE(request, { params }) {
  try {
    const id = params.id;
    const deletedTopic = await prisma.Topic.delete({
      where: {
        id,
      },
    });

    // TODO: if we fetched data based on our information then we should use the following guard otherwise not need like get all topics
    if (!deletedTopic) return NextResponse.json({ success: false, message: "Topic is not deleted!" }, { status: 400 });

    return NextResponse.json({ success: true, message: "Topic deleted successfully!", data: deletedTopic }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to delete topic", error }, { status: 500 });
  }
}
