import React from "react";
import { Briefcase, Flame, CheckCircle, TrendingUp, AlertTriangle } from "lucide-react";

interface StatsProps {
  totalVacancies: number;
  highScoreMatches: number;
  appliedCount: number;
  averageScore: number;
  topMissingSkills: { skill: string; count: number }[];
}

export function StatsOverview({
  totalVacancies,
  highScoreMatches,
  appliedCount,
  averageScore,
  topMissingSkills,
}: StatsProps) {
  return (
    <div className="space-y-6">
      {/* Метрики */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border p-5 rounded-2xl shadow-sm hover:border-slate-700 transition">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Усього вакансій</span>
            <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl">
              <Briefcase className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold tracking-tight">{totalVacancies}</span>
            <span className="text-xs text-muted-foreground ml-2">у базі даних</span>
          </div>
        </div>

        <div className="bg-card border border-border p-5 rounded-2xl shadow-sm hover:border-slate-700 transition">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Гарячі матчі (70+)</span>
            <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl">
              <Flame className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold tracking-tight text-amber-400">{highScoreMatches}</span>
            <span className="text-xs text-muted-foreground ml-2">рекомендовані ШІ</span>
          </div>
        </div>

        <div className="bg-card border border-border p-5 rounded-2xl shadow-sm hover:border-slate-700 transition">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Подано відгуків</span>
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold tracking-tight text-emerald-400">{appliedCount}</span>
            <span className="text-xs text-muted-foreground ml-2">в роботі</span>
          </div>
        </div>

        <div className="bg-card border border-border p-5 rounded-2xl shadow-sm hover:border-slate-700 transition">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Середній Score</span>
            <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-xl">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold tracking-tight">{averageScore}</span>
            <span className="text-xs text-muted-foreground ml-1">/ 100</span>
          </div>
        </div>
      </div>

      {/* Аналітика: Чого найбільше бракує на ринку */}
      {topMissingSkills.length > 0 && (
        <div className="bg-card border border-border p-5 rounded-2xl">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Market Skill Gap (Що найчастіше вимагають у вакансіях, але немає у вашому профілі)
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {topMissingSkills.map(({ skill, count }) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-red-950/40 text-red-300 border border-red-800/30"
              >
                {skill}
                <span className="px-1.5 py-0.2 bg-red-900/60 rounded text-[10px] text-red-200">
                  {count}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
