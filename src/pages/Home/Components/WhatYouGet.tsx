import { Users, Upload, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhatYouGet = () => {
  const features = [
    {
      icon: Users,
      title: "Community Access",
      description:
        "This membership community gives you the opportunity to discover and read large variety of interesting books by like-minded authors desiring book reviews. All books are published into a central library, separated by category. Use our free trial to publish your book today and find other authors who are interested in reviewing your book.",
      gradient: "from-blue-500/10 to-purple-500/10",
    },
    {
      icon: Upload,
      title: "Unlimited Submissions",
      description:
        "As an author, you can submit as many books as you like to the reader's club for one set monthly or annual membership fee.",
      gradient: "from-red-500/10 to-orange-500/10",
    },
    {
      icon: Star,
      title: "Fair Review System",
      description:
        "You are NOT paying for NOR swapping book reviews. Your membership fee gives you access to a reading club with a vast, everchanging selection of books. Our algorithm ensures that authors do not directly review eachother's books. In other words, once an author reviews your book you'll no longer be able to see their books in the library, so review swapping is not possible.",
      gradient: "from-green-500/10 to-emerald-500/10",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <Sparkles className="w-8 h-8 text-primary absolute -top-8 left-1/2 -translate-x-1/2" />
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            What You <span className="text-primary">Get</span>...
          </h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 overflow-hidden border-none bg-gradient-to-br ${feature.gradient}`}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
