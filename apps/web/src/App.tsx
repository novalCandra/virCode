import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Play, ArrowRight, Check, Code, Flame, Zap, Trophy } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import LessonCard from "./molecules/LessonCard"
import { ConfigCourses, ConfigUnderstand } from "./config/configHome"
export function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <section className="flex h-260 flex-col items-center justify-center space-y-5 space-x-0 bg-[#fbfbfd] px-5 py-20 md:h-0 md:flex-1 md:flex-row md:space-y-0 md:space-x-72 md:px-5 md:py-30">
        <div className="flex w-96 flex-col space-y-4 px-4 md:h-60 md:w-150 md:px-0">
          <h1 className="font-sans text-5xl font-bold md:text-7xl">
            Learn to code. <span className="text-primary">Understand</span> how
            it works.
          </h1>
          <p className="font-sans font-light text-muted-foreground">
            Master web development through simple explanations, real-world
            analogies, interactive code, and hands-on practice.
          </p>
          <div className="flex h-20 flex-row items-center gap-8">
            <Button
              className={
                "flex h-10 w-42 cursor-pointer flex-row items-center justify-center gap-2 rounded-sm border-none bg-primary px-2 py-2 font-sans text-sm text-white shadow-3xl transition ease-in-out hover:bg-primary hover:shadow-none md:h-10 md:w-46 md:rounded-sm md:text-base"
              }
            >
              Start Learning
              <ArrowRight className="size-5" />
            </Button>
            <Button
              className={
                "flex h-10 w-42 cursor-pointer flex-row items-center justify-center rounded-sm border-none bg-transparent px-2 py-2 font-sans text-sm text-black transition ease-in-out hover:bg-primary hover:shadow-none md:h-10 md:w-46 md:rounded-xl md:text-base"
              }
            >
              <div className="flex flex-row items-center justify-between gap-2">
                <div className="flex h-7 w-7 flex-col items-center justify-center rounded-full border-2 border-gray-300">
                  <Play className="size-4 rounded-full" />
                </div>
                <span>See how it works</span>
              </div>
            </Button>
          </div>
          <div className="flex h-20 w-80 flex-row items-center justify-between">
            <div className="flex flex-row">
              <div className="flex h-7 w-7 flex-col items-center justify-center rounded-full bg-yellow-100 text-center font-sans text-[11px]">
                Mc
              </div>
              <div className="flex h-7 w-7 flex-col items-center justify-center rounded-full bg-blue-100 text-center font-sans text-[11px]">
                Jr
              </div>
              <div className="flex h-7 w-7 flex-col items-center justify-center rounded-full bg-red-100 text-center font-sans text-[11px]">
                Ak
              </div>
              <div className="flex h-7 w-7 flex-col items-center justify-center rounded-full bg-purple-100 text-center font-sans text-[11px]">
                +
              </div>
            </div>
            <span className="font-sans text-[13px] font-semibold">
              Join 24,000+ curious learners
            </span>
          </div>
        </div>
        <div className="flex h-260 flex-col md:h-120">
          <LessonCard />
        </div>
      </section>

      <section className="flex h-290 flex-col items-center justify-center space-y-2.5 border-t-2 border-gray-200 bg-white py-20 md:h-140">
        <div className="flex h-70 w-96 flex-col space-y-3 text-center md:w-135">
          <div className="mx-auto px-3 md:w-125 md:px-0">
            <span className="font-mono text-lg font-bold text-primary uppercase md:text-2xl">
              A better learning loop
            </span>
            <h2 className="font-sans text-3xl font-bold md:text-4xl">
              You don't need to memorize. You need to{" "}
              <span className="text-primary">understand.</span>
            </h2>
          </div>
          <p className="font-sans text-[#62748e] md:text-base">
            Every lesson is built around the way your brain naturally learns new
            ideas.
          </p>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="mx-auto grid grid-cols-1 space-y-6 space-x-0 md:grid-cols-4 md:space-x-10 md:px-30">
            {ConfigUnderstand.map((item) => {
              const ItemIcon = item.Icon
              return (
                <Card
                  key={item.id + 1}
                  className="h-52 w-90 border-2 border-gray-200 bg-[#FBFBFD] md:w-100"
                >
                  <CardHeader>
                    <CardTitle className="px-4 py-4">
                      <span className="font-sans text-primary">0{item.id}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="w-70 space-y-2.5 px-4">
                    <div className="flex h-10 w-10 flex-col items-center justify-center rounded-md bg-white">
                      <ItemIcon className="text-primary" />
                    </div>
                    <h3 className="font-sans text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="font-sans font-light text-gray-600">
                      {item.deskripsi}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="flex h-310 flex-col border-t-2 border-gray-300 bg-[#fbfbfd] md:h-150 md:px-15 md:py-10">
        <div className="flex flex-col space-y-2.5 px-10 py-10">
          <p className="font-mono text-xl font-semibold text-primary uppercase md:text-lg">
            Your path starts here
          </p>
          <h2 className="text-3xl font-bold">
            Pick a course. Make something real.
          </h2>
          <Link
            to={"#"}
            className="flex flex-row items-center gap-2 font-sans font-bold text-primary md:justify-end"
          >
            View All courses <ArrowRight className="size-5 md:size-6" />
          </Link>
        </div>
        <div className="grid grid-cols-1 space-y-8 space-x-0 px-5 md:grid-cols-3 md:space-y-0 md:space-x-10">
          {ConfigCourses.map((item) => {
            const Icon = item.Icon
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                <Card className="h-75 w-90 cursor-pointer rounded-md border-2 border-gray-300 bg-background px-5 py-5 md:h-74 md:w-136">
                  <CardTitle className="flex flex-row items-center justify-between">
                    <div
                      className={`flex flex-col items-center justify-center rounded-md md:h-10 md:w-10 bg-[${item.styleColor}]`}
                    >
                      <Icon
                        className={`size-7 md:size-6 text-[${item.textColor}]`}
                      />
                    </div>
                    <div className="rounded-2xl bg-[#f1f5f9] px-4 py-1 font-sans text-[0.8rem] font-bold text-[#62748e] uppercase">
                      {item.category}
                    </div>
                  </CardTitle>

                  <CardContent className="flex flex-col space-y-10 py-4">
                    <div className="flex flex-col space-y-4">
                      <h2 className="font-sans text-xl font-bold">
                        {item.title}
                      </h2>
                      <p className="line-clamp-2 font-sans font-semibold text-[#62748e]">
                        {item.deskripsi}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="relative flex w-full flex-col space-y-6">
                      <div className="flex flex-row justify-between">
                        <span className="font-sans text-[#62748e]">
                          {item.lesson} lesson
                        </span>
                        <span className="font-sans text-[#62748e]">
                          {item.compelete}% compolete
                        </span>
                      </div>
                      <div className="h-2 w-80 rounded-md bg-[#f1f5f9] md:w-85"></div>
                      <div
                        className={`absolute top-11 h-2 w-${item.progress} rounded-md bg-primary`}
                      ></div>
                      <button className="flex h-12 cursor-pointer flex-row items-center justify-center gap-1 rounded-sm border-2 border-gray-300 bg-background font-sans font-semibold hover:bg-purple-50 hover:text-primary">
                        Explore Courses
                        <ArrowRight className="size-5 md:size-6" />
                      </button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="flex h-190 flex-col space-y-2 border-t-2 border-gray-300 bg-[#111827] md:h-150">
        <div className="flex h-300 flex-col space-y-28 px-4 md:flex-1 md:flex-row md:items-center md:justify-center md:space-x-100">
          {/* left */}
          <div className="flex h-52 w-96 flex-col space-y-4 px-1 py-4 md:w-150">
            <p className="font-sans text-lg font-bold text-[#c4b4ff] uppercase md:text-2xl">
              Learning by doing
            </p>
            <h2 className="font-sans text-3xl font-bold text-white md:text-5xl">
              Where concepts become{" "}
              <span className="text-[#c4b4ff]">muscle memory.</span>
            </h2>
            <p className="text-md font-sans font-semibold text-[#62748e] md:text-xl">
              Read a concept, make a change, and see what happens. Our
              playgrounds make it safe to be curious.
            </p>

            <div className="flex flex-row items-center gap-2">
              <div className="flex h-10 w-10 flex-col items-center justify-center rounded-md bg-[#18274b]">
                <Code className="text-[#c4b4ff]" />
              </div>
              <p className="font-sans text-base font-bold text-[#62748e]">
                No setup. No blank screen. Just code.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="flex h-100 w-96 flex-col rounded-2xl border-2 border-gray-500 bg-[#0b101a] px-1 py-3 text-[#62748e] md:w-200">
            <div className="flex w-full flex-row justify-between border-b-2 border-gray-500 px-4 py-2">
              <div className="flex flex-row">
                <p>JavaScript playground</p>
              </div>
              <div className="flex flex-row">
                <span>Copy</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-1 md:flex-row">
              <div className="flex h-32 flex-col space-y-3 px-4 py-4 md:h-60 md:w-96 md:border-r-2 md:border-gray-500">
                <div className="flex flex-row justify-between">
                  <span className="font-mono text-white uppercase">editor</span>
                  <span className="font-mono text-yellow-400 uppercase">
                    JS
                  </span>
                </div>
                <div className="flex w-50 flex-col">
                  <p className="font-mono text-white">let name = "Savira";</p>
                  <p className="font-mono text-white">console.log(name);</p>
                </div>
              </div>
              <div className="flex h-28 flex-col space-y-1 border-t-2 border-gray-500 px-4 py-4 md:border-none">
                <div className="flex flex-col">
                  <span className="font-mono uppercase">Ouput</span>
                  <p className="font-mono text-green-300">Savira</p>
                </div>
              </div>
            </div>

            <div className="flex h-40 flex-row items-center justify-end border-t-2 border-gray-500 px-4 md:w-198">
              <Button
                className={
                  "flex h-8 w-28 flex-row gap-2 rounded-md border-none font-sans font-bold text-white"
                }
              >
                <Play className="size-5" />
                Run code
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-200 flex-col items-center justify-center bg-[#fbfbfd] md:h-150">
        <div className="py-5space-y-2.5 flex h-190 w-100 flex-col space-x-0 rounded-2xl bg-[#f5f3ff] px-5 md:h-80 md:w-400 md:flex-row md:space-x-50 md:px-10 md:py-10">
          <div className="flex w-80 flex-col space-y-4 md:w-200">
            <div>
              <p className="font-sans text-xl font-bold text-primary">
                Progress that keeps you going
              </p>
            </div>
            <h2 className="font-sans text-4xl font-bold">
              Small wins add up to big skills.
            </h2>
            <p className="font-sans text-base">
              Earn XP, build your streak, and unlock achievements as you turn “I
              don't get it” into “I made this.”
            </p>
            <Link
              to={"#"}
              className="flex flex-row items-center gap-3 font-sans font-bold text-primary"
            >
              See your learning dashboard <ArrowRight className="size-5" />
            </Link>
          </div>

          <div className="grid h-full w-full grid-cols-1 space-y-2.5 md:h-72 md:grid-cols-2 md:space-y-0 md:gap-x-7">
            <Card className="h-40 border-2 border-gray-200 bg-white">
              <CardTitle className="flex flex-row items-center justify-between px-4 py-4">
                <p className="font-sans text-base font-semibold text-gray-600">
                  Current Stack
                </p>
                <Flame className="size-6 text-orange-500" />
              </CardTitle>
              <CardContent>
                <div className="flex flex-col space-y-4 px-4 py-4">
                  <div className="relative flex flex-row gap-2">
                    <h2 className="text font-sans text-4xl font-semibold">
                      12
                    </h2>
                    <p className="absolute top-3 left-10 font-sans text-xl font-semibold text-gray-400">
                      days
                    </p>
                  </div>

                  <div className="relative flex flex-col">
                    {/*<div className="h-2 w-full rounded-2xl bg-gray-200"></div>*/}
                    <div className="absolute h-2 w-10 rounded-2xl bg-amber-500"></div>
                    <div className="absolute left-14 h-2 w-10 rounded-2xl bg-amber-500"></div>
                    <div className="absolute left-28 h-2 w-10 rounded-2xl bg-amber-500"></div>
                    <div className="absolute left-42 h-2 w-10 rounded-2xl bg-amber-500"></div>
                    <div className="absolute left-56 h-2 w-10 rounded-2xl bg-amber-500"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="h-40 border-2 border-gray-200 bg-white">
              <CardTitle className="flex flex-row items-center justify-between px-4 py-4">
                <p className="font-sans text-base font-semibold text-gray-600">
                  Level 7
                </p>
                <Zap className="size-6 text-primary" />
              </CardTitle>
              <CardContent>
                <div className="flex flex-col space-y-4 px-4 py-4">
                  <div className="relative flex flex-row gap-2">
                    <h2 className="text font-sans text-4xl font-semibold">
                      1,420
                    </h2>
                    <p className="absolute top-3 left-24 font-sans text-xl font-semibold text-gray-400">
                      XP
                    </p>
                  </div>

                  <div className="relative flex flex-col">
                    <div className="h-2 w-full rounded-2xl bg-gray-200"></div>
                    <div className="absolute h-2 w-60 rounded-2xl bg-primary"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-20 border-2 border-gray-200 bg-white md:w-220">
              <CardContent>
                <div className="flex h-20 flex-row items-center justify-between gap-2 px-2">
                  <div className="flex w-100 flex-row items-center gap-3">
                    <div className="fle-col flex h-8 w-8 items-center justify-center rounded-md bg-amber-200">
                      <Trophy className="size-5 text-orange-400" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-sans font-bold">
                        First Steps unlocked
                      </h3>
                      <p>Complete your first lesson · +50 XP</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Check className="size-5 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="flex h-100 flex-col items-center justify-center border-t-2 border-gray-300">
        <div className="space-y-4 px-4 text-center md:w-140 md:px-0">
          <span className="font-mono text-base font-bold text-primary uppercase md:text-xl">
            A little more confidence, every day
          </span>
          <h2 className="font-sans text-3xl font-bold text-black md:text-5xl">
            Your next breakthrough is one lesson away.
          </h2>

          <p className="font-sans italic">
            Join thousands of learners building their skills with a platform
            that makes the hard parts feel possible.
          </p>

          <Button className={"h-12 w-56 rounded-md px-3 font-bold text-white"}>
            Start Your Learning
          </Button>
        </div>
      </section>
    </div>
  )
}
