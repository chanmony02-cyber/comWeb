import { Link } from "react-router-dom";
import { newsEventsItems } from "@/data/newsEvents/newsEvents";
import { ROUTES } from "@/config/routes";

export default function NewsEventsSection() {
  const visibleItems = newsEventsItems.slice(0, 6);

  return (
    <section className="py-20 bg-navy border-b border-gray-500">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-primary-blue font-bold text-3xl sm:text-4xl md:text-[2.5rem] mb-3 font-display lg:whitespace-nowrap">
              NEWS &amp; EVENTS
            </h2>
            <p className="text-sky-accent text-md md:text-md max-w-md leading-relaxed font-sans">
              Stay updated with our latest announcements, milestones, and
              industry events.
            </p>
          </div>
          <Link
            to={ROUTES.NEWS}
            className="text-sky-accent hover:text-primary-foreground text-md font-medium transition-colors flex items-center gap-1 font-display shrink-0 lg:whitespace-nowrap self-end lg:self-auto"
          >
            More &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visibleItems.map((item) => (
            <Link
              key={item.id}
              to={ROUTES.NEWS_DETAIL.replace(":id", item.id)}
              className="group relative rounded-xl overflow-hidden aspect-video"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-blue text-md font-semibold font-display">
                  {item.type} - {item.location}
                </p>
                <p className="text-sky-accent text-sm font-medium font-sans mb-1">
                  {item.date}
                </p>
                <p className="text-primary-foreground text-md font-semibold font-display leading-snug">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
