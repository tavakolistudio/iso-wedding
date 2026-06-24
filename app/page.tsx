import { redirect } from "next/navigation";

// Default-locale redirect for unprefixed paths — see app/layout.tsx for why
// this is a plain page instead of middleware.
export default function RootRedirect() {
  redirect("/fa");
}
