"use client";

import { defaultImages } from "@/constants/images";
import { unsplash } from "@/lib/unsplash";
import { cn } from "@/lib/utils";
import { Check, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

export const FormPicker = ({ id, errors }: FormPickerProps) => {
  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState(defaultImages);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { pending } = useFormStatus();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplash.photos.getRandom({
          collectionIds: ["317099"],
          count: 9,
        });

        if (result && result.response) {
          setImages(result.response as []);
        } else {
          console.error("Failed to load unsplash images");
        }
      } catch (err) {
        console.error("Error while fetching images");
        setImages(defaultImages);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <Loader className="h-6 w-6 animate-spin text-sky-600" />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={cn(
                "cursor-pointer relative group aspect-video hover:opacity-75 transition bg-muted",
                pending && "opacity-50 hover:opacity-45 cursor-auto"
              )}
              onClick={() => {
                if (pending) return;
                setSelectedImage(image.id);
              }}
            >
              <input
                type="radio"
                id={id}
                name={id}
                className="hidden"
                checked={selectedImage === image.id}
                disabled={pending}
                value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
              />
              <Image src={image.urls.thumb} alt="unsplash-img" fill />
              {selectedImage === image.id && (
                <div className="absolute inset-y-0 h-full w-full bg-black/30 flex items-center justify-center ">
                  <Check className="h-6 w-6 text-white" />
                </div>
              )}
              <Link
                href={image.links.html}
                target="_blank"
                className="opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate text-white hover:underline p-1 bg-black/50"
              >
                {image.user.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
