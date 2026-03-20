// src/pages/NewsEvents/NewsEventsPage.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { newsEventsItems } from "@/data/newsEvents/newsEvents";
import { ROUTES } from "@/config/routes";

const PAGE_SIZE = 6;
const FILTERS = ["All", "News", "Events"];

export default function NewsEventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeFilter === "All"
      ? newsEventsItems
      : newsEventsItems.filter((item) => item.type === activeFilter);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MainLayout>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-navy py-16 md:py-24 ">
        <div className="container flex justify-center items-center lg:h-40">
          <h1 className="text-white font-bold text-4xl md:text-6xl font-display ">
            News &amp; Events
          </h1>
        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────── */}
      <section className="py-14 bg-background">
        <div className="container">
          {/* Filter tabs */}
          <div className="flex items-center justify-center gap-3 mb-12">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilter(filter)}
                className={`px-5 py-2 rounded-full text-md font-semibold border transition-colors ${
                  activeFilter === filter
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-foreground border-border hover:border-navy"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {visible.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  {/* Badge */}
                  <span className="inline-flex w-fit px-3 py-1 rounded-full bg-sky-accent/40 text-primary-blue text-md font-semibold">
                    {item.type}
                  </span>

                  {/* Date */}
                  <p className="text-muted-foreground text-md">
                    Date: {item.date}
                  </p>

                  {/* Title */}
                  <h3 className="text-navy font-bold text-md font-display leading-snug">
                    Title: {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-muted-foreground text-md leading-relaxed line-clamp-3 font-sans flex-1">
                    {item.summary}
                  </p>

                  {/* Read More */}
                  <Link
                    to={ROUTES.NEWS_DETAIL.replace(":id", item.id)}
                    className="inline-flex items-center gap-1 px-4 py-2 border border-border rounded-md text-md font-semibold text-foreground hover:border-primary-blue hover:text-white hover:bg-primary-blue transition-colors w-fit mt-1 font-sans"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => handlePage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded border text-md font-semibold transition-colors ${
                  currentPage === 1
                    ? "border-border text-muted-foreground cursor-not-allowed"
                    : "border-border text-foreground hover:border-navy"
                }`}
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePage(page)}
                    className={`w-10 h-10 rounded border text-md font-semibold transition-colors ${
                      page === currentPage
                        ? "bg-navy text-white border-navy"
                        : "border-border text-foreground hover:border-navy"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                type="button"
                onClick={() =>
                  handlePage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded border text-md font-semibold transition-colors ${
                  currentPage === totalPages
                    ? "border-border text-muted-foreground cursor-not-allowed"
                    : "border-border text-foreground hover:border-navy"
                }`}
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
