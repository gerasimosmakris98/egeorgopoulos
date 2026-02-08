import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
            <Button variant="ghost" asChild className="mb-8 hover:bg-transparent hover:text-primary">
                <Link to="/" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </Button>

            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <FileText className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-playfair font-bold text-foreground">
                    Terms of Use
                </h1>
            </div>

            <Card className="glass-effect border-white/5">
                <CardContent className="p-8 space-y-8 text-muted-foreground leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">1. Introduction</h2>
                        <p>
                            These terms and conditions outline the rules and regulations for the use of Efstathios Georgopoulos's Portfolio Website.
                            By accessing this website we assume you accept these terms and conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. License</h2>
                        <p>
                            Unless otherwise stated, Efstathios Georgopoulos owns the intellectual property rights for all material on this portfolio.
                            All intellectual property rights are reserved. You may access this for your own personal use subjected to restrictions set in these terms and conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. Restrictions</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Republishing material from this website without attribution.</li>
                            <li>Selling, renting, or sub-licensing material from this website.</li>
                            <li>Reproducing, duplicating, or copying material from this website.</li>
                            <li>Redistributing content from this website.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">4. Content Liability</h2>
                        <p>
                            We shall not be hold responsible for any content that appears on your Website. No link(s) should appear on any Website that
                            may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement
                            or other violation of, any third party rights.
                        </p>
                    </section>

                </CardContent>
            </Card>
        </div>
    );
};

export default Terms;
