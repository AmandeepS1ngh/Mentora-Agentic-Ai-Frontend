"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, FileText, Calendar, MessageSquare, BookOpen, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navLinks = [
    { href: "/docs", label: "Docs", icon: FileText },
    { href: "/calendar", label: "Calendar", icon: Calendar },
    { href: "/chat", label: "Chat", icon: MessageSquare },
    { href: "/study-plan", label: "Study Plans", icon: BookOpen },
]

export function Header() {
    const pathname = usePathname()
    const { user, loading, signOut } = useAuth()
    const [showDropdown, setShowDropdown] = useState(false)

    // Get display name from user
    const displayName = user?.user_metadata?.full_name
        || user?.email?.split('@')[0]
        || 'User'

    const handleSignOut = async () => {
        await signOut()
        setShowDropdown(false)
    }

    return (
        <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                {/* Logo / Brand */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/25">
                        <Sparkles className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold text-foreground">Mentora</h1>
                        <p className="text-xs text-muted-foreground">Not just a mentor - Your multi-agent study navigator.</p>
                    </div>
                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                )}
                            >
                                <link.icon className="w-4 h-4" />
                                <span>{link.label}</span>
                            </Link>
                        )
                    })}
                </nav>

                {/* Auth Section */}
                <div className="flex items-center gap-3">
                    {loading ? (
                        <div className="h-9 w-20 rounded-lg bg-secondary/50 animate-pulse" />
                    ) : user ? (
                        <div className="relative">
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/30 border border-white/5 hover:bg-secondary/50 transition-all duration-200"
                            >
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                                    <User className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm font-medium text-foreground max-w-[100px] truncate">
                                    {displayName}
                                </span>
                            </button>

                            {/* Dropdown */}
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-48 py-2 bg-card border border-border/50 rounded-xl shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="px-4 py-2 border-b border-border/50">
                                        <p className="text-xs text-muted-foreground">Signed in as</p>
                                        <p className="text-sm font-medium text-foreground truncate">{user.email}</p>
                                    </div>
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link href="/login">
                            <Button
                                variant="outline"
                                className="rounded-xl border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/50"
                            >
                                Sign In
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}
