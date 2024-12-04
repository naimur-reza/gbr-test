"use client";

import { Book, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function InfoSection() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="section-title">
            What is <span className="text-red-600">Get Books Reviewed</span>?
          </h2>
          <p className="max-w-3xl mx-auto section-subtitle">
            A private Book Review Club that provides Authors with visibility &
            credibility by providing thoughtful Kindle & Paperback reviews
            submitted by other authors with like-minded goals.
          </p>

          {/* Decorative Separator */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="w-3 h-3 rotate-45 border border-red-600"></div>
            <div className="w-3 h-3 rotate-45 bg-red-600"></div>
            <div className="w-3 h-3 rotate-45 border border-red-600"></div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-6 relative">
          {/* Connector */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Left Card */}
          <Card className="group bg-primary text-white border-none overflow-hidden">
            <CardContent className="p-8 space-y-6">
              <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Book className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">What is this site?</h3>
              <p className="text-white/90 leading-relaxed">
                A supportive private community of authors who understand your
                challenges. Our members are dedicated to providing and receiving
                high-quality reviews for deserving books. With a monthly or
                yearly membership, you'll gain access to a network of
                like-minded writers eager to support your exceptional work.
              </p>
            </CardContent>
          </Card>

          {/* Right Card */}
          <Card className="group bg-gray-900 text-white border-none overflow-hidden">
            <CardContent className="p-8 space-y-6">
              <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Who is this good for?</h3>
              <p className="text-white/90 leading-relaxed">
                Our club is for authors who want to receive ethical and honest
                reviews for their books while complying with Amazon Community
                Guidelines. Authors with high-caliber, copyedited, and proofread
                books get great reviews from other authors in our network.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
