import { FileSearch, Calendar, BookOpen, Brain, ArrowRight } from "lucide-react"

const features = [
    {
        icon: FileSearch,
        title: "Document Q&A",
        description: "Upload documents and ask questions. Get accurate answers with source citations powered by RAG technology.",
        color: "purple",
    },
    {
        icon: Calendar,
        title: "Smart Calendar",
        description: "Manage your tasks and schedule with an AI-assisted calendar that understands your learning goals.",
        color: "blue",
    },
    {
        icon: BookOpen,
        title: "Study Planner",
        description: "Create personalized study plans based on your materials, deadlines, and learning pace.",
        color: "green",
    },
    {
        icon: Brain,
        title: "AI Summaries",
        description: "Generate intelligent summaries and reflections to reinforce your understanding of key concepts.",
        color: "orange",
    },
]

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    purple: { bg: "bg-purple-500/10", text: "text-purple-500", border: "group-hover:border-purple-500/30" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-500", border: "group-hover:border-blue-500/30" },
    green: { bg: "bg-green-500/10", text: "text-green-500", border: "group-hover:border-green-500/30" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-500", border: "group-hover:border-orange-500/30" },
}

export function FeaturesSection() {
    return (
        <section id="features" className="py-32 px-6 relative">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Features</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Four AI Agents, One Goal
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Intelligent agents working together to enhance every aspect of your learning experience.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => {
                        const colors = colorClasses[feature.color]
                        return (
                            <div
                                key={index}
                                className={`group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 ${colors.border}`}
                            >
                                {/* Icon */}
                                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg} mb-6`}>
                                    <feature.icon className={`w-7 h-7 ${colors.text}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {feature.description}
                                </p>

                                {/* Learn more link */}
                                <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
