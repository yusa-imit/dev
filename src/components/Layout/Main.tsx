import { type JSX } from "solid-js"

interface MainProps extends JSX.HTMLAttributes<HTMLDivElement> {
  right?: JSX.Element
  left?: JSX.Element
}

export default function Main(props: MainProps) {
  return (
    <main
      class={`w-full pt-16 min-h-screen bg-neutral-300 dark:bg-neutral-700 ${props.class}`}
      {...props}
    >
      <div class="max-w-6xl md:grid grid-cols-12 gap-6 m-auto flex-grow px-4">
        <div class="hidden lg:block col-span-2">{props.left}</div>
        <div class="col-span-12 lg:col-span-7">{props.children}</div>
        <div class="hidden lg:block lg:col-span-3">{props.right}</div>
      </div>
    </main>
  )
}
