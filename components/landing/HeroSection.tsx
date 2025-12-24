import Link from "next/link"
import { ArrowRight, FileSearch, Calendar, BookOpen, Brain, Sparkles, CheckCircle2, Zap } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative pt-8 pb-20 px-6 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
                <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Main Hero Content */}
                <div className="text-center max-w-4xl mx-auto space-y-8 mb-20">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary backdrop-blur-sm">
                        <Zap className="w-4 h-4" />
                        <span>AI-Powered Learning Platform</span>
                        <span className="px-2 py-0.5 bg-primary/20 rounded-full text-xs">New</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1]">
                        Master any subject{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                            with Mentora
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Your intelligent study companion that turns documents into answers,
                        creates personalized study plans, and keeps you on track.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/login"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-2xl hover:bg-primary/90 shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
                        >
                            Start Learning Free
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#features"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-border/50 bg-background/50 backdrop-blur-sm text-foreground text-lg font-medium rounded-2xl hover:bg-accent/50 transition-all"
                        >
                            See How It Works
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center"
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-1 text-yellow-500">
                                {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-lg">★</span>)}
                            </div>
                            <span className="text-sm text-muted-foreground">Trusted by 2,000+ students</span>
                        </div>
                    </div>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {/* Card 1 - Document Q&A */}
                    <div className="group bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-card/80 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500 w-fit mb-4">
                            <Brain className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Document Q&A</h3>
                        <p className="text-sm text-muted-foreground">Ask questions about your PDFs and get instant answers with citations.</p>
                    </div>

                    {/* Card 2 - Smart Calendar */}
                    <div className="group bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-card/80 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 w-fit mb-4">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Smart Calendar</h3>
                        <p className="text-sm text-muted-foreground">AI-assisted task management with natural language commands.</p>
                    </div>

                    {/* Card 3 - Study Plans */}
                    <div className="group bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-card/80 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="p-3 bg-green-500/10 rounded-xl text-green-500 w-fit mb-4">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Study Plans</h3>
                        <p className="text-sm text-muted-foreground">Personalized learning schedules tailored to your goals.</p>
                    </div>

                    {/* Card 4 - AI Summaries */}
                    <div className="group bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-card/80 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500 w-fit mb-4">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">AI Summaries</h3>
                        <p className="text-sm text-muted-foreground">Complex topics simplified into digestible insights.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
