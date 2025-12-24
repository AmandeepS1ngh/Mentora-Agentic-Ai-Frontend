import Link from "next/link"
import { ArrowRight, Sparkles, Check } from "lucide-react"

const benefits = [
    "No credit card required",
    "Free tier available",
    "Setup in under 2 minutes",
]

export function CTASection() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-card/80 to-primary/5 p-12 md:p-16 text-center relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[80px]" />
                    </div>

                    <div className="relative">
                        {/* Icon */}
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/30 to-purple-500/20 border border-primary/20 mb-8">
                            <Sparkles className="h-10 w-10 text-primary" />
                        </div>

                        {/* Headline */}
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Ready to Learn Smarter?
                        </h2>

                        {/* Subtext */}
                        <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
                            Join thousands of students who are studying more effectively with Mentora.
                        </p>

                        {/* CTA Button */}
                        <Link
                            href="/login"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-lg font-bold rounded-2xl hover:bg-primary/90 shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
                        >
                            Get Started Free
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                        {/* Benefits */}
                        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Check className="w-4 h-4 text-green-500" />
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
