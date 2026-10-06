import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export function MoleculesNavbar() {
  const [mobile, setMobbile] = useState<boolean>(false)
  function handleMenuMobile() {
    setMobbile((prev) => !prev)
  }
  return (
    <div className="flex max-w-full flex-row items-center justify-between bg-[#fbfbfd] px-6 py-5 md:px-20 md:py-5">
      <h2 className="font-sans text-2xl font-bold md:text-3xl">
        Vir<span className="text-primary">Code</span>
      </h2>
      <NavigationMenu>
        <NavigationMenuList
          className={"hidden md:flex md:justify-center md:space-x-10"}
        >
          <NavigationMenuItem>
            <NavigationMenuLink
              className={
                "cursor-pointer font-sans text-sm font-medium text-gray-600 uppercase"
              }
            >
              COURSES
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={
                "cursor-pointer font-sans text-sm font-medium text-gray-600 uppercase"
              }
            >
              How it works
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={
                "cursor-pointer font-sans text-sm font-medium text-gray-600 uppercase"
              }
            >
              Practice
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={
                "cursor-pointer font-sans text-sm font-medium text-gray-600 uppercase"
              }
            >
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="md:lex-row hidden md:flex md:items-center md:gap-10">
        <Button
          className={"border-none font-sans text-sm text-black md:text-base"}
          variant={"destructive"}
        >
          Login
        </Button>
        <Button
          type="button"
          className={
            "h-10 w-32 cursor-pointer rounded-sm border-none bg-primary text-white shadow-3xl hover:-translate-y-1 hover:bg-primary/80 hover:shadow-none"
          }
        >
          Start Learning
        </Button>
      </div>

      <div className="flex flex-row md:hidden md:items-center md:gap-10">
        <button className="cursor-pointer" onClick={handleMenuMobile}>
          {mobile ? <X /> : <Menu />}
          {mobile && (
            <Card className="absolute top-14 left-4 w-96 rounded-md bg-white px-5 shadow-2xl md:w-100">
              <CardContent>
                <ul className="flex flex-col space-y-4 py-4 text-start">
                  <Link to={"#"} className="font-sans text-lg font-semibold">
                    Courses
                  </Link>
                  <Link to={"#"} className="font-sans text-lg font-semibold">
                    How it works
                  </Link>
                  <Link to={"#"} className="font-sans text-lg font-semibold">
                    Pratice
                  </Link>
                  <Link to={"#"} className="font-sans text-lg font-semibold">
                    Pricing
                  </Link>
                  <Link to={"#"}>
                    <Button className="h-12 w-full text-lg text-white">
                      Start Leaning
                    </Button>
                  </Link>
                </ul>
              </CardContent>
            </Card>
          )}
        </button>
      </div>
    </div>
  )
}

export default MoleculesNavbar
