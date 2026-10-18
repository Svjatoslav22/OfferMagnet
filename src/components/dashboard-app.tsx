"use client";

import React, { useState, useTransition } from "react";
import {
  ScanSearch,
  LayoutDashboard,
  KanbanSquare,
  Send,
  Settings,
  X,
  Menu,
  Briefcase,
  Zap,
  CheckCircle2,
  BarChart3,
  Building2,
  MapPin,
  Banknote,
  ExternalLink,
  RotateCcw,
  Check,
  RefreshCw,
  XCircle,
  Sliders,
  DollarSign,
} from "lucide-react";
import {
  updateMatchStatus,
  triggerScanAction,
  updateProfileSettingsAction,
} from "../app/actions";
import type { MatchStatus } from "@prisma/client";

export interface DashboardJob {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  source: string;
  status: MatchStatus;
  score: number;
  explanation: string;
  matchedSkills: string[];
  missingSkills: string[];
  url: string;
}

export interface DashboardProfile {
  level: string;
  keywords: string[];
  location: string;
  minSalary: number | null;
  maxSalary: number | null;
}

interface DashboardAppProps {
  initialJobs: DashboardJob[];
  initialProfile: DashboardProfile;
  telegramUsername?: string;
}

export function DashboardApp({
  initialJobs,
  initialProfile,
  telegramUsername = "offermagnet_dev_bot",
}: DashboardAppProps) {
  const [activeTab, setActiveTab] = useState<"dashboard" | "kanban" | "telegram" | "settings">("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [jobs, setJobs] = useState<DashboardJob[]>(initialJobs);
  const [profile, setProfile] = useState<DashboardProfile>(initialProfile);

  const [isScanning, startScanTransition] = useTransition();
  const [isUpdatingStatus, startStatusTransition] = useTransition();
  const [isSavingSettings, startSettingsTransition] = useTransition();

  // Settings form local state
  const [level, setLevel] = useState(profile.level);
  const [keywordsInput, setKeywordsInput] = useState(profile.keywords.join(", "));
  const [locationInput, setLocationInput] = useState(profile.location);
  const [minSalaryInput, setMinSalaryInput] = useState(profile.minSalary?.toString() || "350");
  const [maxSalaryInput, setMaxSalaryInput] = useState(profile.maxSalary?.toString() || "700");
  const [settingsSavedMessage, setSettingsSavedMessage] = useState(false);

  // Sync state if server revalidates
  React.useEffect(() => {
    setJobs(initialJobs);
  }, [initialJobs]);

  // Statistics calculation
  const totalJobs = jobs.length;
  const highMatches = jobs.filter((j) => j.score >= 80).length;
  const appliedCount = jobs.filter((j) => j.status === "APPLIED").length;
  const avgScore = totalJobs
    ? Math.round(jobs.reduce((acc, j) => acc + j.score, 0) / totalJobs)
    : 0;

  // Missing skills aggregation
  const missingSkillsMap = new Map<string, number>();
  jobs.forEach((j) => {
    j.missingSkills.forEach((skill) => {
      const clean = skill.trim();
      if (!clean) return;
      missingSkillsMap.set(clean, (missingSkillsMap.get(clean) || 0) + 1);
    });
  });

  const missingSkillsList = Array.from(missingSkillsMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Actions
  const handleStatusChange = (jobId: string, newStatus: MatchStatus) => {
    // Optimistic UI update
    setJobs((prev) =>
      prev.map((j) => (j.id === jobId ? { ...j, status: newStatus } : j))
    );

    startStatusTransition(async () => {
      await updateMatchStatus(jobId, newStatus);
    });
  };

  const handleScan = () => {
    startScanTransition(async () => {
      await triggerScanAction();
    });
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedKeywords = keywordsInput
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);
    const minSalary = parseInt(minSalaryInput, 10) || null;
    const maxSalary = parseInt(maxSalaryInput, 10) || null;

    startSettingsTransition(async () => {
      const res = await updateProfileSettingsAction({
        level,
        keywords: parsedKeywords,
        location: locationInput,
        minSalary,
        maxSalary,
      });

      if (res.success) {
        setProfile({
          level,
          keywords: parsedKeywords,
          location: locationInput,
          minSalary,
          maxSalary,
        });
        setSettingsSavedMessage(true);
        setTimeout(() => setSettingsSavedMessage(false), 3000);
      }
    });
  };

  // Reusable Job Card Component
  const renderJobCard = (job: DashboardJob) => {
    let scoreBadgeColor = "bg-green-100 text-green-700";
    if (job.score < 80 && job.score >= 60) scoreBadgeColor = "bg-yellow-100 text-yellow-700";
    if (job.score < 60) scoreBadgeColor = "bg-red-100 text-red-700";

    return (
      <div
        key={job.id}
        className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col gap-3 group"
      >
        <div className="flex justify-between items-start gap-2">
          <h4 className="font-semibold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
            {job.title}
          </h4>
          <div className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center shadow-sm shrink-0 ${scoreBadgeColor}`}>
            <Zap className="w-3.5 h-3.5 mr-1" />
            {job.score}%
          </div>
        </div>

        <div className="flex flex-col gap-1.5 text-sm text-slate-600">
          <div className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-medium text-slate-700">{job.company}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center justify-between text-xs mt-0.5">
            <div className="flex items-center gap-1.5 font-medium text-slate-800">
              <Banknote className="w-3.5 h-3.5 text-slate-400" />
              <span>{job.salary}</span>
            </div>
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-blue-600 hover:underline bg-blue-50 px-2 py-0.5 rounded font-medium"
            >
              {job.source}
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>

        {job.explanation && (
          <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-700 border border-slate-100 leading-relaxed">
            <span className="font-semibold text-slate-900 block mb-1">AI Verdict:</span>
            {job.explanation}
          </div>
        )}

        <div className="flex flex-wrap gap-1 mt-1">
          {job.matchedSkills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 bg-green-50 text-green-700 border border-green-200 text-[11px] rounded-md font-medium"
            >
              ✓ {skill}
            </span>
          ))}
          {job.missingSkills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 bg-red-50 text-red-700 border border-red-200 text-[11px] rounded-md font-medium"
            >
              -{skill}
            </span>
          ))}
        </div>

        {/* Quick status toggle footer */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
            {job.status === "NEW" ? "Нова" : job.status === "SENT" ? "У Telegram" : job.status === "APPLIED" ? "Відгукнувся" : "Відхилено"}
          </span>

          <div className="flex items-center gap-1">
            {job.status !== "APPLIED" && (
              <button
                onClick={() => handleStatusChange(job.id, "APPLIED")}
                disabled={isUpdatingStatus}
                title="Позначити як Відгукнувся"
                className="p-1 px-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-medium transition flex items-center gap-1"
              >
                <Check className="w-3 h-3" />
                <span>Відгук</span>
              </button>
            )}

            {job.status !== "REJECTED" && (
              <button
                onClick={() => handleStatusChange(job.id, "REJECTED")}
                disabled={isUpdatingStatus}
                title="Відхилити"
                className="p-1 px-2 rounded-lg bg-slate-50 text-slate-500 hover:bg-red-50 hover:text-red-600 border border-slate-200 font-medium transition flex items-center gap-1"
              >
                <XCircle className="w-3 h-3" />
              </button>
            )}

            {job.status !== "NEW" && (
              <button
                onClick={() => handleStatusChange(job.id, "NEW")}
                disabled={isUpdatingStatus}
                title="Повернути в Нові"
                className="p-1 px-2 rounded-lg bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200 transition"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const TABS = [
    { id: "dashboard" as const, label: "Dashboard", icon: LayoutDashboard },
    { id: "kanban" as const, label: "Kanban Board", icon: KanbanSquare },
    { id: "telegram" as const, label: "Telegram Sync", icon: Send },
    { id: "settings" as const, label: "Profile Settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 flex items-center justify-between lg:justify-start">
          <div className="flex items-center gap-2 text-blue-600">
            <ScanSearch className="w-7 h-7 text-blue-600 stroke-[2.5px]" />
            <span className="text-xl font-black tracking-tight text-slate-900">
              Offer<span className="text-blue-600">Magnet</span>
            </span>
          </div>
          <button
            className="lg:hidden text-slate-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1.5">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
                  active
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? "text-blue-600" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Card in Sidebar */}
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-sm">
              OM
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900 truncate">Candidate</p>
              <p className="text-xs text-slate-500 truncate">{profile.level} Developer</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ScanSearch className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-bold text-slate-900">OfferMagnet</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-slate-600 hover:text-slate-900"
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* View Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto h-full">
            {/* TAB 1: DASHBOARD */}
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900">Welcome to OfferMagnet! 👋</h1>
                    <p className="text-slate-500 mt-1">Here is what your autonomous AI Agent found for you today.</p>
                  </div>
                  <button
                    onClick={handleScan}
                    disabled={isScanning}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-sm transition-all disabled:opacity-50"
                  >
                    <RefreshCw className={`w-5 h-5 ${isScanning ? "animate-spin" : ""}`} />
                    <span>{isScanning ? "Scanning DOU & Djinni..." : "Scan Jobs Now"}</span>
                  </button>
                </div>

                {/* StatCards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">Total Jobs Scanned</p>
                      <h3 className="text-2xl font-bold text-slate-900">{totalJobs}</h3>
                      <p className="text-sm text-green-600 mt-2">DOU + Djinni</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                      <Briefcase className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">High Matches (&gt;80%)</p>
                      <h3 className="text-2xl font-bold text-slate-900">{highMatches}</h3>
                      <p className="text-sm text-amber-600 mt-2">Recommended by AI</p>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                      <Zap className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">Applied</p>
                      <h3 className="text-2xl font-bold text-slate-900">{appliedCount}</h3>
                      <p className="text-sm text-emerald-600 mt-2">In Progress</p>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">Average Match Score</p>
                      <h3 className="text-2xl font-bold text-slate-900">{avgScore}%</h3>
                      <p className="text-sm text-slate-400 mt-2">Based on Gemini AI</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* High Matches + Top Missing Skills */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-bold text-slate-900">Recent High Matches</h2>
                      <button
                        onClick={() => setActiveTab("kanban")}
                        className="text-sm text-blue-600 font-medium hover:underline"
                      >
                        View Full Kanban
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {jobs
                        .filter((j) => j.score >= 50)
                        .slice(0, 4)
                        .map(renderJobCard)}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-lg font-bold text-slate-900">Top Missing Skills</h2>
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                      <p className="text-sm text-slate-500 mb-4">
                        Consider learning these skills to increase your match rate for top positions.
                      </p>
                      <div className="space-y-3">
                        {missingSkillsList.length === 0 ? (
                          <p className="text-xs text-slate-400">All key skills matched!</p>
                        ) : (
                          missingSkillsList.map((skill, idx) => (
                            <div key={skill.name} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">
                                  #{idx + 1}
                                </div>
                                <span className="font-medium text-slate-700">{skill.name}</span>
                              </div>
                              <span className="text-sm text-slate-400 font-medium">{skill.count} jobs</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: KANBAN BOARD */}
            {activeTab === "kanban" && (
              <div className="h-full flex flex-col">
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900">Kanban Board</h1>
                    <p className="text-slate-500 mt-1">Track and manage your job applications across platforms.</p>
                  </div>
                  <button
                    onClick={handleScan}
                    disabled={isScanning}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm transition disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${isScanning ? "animate-spin" : ""}`} />
                    <span>{isScanning ? "Scanning..." : "Scan Jobs"}</span>
                  </button>
                </div>

                <div className="flex-1 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                  <div className="flex gap-6 h-full min-w-max">
                    {(
                      [
                        { id: "NEW", title: "New Jobs" },
                        { id: "SENT", title: "Sent to Telegram" },
                        { id: "APPLIED", title: "Applied" },
                        { id: "REJECTED", title: "Rejected" },
                      ] as const
                    ).map((col) => {
                      const columnJobs = jobs.filter((j) => j.status === col.id);
                      return (
                        <div
                          key={col.id}
                          className="w-80 flex flex-col bg-slate-100/60 rounded-xl border border-slate-200 shadow-sm"
                        >
                          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-100 rounded-t-xl">
                            <h3 className="font-semibold text-slate-800 text-sm">{col.title}</h3>
                            <span className="bg-white px-2 py-0.5 rounded text-xs font-bold text-slate-600 shadow-sm">
                              {columnJobs.length}
                            </span>
                          </div>
                          <div className="flex-1 p-3 overflow-y-auto space-y-3">
                            {columnJobs.length > 0 ? (
                              columnJobs.map(renderJobCard)
                            ) : (
                              <div className="h-24 flex items-center justify-center text-slate-400 text-xs border-2 border-dashed border-slate-200 rounded-lg">
                                No jobs in this column
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: TELEGRAM SYNC */}
            {activeTab === "telegram" && (
              <div className="max-w-2xl mx-auto py-12 text-center space-y-6">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-blue-500 shadow-sm">
                  <Send className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Telegram Sync</h2>
                  <p className="text-slate-500 mt-2 max-w-md mx-auto">
                    Connect OfferMagnet bot to receive instant alerts for high-matching jobs (70+) and manage applications directly from Telegram.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-left space-y-4 max-w-md mx-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">Bot Username:</span>
                    <span className="text-sm font-bold text-blue-600">@{telegramUsername}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">Status:</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Online & Listening
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">Scheduler (CRON):</span>
                    <span className="text-xs font-medium text-slate-500">Every 2 Hours (Auto)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://t.me/${telegramUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white px-8 py-3.5 rounded-xl font-medium shadow-md transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    <span>Open @{telegramUsername} in Telegram</span>
                  </a>
                </div>

                <div className="text-xs text-slate-400 max-w-md mx-auto pt-4 border-t border-slate-200">
                  Available Commands: <code className="bg-slate-100 px-1 py-0.5 rounded">/scan</code>,{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded">/matches</code>,{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded">/profile</code>,{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded">/setsalary</code>,{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded">/setskills</code>
                </div>
              </div>
            )}

            {/* TAB 4: PROFILE SETTINGS */}
            {activeTab === "settings" && (
              <div className="max-w-2xl mx-auto py-8">
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-slate-900">Profile Settings</h1>
                  <p className="text-slate-500 mt-1">
                    Manage your target roles, desired salary, and update your skill matrix to improve AI matching.
                  </p>
                </div>

                <form
                  onSubmit={handleSaveSettings}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6"
                >
                  {settingsSavedMessage && (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-xl flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>Налаштування профілю успішно збережено в базі!</span>
                    </div>
                  )}

                  {/* Seniority Level */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">Seniority Level</label>
                    <div className="grid grid-cols-3 gap-3">
                      {(["Junior", "Middle", "Senior"] as const).map((l) => (
                        <button
                          key={l}
                          type="button"
                          onClick={() => setLevel(l)}
                          className={`py-2.5 rounded-xl text-sm font-medium border transition ${
                            level === l
                              ? "bg-blue-50 border-blue-600 text-blue-600 font-semibold"
                              : "border-slate-200 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          {level === l ? `✓ ${l}` : l}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Skills / Keywords */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Key Skills / Stack (comma separated)
                    </label>
                    <input
                      type="text"
                      value={keywordsInput}
                      onChange={(e) => setKeywordsInput(e.target.value)}
                      placeholder="e.g. TypeScript, React, Node.js, Next.js"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Desired Salary */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Desired Salary in $ (Min - Max)
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-slate-400 font-medium">$</span>
                        <input
                          type="number"
                          value={minSalaryInput}
                          onChange={(e) => setMinSalaryInput(e.target.value)}
                          placeholder="Min (e.g. 350)"
                          className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-slate-400 font-medium">$</span>
                        <input
                          type="number"
                          value={maxSalaryInput}
                          onChange={(e) => setMaxSalaryInput(e.target.value)}
                          placeholder="Max (e.g. 700)"
                          className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5">
                      Наприклад: віддалено від $350, гібрид/офіс у Львові від $400.
                    </p>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">Target Location / Format</label>
                    <input
                      type="text"
                      value={locationInput}
                      onChange={(e) => setLocationInput(e.target.value)}
                      placeholder="e.g. Remote / Львів"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSavingSettings}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium shadow-sm transition disabled:opacity-50"
                  >
                    {isSavingSettings ? "Saving Settings..." : "Save Profile Settings"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
