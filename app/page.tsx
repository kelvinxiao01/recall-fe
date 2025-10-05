"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home()
{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden relative">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-sm relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <h1 className="text-2xl font-bold text-blue-900">Recall</h1>
            </motion.div>
            <div className="flex gap-4">
              <Link
                href="/auth"
                className="px-4 py-2 text-blue-900 hover:text-blue-700 font-medium transition-colors"
              >
                Sign In
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/auth"
                  className="inline-block px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Never Miss a Call Again
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            AI-powered callback system that automatically calls back your customers when you&apos;re unavailable.
            Schedule, manage, and track all your callbacks in one place.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/auth"
              className="inline-block px-8 py-4 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg"
            >
              Start Free Trial
            </Link>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.0 }}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            className="bg-white p-8 rounded-xl shadow-md cursor-pointer transition-shadow duration-500"
          >
            <motion.div
              className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center mb-4"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Automated Callbacks</h3>
            <p className="text-gray-600">
              AI assistant automatically calls back customers and gathers important information when you&apos;re busy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.0 }}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            className="bg-white p-8 rounded-xl shadow-md cursor-pointer transition-shadow duration-500"
          >
            <motion.div
              className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center mb-4"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Smart Scheduling</h3>
            <p className="text-gray-600">
              Customers can schedule callbacks at their preferred time with seamless Google Calendar integration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.0 }}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            className="bg-white p-8 rounded-xl shadow-md cursor-pointer transition-shadow duration-500"
          >
            <motion.div
              className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center mb-4"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Detailed Analytics</h3>
            <p className="text-gray-600">
              Track call times, customer information, and insights from every callback in your dashboard.
            </p>
          </motion.div>
        </div>

        {/* Stats Section - New */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 bg-white rounded-2xl shadow-xl p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">1k+</div>
              <div className="text-gray-600">Callbacks Handled</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Always Available</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">&lt;5s</div>
              <div className="text-gray-600">Avg Response Time</div>
            </motion.div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            How It Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              className="text-center px-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                className="w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                1
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Missed Call</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                When a customer calls and you&apos;re unavailable, our system instantly detects the missed call and prepares to reach out on your behalf.
              </p>
            </motion.div>
            <motion.div
              className="text-center px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                2
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">AI Callback</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our AI assistant calls the customer back, gathers their information, understands their needs, and schedules a convenient callback time.
              </p>
            </motion.div>
            <motion.div
              className="text-center px-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                3
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">You Connect</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Review all the details in your dashboard, add the appointment to your calendar, and call your customer at the scheduled time fully prepared.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Banner - New */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of businesses already using Recall</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/auth"
              className="inline-block px-8 py-4 bg-white text-blue-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-24 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2025 Recall. Never miss a customer again.</p>
        </div>
      </footer>
    </div>
  );
}
