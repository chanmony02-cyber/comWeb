import { notFound } from "next/navigation";
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

  return {
    title: item.title,
    description: item.summary,
  };
}

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
