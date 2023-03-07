import debounce from "lodash.debounce"
import { createMemo, createSignal, onCleanup, onMount } from "solid-js"

export function useWindowSize() {
  const [size, setSize] = createSignal({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  const handler = createMemo(() =>
    debounce((_event: Event) => {
      setSize({ height: window.innerHeight, width: window.innerWidth })
    }, 250)
  )
  onMount(() => {
    window.addEventListener("resize", handler)
  })
  onCleanup(() => {
    window.removeEventListener("resize", handler)
  })
  return size
}
