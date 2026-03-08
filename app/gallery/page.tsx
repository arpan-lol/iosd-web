"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GALLERY_IMAGES, getAllTags, type GalleryImage } from "@/lib/config";
import { GalleryModal } from "@/components/gallery/GalleryModal";

const IMAGES_PER_PAGE = 12;

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [filter, setFilter] = useState<string>("All");
    const [visibleCount, setVisibleCount] = useState<number>(IMAGES_PER_PAGE);

    const tags = useMemo(() => ["All", ...getAllTags()], []);

    const filteredImages = useMemo(() => {
        return filter === "All"
            ? GALLERY_IMAGES
            : GALLERY_IMAGES.filter((img) => img.tags.includes(filter));
    }, [filter]);

    const visibleImages = filteredImages.slice(0, visibleCount);

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


                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 w-full">
                    {visibleImages.map((image, index) => (
                        <div
                            key={image.src}
                            className="break-inside-avoid cursor-pointer group cursor-target"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="relative overflow-hidden rounded-lg bg-muted border border-accent/10 md:border-transparent group-hover:border-accent/30 transition-all">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={400}
                                    height={image.height}
                                    loading="lazy"
                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {image.description && (
                                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white font-medium text-sm">{image.description}</p>
                                  </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < filteredImages.length && (
                    <div className="mt-12 flex justify-center w-full">
                        <button
                            onClick={handleLoadMore}
                            className="cursor-target cursor-none relative px-5 py-2 mono transition-all border bg-background text-muted-foreground hover:text-foreground"
                        >
                            Load More
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
