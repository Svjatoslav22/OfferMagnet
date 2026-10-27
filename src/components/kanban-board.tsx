"use client";

import React, { useTransition } from "react";
import { updateMatchStatus, triggerScanAction } from "../app/actions";
import { formatSalaryWithUsd } from "../services/salary";
import {
  ExternalLink,
  MapPin,
  DollarSign,
  Send,
  XCircle,
  CheckCircle2,
  RotateCcw,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import type { MatchStatus } from "@prisma/client";

export interface KanbanMatchItem {
  id: string;
  score: number;
  status: MatchStatus;
  reason: string | null;
  matchedSkills: string[];
  missingSkills: string[];
  createdAt: Date;
  vacancy: {
    id: string;
    title: string;
    company: string;
    source: string;
    url: string;
    location: string | null;
    salary: string | null;
    postedAt: Date;
  };
}

interface KanbanBoardProps {
  initialMatches: KanbanMatchItem[];
}

const COLUMNS: { id: MatchStatus; title: string; emoji: string; color: string }[] = [
  { id: "NEW", title: "Нові", emoji: "📥", color: "border-blue-500/30 bg-blue-500/5" },
  { id: "SENT", title: "У Telegram", emoji: "📨", color: "border-purple-500/30 bg-purple-500/5" },
  { id: "APPLIED", title: "Відгукнувся", emoji: "🚀", color: "border-emerald-500/30 bg-emerald-500/5" },
  { id: "REJECTED", title: "Відхилені", emoji: "❌", color: "border-zinc-700/50 bg-zinc-900/20" },
];

export function KanbanBoard({ initialMatches }: KanbanBoardProps) {
  const [isPending, startTransition] = useTransition();
  const [isScanning, startScanTransition] = useTransition();

  const handleStatusChange = (matchId: string, newStatus: MatchStatus) => {
    startTransition(async () => {
      await updateMatchStatus(matchId, newStatus);
    });
  };

  const handleManualScan = () => {
    startScanTransition(async () => {
      await triggerScanAction();
    });
  };

  return (
    <div className="space-y-6">
      {/* Кнопка ручного сканування */}
      <div className="flex items-center justify-between pb-2">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Kanban-дошка вакансій</h2>
          <p className="text-sm text-muted-foreground">Керуйте статусами відгуків та аналізуйте пропозиції ШІ</p>
        </div>

        <button
          onClick={handleManualScan}
          disabled={isScanning}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20 transition disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isScanning ? "animate-spin" : ""}`} />
          {isScanning ? "Парсинг та оцінка ШІ..." : "Сканувати ринок зараз"}
        </button>
      </div>

      {/* Колонки Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {COLUMNS.map((col) => {
          const columnMatches = initialMatches.filter((m) => m.status === col.id);

          return (
            <div
              key={col.id}
              className={`flex flex-col rounded-2xl border ${col.color} p-4 min-h-[600px] shadow-sm`}
            >
              {/* Заголовок колонки */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60">
                <div className="flex items-center gap-2 font-semibold">
                  <span>{col.emoji}</span>
                  <span>{col.title}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-muted text-foreground">
                  {columnMatches.length}
                </span>
              </div>

              {/* Список карток */}
              <div className="space-y-3.5 flex-1 overflow-y-auto pr-1">
                {columnMatches.length === 0 ? (
                  <div className="h-40 flex items-center justify-center text-xs text-muted-foreground border border-dashed border-border/60 rounded-xl">
                    Немає вакансій у цьому статусі
                  </div>
                ) : (
                  columnMatches.map((m) => {
                    const scoreColor =
                      m.score >= 80
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                        : m.score >= 50
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                        : "bg-red-500/20 text-red-300 border-red-500/40";

                    return (
                      <div
                        key={m.id}
                        className="bg-card border border-border/80 hover:border-slate-600 p-4 rounded-xl shadow-md transition space-y-3 group"
                      >
                        {/* Верхня плашка: скор + джерело */}
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`px-2 py-0.5 rounded-md text-xs font-bold border ${scoreColor} flex items-center gap-1`}
                          >
                            <Sparkles className="w-3 h-3" />
                            {m.score}/100
                          </span>
                          <span className="text-[11px] font-semibold tracking-wider text-muted-foreground px-2 py-0.5 bg-muted rounded">
                            {m.vacancy.source}
                          </span>
                        </div>

                        {/* Назва та компанія */}
                        <div>
                          <h4 className="font-semibold text-sm leading-snug group-hover:text-primary transition">
                            {m.vacancy.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{m.vacancy.company}</p>
                        </div>

                        {/* Локація та Зарплата */}
                        <div className="space-y-1 text-xs text-muted-foreground">
                          {m.vacancy.salary && (
                            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                              <DollarSign className="w-3.5 h-3.5" />
                              <span>{formatSalaryWithUsd(m.vacancy.salary)}</span>
                            </div>
                          )}
                          {m.vacancy.location && (
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate">{m.vacancy.location}</span>
                            </div>
                          )}
                        </div>

                        {/* Вердикт ШІ */}
                        {m.reason && (
                          <p className="text-xs text-slate-300 bg-muted/50 p-2.5 rounded-lg border border-border/40 italic leading-relaxed">
                            "{m.reason}"
                          </p>
                        )}

                        {/* Скіли (Співпало / Бракує) */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {m.matchedSkills.slice(0, 3).map((s) => (
                            <span
                              key={s}
                              className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40"
                            >
                              ✓ {s}
                            </span>
                          ))}
                          {m.missingSkills.slice(0, 2).map((s) => (
                            <span
                              key={s}
                              className="text-[10px] px-2 py-0.5 rounded bg-red-950/50 text-red-300 border border-red-800/30"
                            >
                              ✗ {s}
                            </span>
                          ))}
                        </div>

                        {/* Кнопки дій */}
                        <div className="pt-2 border-t border-border/60 flex items-center justify-between gap-1">
                          <a
                            href={m.vacancy.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium"
                          >
                            <span>Відкрити</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>

                          <div className="flex items-center gap-1">
                            {col.id !== "APPLIED" && (
                              <button
                                onClick={() => handleStatusChange(m.id, "APPLIED")}
                                disabled={isPending}
                                title="Позначити як Відгукнувся"
                                className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition disabled:opacity-50"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </button>
                            )}

                            {col.id !== "REJECTED" && (
                              <button
                                onClick={() => handleStatusChange(m.id, "REJECTED")}
                                disabled={isPending}
                                title="Відхилити"
                                className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition disabled:opacity-50"
                              >
                                <XCircle className="w-3.5 h-3.5" />
                              </button>
                            )}

                            {col.id !== "NEW" && (
                              <button
                                onClick={() => handleStatusChange(m.id, "NEW")}
                                disabled={isPending}
                                title="Повернути в Нові"
                                className="p-1.5 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition disabled:opacity-50"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
