import { SolidAuth } from "@auth/solid-start"
import { authOptions } from "~/lib/auth/authOptions"

export const { GET, POST } = SolidAuth(authOptions)
