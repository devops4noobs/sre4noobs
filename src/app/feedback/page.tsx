"use client";
import { FaStar, FaComment, FaPaperPlane } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

interface FeedbackFormData {
  message: string;
  rating: number;
  name?: string;
  email?: string;
}

export default function FeedbackPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [rating, setRating] = useState<number>(0); // Tracks selected star rating
  const [hoverRating, setHoverRating] = useState<number>(0); // Tracks hover state for stars
  const controls = useAnimation();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FeedbackFormData>({
    defaultValues: {
      message: '',
      rating: 0,
      name: '',
      email: '',
    },
  });

  const onSubmit = (data: FeedbackFormData) => {
    // Log feedback to console (extendable for backend integration)
    console.log("Feedback Submitted:", { ...data, rating });
    // Simulate a thank-you message (could be a modal or toast in a real app)
    alert("Thank you for your feedback!");
  };

  // Trigger animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const insightsSection = document.getElementById("insights");
      if (insightsSection && window.scrollY + window.innerHeight > insightsSection.offsetTop) {
        controls.start({ opacity: 1, y: 0 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Animation variants for cards
  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };

  // Handle star rating click
  const handleStarClick = (value: number) => {
    setRating(value);
    setValue("rating", value); // Update form value
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 inset-0 opacity-10">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: "15%", left: "25%" }}></div>
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ top: "40%", left: "75%" }}></div>
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: "70%", left: "35%" }}></div>
      </div>

      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-12 shadow-lg transform perspective-1000 hover:rotate-x-2 transition-all duration-500 text-center"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-xl">
              Share Your Feedback
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Help Us Improve Our SRE Tools
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your feedback helps us build better, more reliable systems
          </motion.p>
        </motion.section>

        {/* Feedback Form Card */}
        <motion.div
          id="insights"
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("form")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">
            <FaComment className="inline mr-2" /> Provide Your Feedback
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-white">
            {/* Feedback Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-indigo-100">
                Feedback Message <span className="text-purple-400">*</span>
              </label>
              <textarea
                id="message"
                aria-describedby="message-error"
                {...register('message', { required: 'Feedback message is required' })}
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
                rows={4}
                placeholder="Tell us what you think about our SRE tools or suggest improvements."
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-400">{errors.message.message}</p>
              )}
            </div>

            {/* Star Rating */}
            <div>
              <label className="block text-sm font-medium mb-1 text-indigo-100">
                Rating <span className="text-purple-400">*</span>
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer text-2xl ${
                      star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-500"
                    }`}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                  />
                ))}
              </div>
              <input
                type="hidden"
                {...register('rating', { required: 'Rating is required', min: { value: 1, message: 'Please select a rating' } })}
              />
              {errors.rating && (
                <p id="rating-error" className="mt-1 text-sm text-red-400">{errors.rating.message}</p>
              )}
            </div>

            {/* Name (Optional) */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-indigo-100">
                Name (Optional)
              </label>
              <input
                id="name"
                {...register('name')}
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
                placeholder="Your name"
              />
            </div>

            {/* Email (Optional) */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-indigo-100">
                Email (Optional)
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
                placeholder="Your email"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 mt-6 flex items-center justify-center"
            >
              <FaPaperPlane className="mr-2" /> Submit Feedback
            </button>
          </form>
          {hoveredSection === "form" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-4 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Share your thoughts to help us grow!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-8 text-center">
          Last updated: July 29, 2025, 6:56 PM EEST
        </p>
      </main>
    </div>
  );
}