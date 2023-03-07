// components/Protected.tsx
import { type Session } from "@auth/core/types"
import { getSession } from "@auth/solid-start"
import { type Component, Show } from "solid-js"
import { useRouteData } from "solid-start"
import { createServerData$, redirect } from "solid-start/server"
import { authOptions } from "~/lib/auth/authOptions"

const Protected = (Comp: IProtectedComponent) => {
  const routeData = () => {
    return createServerData$(
      async (_, event) => {
        const session = await getSession(event.request, authOptions)
        if (!session ?? !session.user) {
          return redirect("/login")
        }
        return session
      },
      { key: () => ["auth_user"] }
    )
  }

  return {
    routeData,
    Page: () => {
      const session = useRouteData<typeof routeData>()
      return (
        <Show when={session()} keyed>
          {(sess: Session) => <Comp {...sess} />}
        </Show>
      )
    },
  }
}

type IProtectedComponent = Component<Session>

export default Protected
