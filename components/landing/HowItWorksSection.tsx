import { Upload, MessageCircle, Lightbulb, TrendingUp } from "lucide-react"

const steps = [
    {
        icon: Upload,
        step: "01",
        title: "Upload Documents",
        description: "Add your study materials, notes, or any documents you want to learn from.",
    },
    {
        icon: MessageCircle,
        step: "02",
        title: "Ask Questions",
        description: "Chat with your documents or plan tasks using natural language.",
    },
    {
        icon: Lightbulb,
        step: "03",
        title: "Get Insights",
        description: "Receive AI-powered answers, summaries, and study recommendations.",
    },
    {
        icon: TrendingUp,
        step: "04",
        title: "Track Progress",
        description: "Monitor your learning journey and stay on top of your goals.",
    },
]

export function HowItWorksSection() {
    return (
        <section className="py-32 px-6 bg-secondary/20 border-y border-border/30">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">How It Works</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Start in Minutes
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A simple, intuitive workflow designed to maximize your learning efficiency.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((item, index) => (
                        <div key={index} className="relative text-center">
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-primary/30 to-transparent" />
                            )}

                            {/* Step Number Badge */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border/50 mb-6 relative">
                                <item.icon className="w-7 h-7 text-primary" />
                                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                                    {item.step}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-foreground mb-3">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
