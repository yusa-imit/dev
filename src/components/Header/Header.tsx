import { type JSX } from "solid-js"

interface HeaderProps {
  children?: JSX.Element
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <nav class="bg-white px-4 lg:px-12 py-4 dark:bg-neutral-700 bg-opacity-10 dark:bg-opacity-10 fixed top-0 w-full backdrop-blur-sm">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="">
            header
          </a>
        </div>
      </nav>
    </header>
  )
}
