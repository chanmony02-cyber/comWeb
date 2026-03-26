import { notFound } from "next/navigation";
import NewsDetailPage from "@/features/NewsEvents/NewsDetailPage";
import { createPageMetadata } from "@/config/seo";
import { newsEventsItems } from "@/data/newsEvents/newsEvents";

export async function generateStaticParams() {
  return newsEventsItems.map((item) => ({
    id: String(item.id),
  }));
}

export async function generateMetadata({ params }) {
  const item = newsEventsItems.find((newsItem) => newsItem.id === Number(params.id));

  if (!item) {
    return createPageMetadata("News Detail", "News and events details page.");
  }

  return createPageMetadata(item.title, item.summary);
}

export default function Page({ params }) {
  const item = newsEventsItems.find((newsItem) => newsItem.id === Number(params.id));

  if (!item) {
    notFound();
  }

  return <NewsDetailPage params={params} />;
}
