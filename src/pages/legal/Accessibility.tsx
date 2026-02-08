import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Accessibility as AccessibilityIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Accessibility = () => {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
            <Button variant="ghost" asChild className="mb-8 hover:bg-transparent hover:text-primary">
                <Link to="/" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </Button>

            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <AccessibilityIcon className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-playfair font-bold text-foreground">
                    Accessibility Statement
                </h1>
            </div>

            <Card className="glass-effect border-white/5">
                <CardContent className="p-8 space-y-8 text-muted-foreground leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">Commitment</h2>
                        <p>
                            Efstathios Georgopoulos is committed to ensuring digital accessibility for people with disabilities.
                            We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">Conformance Status</h2>
                        <p>
                            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility
                            for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
                        </p>
                        <p className="mt-4">
                            This website is partially conformant with <strong>WCAG 2.1 level AA</strong>. Partially conformant means that some parts of the content
                            may not fully conform to the accessibility standard, though we strive for full compliance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">Feedback</h2>
                        <p>
                            We welcome your feedback on the accessibility of this website. Please let us know if you encounter accessibility barriers:
                        </p>
                        <p className="mt-2">
                            <strong>Contact:</strong> Please use the <Link to="/contact" className="text-primary hover:underline">Contact Form</Link> on this website.
                        </p>
                        <p className="mt-2">
                            We try to respond to feedback within 2 business days.
                        </p>
                    </section>

                </CardContent>
            </Card>
        </div>
    );
};

export default Accessibility;
