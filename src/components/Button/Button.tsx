import { type JSX } from "solid-js"

export default function Button(props: JSX.IntrinsicElements["button"]) {
  return (
    <button
      class={`relative px-5 py-2.5 inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 ${props.class}`}
      {...props}
    />
  )
}
