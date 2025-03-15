import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageGenerator from "@/components/ImageGenerator";

export const metadata: Metadata = {
  title: "Pixen - Transform Words Into Stunning Visuals",
  description: "Use AI to generate beautiful images from text descriptions. Simply describe what you want to see, and watch as our AI brings your imagination to life.",
  alternates: {
    canonical: "https://pixen.vercel.app",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 via-white to-pink-50 mx-auto">
      <Header />

      <main className="flex-1 w-full">
        <section className="py-16 md:py-24">
          <div className="container px-8 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 animate-slide-up">
              <p className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                AI-Powered Image Generation
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Transform Your Words Into Stunning Visuals
              </h1>
              <p className="text-xl text-purple-700">
                Simply describe what you want to see, and watch as our AI brings
                your imagination to life.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm dark:bg-black/80 rounded-xl p-6 md:p-8 animate-fade-in bg-opacity-80 shadow-xl border border-purple-100">
              <ImageGenerator />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <div className="container px-8 mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 animate-slide-up text-white shadow-lg border border-white/20"
                style={{ animationDelay: "100ms" }}
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-white/30 mb-4">
                  <span className="text-xl font-semibold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Describe</h3>
                <p className="text-white text-opacity-90">
                  Enter a detailed description of the image you want to create.
                </p>
              </div>

              <div
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 animate-slide-up text-white shadow-lg border border-white/20"
                style={{ animationDelay: "200ms" }}
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-white/30 mb-4">
                  <span className="text-xl font-semibold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Generate</h3>
                <p className="text-white text-opacity-90">
                  Our AI transforms your description into a unique, high-quality
                  image.
                </p>
              </div>

              <div
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 animate-slide-up text-white shadow-lg border border-white/20"
                style={{ animationDelay: "300ms" }}
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-white/30 mb-4">
                  <span className="text-xl font-semibold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Download</h3>
                <p className="text-white text-opacity-90">
                  Save your creation with a single click and use it anywhere you
                  want.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
