import { type JSX } from "solid-js"

export default function Tag(props: JSX.IntrinsicElements["div"]) {
  return (
    <div
      class={`relative px-2.5 py-1 inline-flex items-center justify-center mb-1 mr-1 text-sm font-medium rounded-lg text-gray-700 hover:text-gray-800 hover:brightness-90 dark:text-white dark:hover:text-gray-100 dark:hover:brightness-110 ${
        props.class ?? ""
      }`}
      {...props}
    />
  )
}
