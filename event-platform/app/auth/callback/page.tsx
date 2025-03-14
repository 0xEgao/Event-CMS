"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SupabaseClient } from "../../../lib/supabaseclient"

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await SupabaseClient.auth.getSession()
        if (error) {
          console.error("Session Error:", error)
          router.push("/auth/signin?error=session_error")
          return
        }

        if (data.session) {
          console.log("Session Success:", data.session)
          router.push("/events")
        } else {
          console.log("No session found")
          router.push("/auth/signin?error=no_session")
        }
      } catch (error) {
        console.error("Callback Error:", error)
        router.push("/auth/signin?error=auth_failed")
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Processing authentication...</p>
    </div>
  )
}