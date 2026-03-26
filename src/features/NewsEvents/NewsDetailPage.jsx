import MainLayout from "@/layouts/MainLayout";
import { newsEventsItems } from "@/data/newsEvents/newsEvents";
import { NewsDetailContentSection } from "./components/NewsDetailContentSection";

export default function NewsDetailPage({ params }) {
  const item = newsEventsItems.find(
    (newsItem) => newsItem.id === Number(params?.id),
  );

  const related = item
    ? newsEventsItems
        .filter((newsItem) => newsItem.type === item.type && newsItem.id !== item.id)
        .slice(0, 4)
    : [];

  if (!item) {
    return (
      <MainLayout>
        <div className="container py-20 text-center">
          <p className="text-muted-foreground text-md">Article not found.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <NewsDetailContentSection item={item} related={related} />
    </MainLayout>
  );
}
