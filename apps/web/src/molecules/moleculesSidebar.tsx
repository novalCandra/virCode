import { Check } from "lucide-react"

type TypeSidebar = {
  label: string
  status: string
}

export default function SidebarItemMolecules({ label, status }: TypeSidebar) {
  if (status === "active") {
    return (
      <li className="flex items-center gap-2.5 rounded-lg bg-violet-100 px-3 py-2.5 text-sm font-semibold text-violet-900">
        <span className="h-2 w-2 shrink-0 rounded-full bg-violet-600" />
        {label}
      </li>
    )
  }
  return (
    <li className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-slate-700">
      {status === "done" ? (
        <Check size={14} className="shrink-0 text-slate-600" />
      ) : (
        <span className="h-2 w-2 shrink-0 rounded-full border border-slate-300" />
      )}
      {label}
    </li>
  )
}
