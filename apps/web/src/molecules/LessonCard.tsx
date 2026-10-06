import { ConfigLessonSidebar } from "@/config/configHome"
import { Card, CardContent } from "@workspace/ui/components/card"
import SidebarItemMolecules from "./moleculesSidebar"
import { Lightbulb, Trophy, Zap } from "lucide-react"
export default function LessonCard() {
  return (
    <div className="relative mx-auto w-full max-w-2xl px-4 pb-10 md:px-0">
      <Card className="gap-0 overflow-visible rounded-3xl border border-slate-200 bg-white py-0 shadow-xl shadow-violet-100/60">
        {/*Windows Header*/}
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-300" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
            <span className="ml-3 hidden text-xs font-semibold text-slate-400 md:block">
              learnloop / javascript
            </span>
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold tracking-wide text-emerald-600 uppercase">
            In Progress
          </span>
        </div>

        <CardContent className="flex gap-6 px-6 pb-6">
          {/* Sidebar */}
          <aside className="hidden w-48 shrink-0 rounded-2xl bg-slate-50 p-4 md:block">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 flex-col justify-center rounded-full bg-yellow-200 text-center text-xs font-bold text-yellow-700">
                JS
              </span>
              <span className="text-sm font-bold text-slate-900">
                Javascript
              </span>
            </div>
            <p className="mt-6 mb-2 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              Fundamentals
            </p>
            <ul className="space-y-1">
              {ConfigLessonSidebar.map((item) => (
                <SidebarItemMolecules
                  key={item.id}
                  label={item.label}
                  status={item.status}
                />
              ))}
            </ul>
          </aside>

          <section className="min-w-0 flex-1 space-y-4">
            <div className="flex flex-col items-start justify-between gap-4">
              <div className="flex w-full flex-row justify-between">
                <div>
                  <p className="text-[11px] font-bold tracking-wide text-violet-600 uppercase">
                    Lesson 03 · 8 min
                  </p>
                  <h2 className="mt-1.5 text-xl font-bold text-slate-900">
                    Javascript Variables
                  </h2>
                </div>
                <div className="shrink-0 text-right">
                  <p className="flex items-center justify-end gap-1 text-sm font-bold text-amber-500">
                    <Zap size={14} className="fill-amber-500" />
                    +20 XP
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    3 of 10 Compelete
                  </p>
                </div>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-40 rounded-full bg-violet-600" />
              </div>

              <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
                <div className="flex items-center gap-2 text-violet-700">
                  <Lightbulb size={16} />
                  <p className="text-sm font-semibold">Think of it like this</p>
                </div>
                <p className="mt-3 text-base leading-relaxed text-slate-800">
                  A variable is like a labeled box. The label tells you where to
                  find something, while the value is the thing stored inside.
                </p>

                <div className="mt-4 rounded-lg bg-white px-4 py-2.5 font-mono text-sm">
                  <span className="text-blue-600">let</span>{" "}
                  <span className="text-slate-800">age</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-orange-500">20</span>
                  <span className="text-slate-500">;</span>
                </div>
              </div>

              <div className="flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                <div>
                  <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                    Your streak
                  </p>
                  <p className="mt-0.5 text-base font-bold text-slate-900">
                    12 days 🔥
                  </p>
                </div>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
      <div className="md:flexabsolute bottom-0 left-0 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white py-3 pr-5 pl-3 shadow-lg md:-left-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-500">
          <Trophy size={20} />
        </span>
        <div>
          <p className="text-[10px] font-semibold tracking-wide text-slate-400 uppercase">
            Achievement unlocked
          </p>
          <p className="text-sm font-bold text-slate-900">
            First steps · +50 XP
          </p>
        </div>
      </div>
    </div>
  )
}
