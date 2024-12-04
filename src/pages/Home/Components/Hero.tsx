import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets } from "@/assets";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${assets.readingBook})`,
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/60 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 ">
        <div className="space-y-8">
          {/* Headline Section */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
              Get{" "}
              <span className="text-primary">
                Book
                <br />
                Reviews
              </span>{" "}
              for
            </h1>
            <img
              src={assets.amazonLogo}
              alt="Amazon.com Logo"
              className="h-12 w-auto"
            />
          </div>

          <img src={assets.stars} alt="Stars" className="w-44" />

          <h2 className="text-2xl sm:text-3xl font-semibold">
            A Book Review Site for
            <br />
            Like-Minded Authors and Reviewers
          </h2>

          {/* Review Count Section */}
          <div className="inline-flex items-center bg-white bg-opacity-70 rounded-full px-6 py-2 shadow-lg border gap-3">
            <img src={assets.peopleGroup} width={80} alt="people" />{" "}
            <div>
              <span className="font-bold text-xl text-gray-900">125K+</span>
              <span className="ml-1 text-gray-600">Reviews</span>
            </div>
          </div>

          <br />

          {/* Call to Action Button */}
          <Button className=" text-white px-8 py-6 text-lg rounded-full">
            <div className="relative flex items-center">
              <span className="mr-2">WATCH THE VIDEO & SEE HOW IT WORKS</span>
              <Play className="w-4 h-4 fill-current" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
