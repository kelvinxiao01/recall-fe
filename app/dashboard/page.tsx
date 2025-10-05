"use client";

import { useState } from "react";
import Link from "next/link";

interface CallLog {
  id: number;
  callerName: string;
  callerPhone: string;
  scheduledTime: string;
  status: "pending" | "completed" | "missed";
  summary: string;
  duration?: string;
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"all" | "pending" | "completed">("all");

  // Mock data - will be replaced with actual API calls
  const mockCallLogs: CallLog[] = [
    {
      id: 1,
      callerName: "John Smith",
      callerPhone: "+1 (555) 123-4567",
      scheduledTime: "2025-10-05T14:00:00",
      status: "pending",
      summary: "Interested in premium package. Wants to discuss pricing options.",
    },
    {
      id: 2,
      callerName: "Sarah Johnson",
      callerPhone: "+1 (555) 987-6543",
      scheduledTime: "2025-10-05T16:30:00",
      status: "pending",
      summary: "Follow-up call regarding previous order. Has questions about delivery.",
    },
    {
      id: 3,
      callerName: "Mike Wilson",
      callerPhone: "+1 (555) 456-7890",
      scheduledTime: "2025-10-04T10:00:00",
      status: "completed",
      summary: "Requested technical support for product installation.",
      duration: "15 min",
    },
    {
      id: 4,
      callerName: "Emily Davis",
      callerPhone: "+1 (555) 321-0987",
      scheduledTime: "2025-10-04T13:00:00",
      status: "completed",
      summary: "New customer inquiry about services. Wants product demonstration.",
      duration: "22 min",
    },
  ];

  const filteredCalls = mockCallLogs.filter((call) => {
    if (activeTab === "all") return true;
    return call.status === activeTab;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "missed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleAddToCalendar = (call: CallLog) => {
    const startDate = new Date(call.scheduledTime);
    const endDate = new Date(startDate.getTime() + 30 * 60000); // 30 min duration

    const formatGoogleDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
    };

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Callback: ${encodeURIComponent(
      call.callerName
    )}&dates=${formatGoogleDate(startDate)}/${formatGoogleDate(
      endDate
    )}&details=${encodeURIComponent(
      call.summary + "\\n\\nPhone: " + call.callerPhone
    )}&location=${encodeURIComponent(call.callerPhone)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-blue-900">
                Recall
              </Link>
              <div className="hidden md:flex gap-6">
                <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">
                  Dashboard
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Settings
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Analytics
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold">
                  U
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Callbacks</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {mockCallLogs.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600 mt-1">
                  {mockCallLogs.filter((c) => c.status === "pending").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600 mt-1">
                  {mockCallLogs.filter((c) => c.status === "completed").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Duration</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">18 min</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Calls Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Recent Callbacks</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "all"
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab("pending")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "pending"
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Pending
                </button>
                <button
                  onClick={() => setActiveTab("completed")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "completed"
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredCalls.map((call) => (
              <div key={call.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {call.callerName}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          call.status
                        )}`}
                      >
                        {call.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{call.callerPhone}</p>
                    <p className="text-gray-700 mb-3">{call.summary}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {formatDate(call.scheduledTime)}
                      </div>
                      {call.duration && (
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {call.duration}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {call.status === "pending" && (
                      <button
                        onClick={() => handleAddToCalendar(call)}
                        className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        Add to Calendar
                      </button>
                    )}
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
