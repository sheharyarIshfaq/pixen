"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Download, ImageIcon, Loader2, LogIn, SendIcon } from "lucide-react";
import { Label } from "../ui/label";
import { useAuth, SignInButton } from "@clerk/nextjs";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { isSignedIn } = useAuth();

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      toast.error("Please enter a description for your image");
      return;
    }

    // Only proceed if user is signed in
    if (!isSignedIn) {
      return toast.error("Please sign in to generate images");
    }

    setLoading(true);
    setImageUrl("");

    try {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate image");
      }

      const data = await res.json();
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
        toast.success("Image generated successfully");
      } else {
        throw new Error("No image URL returned");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!imageUrl) return;

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `generated-image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Image downloaded successfully");
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto px-4")}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="prompt"
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            Describe your image
          </Label>
          <Textarea
            id="prompt"
            value={prompt}
            onChange={handlePromptChange}
            placeholder="A futuristic cityscape at sunset with flying cars..."
            className="min-h-32 resize-none bg-white dark:bg-black focus-ring text-base border-purple-300 focus:border-purple-500"
            disabled={loading}
          />
        </div>

        {isSignedIn ? (
          <Button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="cursor-pointer w-full py-6 text-base font-medium transition-all bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
          >
            <SendIcon className="mr-2 h-5 w-5" />
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Image"
            )}
          </Button>
        ) : (
          <SignInButton mode="modal">
            <Button
              type="button"
              className="cursor-pointer w-full py-6 text-base font-medium transition-all bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Sign In to Generate
            </Button>
          </SignInButton>
        )}
      </form>

      <div className="mt-12 space-y-6">
        {imageUrl ? (
          <div className="animate-fade-in space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-purple-200 bg-card shadow-lg">
              <img
                src={imageUrl}
                alt="Generated image"
                className="w-full object-contain max-h-[600px]"
                loading="lazy"
              />
              <Button
                onClick={handleDownload}
                className="absolute bottom-4 right-4 p-2 h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white backdrop-blur-sm hover:bg-pink-600 transition-all shadow-lg"
                aria-label="Download image"
              >
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </div>
        ) : (
          !loading && (
            <div className="flex flex-col items-center justify-center py-16 border border-dashed border-purple-300 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
              <ImageIcon
                className="h-12 w-12 text-purple-400 mb-4"
                strokeWidth={1.25}
              />
              <p className="text-purple-600 text-center max-w-xs">
                {isSignedIn 
                  ? "Your generated image will appear here" 
                  : "Sign in to generate images"}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
