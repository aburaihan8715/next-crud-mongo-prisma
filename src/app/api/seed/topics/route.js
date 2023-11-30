import { topics } from "@/data/data";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";
import prisma from "@/libs/db";

const getData = () => {
  const data = topics;
  if (data) return data;
  return notFound();
};

// get all topics
export async function GET() {
  const data = getData();
  try {
    await prisma.Topic.deleteMany();
    await prisma.Topic.createMany({ data: data });
    const topics = await prisma.Topic.findMany();

    return NextResponse.json({ success: true, message: "Topics returned successfully!!", data: topics }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to get topics", error }, { status: 500 });
  }
}
