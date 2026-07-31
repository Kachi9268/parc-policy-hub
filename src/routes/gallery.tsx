import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";
import { X } from "lucide-react";
import { GALLERY_ALBUMS, GALLERY_IMAGES } from "../data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — PARC" },
      { name: "description", content: "Photo albums from PARC sessions, presentations and events at COOU Igbariam." },
      { property: "og:title", content: "Gallery — PARC" },
      { property: "og:description", content: "Photo albums from PARC." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const ALBUMS = GALLERY_ALBUMS;
const IMAGES = GALLERY_IMAGES;

function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [preview, setPreview] = useState<string | null>(null);

  const filters = useMemo(() => ["All", ...ALBUMS.map((a) => a.title)], []);
  const list = filter === "All" ? IMAGES : IMAGES.filter((i) => i.event === filter);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from PARC."
        description="A visual record of sessions, presentations, symposia and community engagements. New images are added as events unfold."
      />
      <section className="container-parc py-16 md:py-20">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={
                "rounded-full border px-4 py-2 text-sm font-medium transition " +
                (filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:text-primary")
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {list.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPreview(img.src)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Open image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition group-hover:scale-105" width={512} height={512} loading="lazy" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-left text-xs font-semibold uppercase tracking-widest text-white opacity-0 transition group-hover:opacity-100">
                {img.event}
              </span>
            </button>
          ))}
        </div>
      </section>

      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setPreview(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img src={preview} alt="" className="max-h-[85vh] max-w-[95vw] rounded-xl object-contain" />
        </div>
      )}
    </>
  );
}
