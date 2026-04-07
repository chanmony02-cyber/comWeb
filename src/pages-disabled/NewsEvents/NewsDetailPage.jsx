<<<<<<<< Updated upstream:src/pages/NewsEvents/NewsDetailPage.jsx
import { useParams } from "react-router-dom";
========
import { notFound } from "next/navigation";
>>>>>>>> Stashed changes:src/legacy-pages/NewsEvents/NewsDetailPage.jsx
import MainLayout from "@/layouts/MainLayout";
import { newsEventsItems } from "@/data/newsEvents/newsEvents";
import { NewsDetailContentSection } from "./components/NewsDetailContentSection";

export default function NewsDetailPage() {
  const { id } = useParams();
  const item = newsEventsItems.find((newsItem) => newsItem.id === Number(id));

  const related = item
    ? newsEventsItems
        .filter((newsItem) => newsItem.type === item.type && newsItem.id !== item.id)
        .slice(0, 4)
    : [];

  if (!item) {
    notFound();
  }

  return (
    <MainLayout>
      <NewsDetailContentSection item={item} related={related} />
    </MainLayout>
  );
}
