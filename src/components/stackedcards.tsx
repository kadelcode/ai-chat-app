import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useTheme } from "next-themes";

const testimonials = [
  { name: "John Doe", initials: "JD", rating: 5, review: "Great experience!" },
  {
    name: "Paul Jake",
    initials: "PJ",
    rating: 4,
    review: "The AI is incredibly accurate and helpful. I highly recommend it!"
  },
  { name: "Jane Smith", initials: "JS", rating: 4, review: "Loved it!" },
  { name: "Mike Brown", initials: "MB", rating: 4.5, review: "Very useful." },
  {
    name: "Tina Silks",
    initials: "TS",
    rating: 5,
    review: "This app has saved me so much time. It's like having a personal assistant!"
  },
];

const StackedCards = () => {
  const [index, setIndex] = useState(0); // initializes state variable `index`
  const { theme } = useTheme(); // retrieves the current theme

  /**
   * This `useEffect` hook sets up an interval that changes the `index` state
   * every 3 seconds, cycling through the testimonials.
   * The internal is cleared when the component unmounts to prevent memory leaks
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto h-60">
      {/* Animate the mounting and unmounting of components */}
      <AnimatePresence mode="wait">
        {testimonials.map((testimonial, i) => (
          i === index && (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <Card className="p-4 shadow-lg border border-[#e5e7eb] dark:border-[#364153]">
                <CardContent className="flex flex-col items-center text-center space-y-3">
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-full text-white text-lg font-bold"
                    style={{ background: theme === "dark" ? "#333" : "#555" }}
                  >
                    {testimonial.initials}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={18}
                        className={
                          j < Math.floor(testimonial.rating)
                            ? "text-[#efb100]"
                            : "text-gray-300 dark:text-[#4a5556]"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-[#364153] dark:text-[#d1d5dc]">{testimonial.review}</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default StackedCards;
