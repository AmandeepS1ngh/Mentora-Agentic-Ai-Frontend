"use client"

import { Suspense, useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Loader2, BookOpen, Sparkles } from "lucide-react"
import Link from "next/link"

function LoginForm() {
    const [isSignUp, setIsSignUp] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const { user, loading: authLoading, signIn, signUp } = useAuth()
    const router = useRouter()
    const searchParams = useSearchParams()
    const redirect = searchParams.get("redirect") || "/dashboard"

    // Redirect if already logged in
    useEffect(() => {
        if (!authLoading && user) {
            router.replace(redirect)
        }
    }, [user, authLoading, router, redirect])

    // Show loading while checking auth
    if (authLoading) {
        return (
            <div className="w-full max-w-md flex items-center justify-center min-h-[400px]">
                <div className="flex items-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    <span className="text-muted-foreground">Loading...</span>
                </div>
            </div>
        )
    }

    // Don't render form if user is logged in (will redirect)
    if (user) {
        return (
            <div className="w-full max-w-md flex items-center justify-center min-h-[400px]">
                <div className="flex items-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    <span className="text-muted-foreground">Redirecting...</span>
                </div>
            </div>
        )
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setMessage("")
        setLoading(true)

        if (isSignUp && password !== confirmPassword) {
            setError("Passwords do not match")
            setLoading(false)
            return
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            setLoading(false)
            return
        }

        try {
            if (isSignUp) {
                const { error } = await signUp(email, password)
                if (error) {
                    setError(error.message)
                } else {
                    // Auto-login after signup (email verification disabled)
                    window.location.href = redirect
                }
            } else {
                const { error } = await signIn(email, password)
                if (error) {
                    setError(error.message)
                } else {
                    // Use hard navigation for reliable redirect after login
                    window.location.href = redirect
                }
            }
        } catch {
            setError("An unexpected error occurred")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full max-w-md space-y-8 relative z-10">
            {/* Logo/Header */}
            <div className="text-center">
                <Link href="/" className="inline-flex items-center gap-2 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                        <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Mentora
                    </span>
                </Link>
                <h1 className="text-2xl font-bold tracking-tight">
                    {isSignUp ? "Create your account" : "Welcome back"}
                </h1>
                <p className="text-muted-foreground mt-2">
                    {isSignUp
                        ? "Start your AI-powered study journey"
                        : "Sign in to continue your learning"}
                </p>
            </div>

            {/* Auth Form Card */}
            <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error Message */}
                    {error && (
                        <div className="flex items-center gap-2 p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                            <AlertCircle className="h-4 w-4 shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    {/* Success Message */}
                    {message && (
                        <div className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm">
                            <Sparkles className="h-4 w-4 shrink-0" />
                            <span>{message}</span>
                        </div>
                    )}

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="h-12 rounded-xl bg-background/50 border-border/50"
                        />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                            className="h-12 rounded-xl bg-background/50 border-border/50"
                        />
                    </div>

                    {/* Confirm Password (Sign Up only) */}
                    {isSignUp && (
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                minLength={6}
                                className="h-12 rounded-xl bg-background/50 border-border/50"
                            />
                        </div>
                    )}

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-12 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                    >
                        {loading ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : isSignUp ? (
                            "Create Account"
                        ) : (
                            "Sign In"
                        )}
                    </Button>
                </form>

                {/* Toggle Sign In / Sign Up */}
                <div className="mt-6 text-center text-sm">
                    <span className="text-muted-foreground">
                        {isSignUp ? "Already have an account?" : "Don't have an account?"}
                    </span>{" "}
                    <button
                        type="button"
                        onClick={() => {
                            setIsSignUp(!isSignUp)
                            setError("")
                            setMessage("")
                        }}
                        className="text-primary hover:underline font-medium"
                    >
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </button>
                </div>
            </div>

            {/* Back to Home */}
            <div className="text-center">
                <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    )
}

function LoginFormFallback() {
    return (
        <div className="w-full max-w-md space-y-8 relative z-10 flex items-center justify-center min-h-[400px]">
            <div className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                <span className="text-muted-foreground">Loading...</span>
            </div>
        </div>
    )
}

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/95 flex items-center justify-center p-4">
            {/* Background gradient */}
            <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <Suspense fallback={<LoginFormFallback />}>
                <LoginForm />
            </Suspense>
        </div>
    )
}
