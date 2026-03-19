"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GALLERY_IMAGES, getAllTags, type GalleryImage } from "@/lib/config";
import { GalleryModal } from "@/components/gallery/GalleryModal";
import { useColumnCount } from "@/hooks/use-column-count";

const IMAGES_PER_PAGE = 12;

function LazyGalleryImage({
    image,
    onClick,
}: {
    image: GalleryImage;
    onClick: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="cursor-pointer group cursor-target"
            onClick={onClick}
        >
            <div
                className="relative overflow-hidden rounded-lg bg-muted border border-accent/10 md:border-transparent group-hover:border-accent/30 transition-all"
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
            >
                {isVisible ? (
                    <>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {image.description && (
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white font-medium text-sm">
                                    {image.description}
                                </p>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="w-full h-full bg-muted animate-pulse" />
                )}
            </div>
        </div>
    );
}

/** Distribute images into columns using shortest-column-first for balanced heights */
function distributeToColumns(images: GalleryImage[], columnCount: number) {
    const columns: { images: GalleryImage[]; totalHeight: number }[] = Array.from(
        { length: columnCount },
        () => ({ images: [], totalHeight: 0 })
    );

    images.forEach((img) => {
        // Find shortest column
        const shortest = columns.reduce((a, b) =>
            a.totalHeight <= b.totalHeight ? a : b
        );
        shortest.images.push(img);
        // Use aspect ratio (height/width) as normalized height
        shortest.totalHeight += img.height / img.width;
    });

    return columns;
}

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [filter, setFilter] = useState<string>("All");
    const [visibleCount, setVisibleCount] = useState<number>(IMAGES_PER_PAGE);
    const columnCount = useColumnCount();

    const tags = useMemo(() => ["All", ...getAllTags()], []);

    const filteredImages = useMemo(() => {
        return filter === "All"
            ? GALLERY_IMAGES
            : GALLERY_IMAGES.filter((img) => img.tags.includes(filter));
    }, [filter]);

    const visibleImages = filteredImages.slice(0, visibleCount);

    const columns = useMemo(
        () => distributeToColumns(visibleImages, columnCount),
        [visibleImages, columnCount]
    );

    const handleFilterChange = (tag: string) => {
        setFilter(tag);
        setVisibleCount(IMAGES_PER_PAGE);
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + IMAGES_PER_PAGE);
    };

    return (
        <div className="min-h-screen bg-transparent">
            {/* Header */}
            <div className="container mx-auto px-6 py-24 flex flex-col items-center">
                <h1 className="text-4xl sm:text-7xl font-light tracking-tight text-center mb-6 pb-2 px-6">
                    Gallery
                </h1>
                <p className="text-center text-muted-foreground text-base sm:text-lg mb-8 max-w-xl">
                    Moments captured from our events, workshops, and activities
                </p>

                {/* Tag Filter */}
                <div className="mb-12 flex flex-wrap justify-center gap-3">
                    {tags.map((tag) => {
                        const isActive = filter === tag

                        return (
                            <button
                                key={tag}
                                onClick={() => handleFilterChange(tag)}
                                className={cn(
                                    "cursor-target cursor-none relative px-5 py-2 mono transition-all",
                                    "border bg-background text-muted-foreground",
                                    "hover:text-foreground",
                                    isActive && [
                                        "text-foreground",
                                        "border-accent shadow-[0_0_10px_var(--accent-soft)]",
                                    ]
                                )}
                            >
                                {tag}
                            </button>
                        )
                    })}
                </div>


                {/* Masonry Grid — manual column distribution */}
                <div className="flex gap-4 w-full">
                    {columns.map((col, colIndex) => (
                        <div key={colIndex} className="flex-1 flex flex-col gap-4">
                            {col.images.map((image) => (
                                <LazyGalleryImage
                                    key={image.src}
                                    image={image}
                                    onClick={() => setSelectedImage(image)}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                {visibleCount < filteredImages.length && (
                    <div className="mt-12 flex justify-center w-full">
                        <button
                            onClick={handleLoadMore}
                            className="cursor-target cursor-none relative px-5 py-2 mono transition-all border bg-background text-muted-foreground hover:text-foreground"
                        >
                            See More
                        </button>
                    </div>
                )}
            </div>

            <GalleryModal
                images={filteredImages}
                selected={selectedImage}
                onClose={() => setSelectedImage(null)}
                onSelect={setSelectedImage}
            />
        </div>
    );
}
