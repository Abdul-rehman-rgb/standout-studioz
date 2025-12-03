"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white text-[#111418] overflow-x-hidden min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-[#111418] mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#111418] mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Go Home
          </Link>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}