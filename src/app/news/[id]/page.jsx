import { notFound } from "next/navigation";
<<<<<<< Updated upstream
import MainLayout from "@/layouts/MainLayout";
import { newsEventsItems } from "@/data/newsEvents/newsEvents";
import { NewsDetailContentSection } from "@/pages/NewsEvents/components/NewsDetailContentSection";

export async function generateStaticParams() {
  return newsEventsItems.map((item) => ({ id: String(item.id) }));
}

export async function generateMetadata({ params }) {
  const item = newsEventsItems.find((entry) => entry.id === Number(params.id));

  if (!item) {
    return {};
  }

=======

import { NewsDetailContentSection } from "@/screens/NewsEvents/components/NewsDetailContentSection";
import {
  getNewsEventById,
  getNewsEvents,
  getRelatedNewsEvents,
} from "@/services/news";

export function generateStaticParams() {
  return getNewsEvents().map((item) => ({ id: String(item.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = getNewsEventById(id);
  if (!item) return { title: "News" };
>>>>>>> Stashed changes
  return {
    title: item.title,
    description: item.summary,
  };
}

<<<<<<< Updated upstream
export default function Page({ params }) {
  const item = newsEventsItems.find((entry) => entry.id === Number(params.id));

  if (!item) {
    notFound();
  }

  const related = newsEventsItems
    .filter((entry) => entry.type === item.type && entry.id !== item.id)
    .slice(0, 4);

  return (
    <MainLayout>
      <NewsDetailContentSection item={item} related={related} />
    </MainLayout>
  );
}
=======
export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const item = getNewsEventById(id);
  if (!item) notFound();

  const related = getRelatedNewsEvents(item.type, item.id);

  return <NewsDetailContentSection item={item} related={related} />;
}

>>>>>>> Stashed changes
