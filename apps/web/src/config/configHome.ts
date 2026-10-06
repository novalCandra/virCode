import {
  Astroid,
  BookOpen,
  Braces,
  CodeXml,
  Lightbulb,
  Terminal,
  Trophy,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
type TypeCofigNavbar = {
  id: number
  title: string
  href: string
  description: string
}

type TypeLessonSidebar = {
  id: number
  label: string
  status: string
}

type TypeCoursea = {
  id: number
  category: string
  title: string
  Icon: LucideIcon
  deskripsi: string
  lesson: number
  compelete: number
  progress: number
  styleColor: string
  textColor: string
}

type TypeUnderstand = {
  id: number
  Icon: LucideIcon
  title: string
  deskripsi: string
}

export const ConfigNavbar: TypeCofigNavbar[] = [
  {
    id: 1,
    href: "#",
    title: "Courses",
    description: "Courses",
  },
  {
    id: 2,
    href: "#",
    title: "How it works",
    description: "How it works",
  },
  {
    id: 3,
    href: "#",
    title: "Practice",
    description: "Practice",
  },
  {
    id: 4,
    href: "#",
    title: "Pricing",
    description: "Pricing",
  },
]

export const ConfigLessonSidebar: TypeLessonSidebar[] = [
  {
    id: 1,
    label: "What is JavaScript?",
    status: "done",
  },
  {
    id: 2,
    label: "Running JavaScript",
    status: "done",
  },
  {
    id: 3,
    label: "Variables",
    status: "active",
  },
  {
    id: 4,
    label: "Data types",
    status: "to do",
  },
]

export const ConfigCourses: TypeCoursea[] = [
  {
    id: 1,
    category: "begginer",
    compelete: 64,
    deskripsi: "Build the structure of the web.",
    Icon: CodeXml,
    lesson: 24,
    progress: 60,
    title: "HTML",
    styleColor: "#ffedd4",
    textColor: "#f54900",
  },
  {
    id: 2,
    category: "begginer",
    compelete: 64,
    deskripsi: "Build the structure of the web.",
    Icon: Astroid,
    lesson: 24,
    progress: 40,
    title: "CSS",
    styleColor: "#dbeafe",
    textColor: "#155dfc",
  },
  {
    id: 3,
    category: "begginer",
    compelete: 64,
    deskripsi: "Build the structure of the web.",
    Icon: Braces,
    lesson: 24,
    progress: 10,
    title: "Javascript",
    styleColor: "#fef9c2",
    textColor: "#a65f00",
  },
]

export const ConfigUnderstand: TypeUnderstand[] = [
  {
    id: 1,
    title: "Understand",
    deskripsi: "Start with a clear, human explanation.",
    Icon: BookOpen,
  },
  {
    id: 2,
    title: "Connect",
    deskripsi: "See the concept in a real-world analogy.",
    Icon: Lightbulb,
  },
  {
    id: 3,
    title: "Build",
    deskripsi: "Run code and experiment safely.",
    Icon: Terminal,
  },
  {
    id: 4,
    title: "Master",
    deskripsi: "Practice until it clicks. 🎉.",
    Icon: Trophy,
  },
]
