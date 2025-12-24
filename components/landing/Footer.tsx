import Link from "next/link"
import { Sparkles, Github, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-border/30 bg-card/30 py-12">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/20">
                            <Sparkles className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                            <span className="text-lg font-bold text-foreground">Mentora</span>
                            <p className="text-xs text-muted-foreground">AI-Powered Learning Platform</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8 text-sm">
                        <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                            Docs
                        </Link>
                        <Link href="/calendar" className="text-muted-foreground hover:text-foreground transition-colors">
                            Calendar
                        </Link>
                        <Link href="/study-plan" className="text-muted-foreground hover:text-foreground transition-colors">
                            Study Plans
                        </Link>
                    </div>

                    {/* Social & Copyright */}
                    <div className="flex items-center gap-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <span className="text-sm text-muted-foreground">© {new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
