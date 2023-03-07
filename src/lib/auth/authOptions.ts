import { type SolidAuthConfig } from "@auth/solid-start"
import Github from "@auth/core/providers/github"

export const authOptions: SolidAuthConfig = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  debug: false,
}
