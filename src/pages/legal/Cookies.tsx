import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cookies = () => {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
            <Button variant="ghost" asChild className="mb-8 hover:bg-transparent hover:text-primary">
                <Link to="/" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </Button>

            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <Cookie className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-playfair font-bold text-foreground">
                    Cookies Policy
                </h1>
            </div>

            <Card className="glass-effect border-white/5">
                <CardContent className="p-8 space-y-8 text-muted-foreground leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">1. What are Cookies?</h2>
                        <p>
                            A cookie is a small text file that a website stores on your computer or mobile device when you visit the site.
                            It enables the website to remember your actions and preferences over a period of time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Technical & Essential Cookies</h3>
                                <p>
                                    These are necessary for the website to function properly. They enable basic functions like page navigation
                                    and access to secure areas of the website. The website cannot function properly without these cookies.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Cookies</h3>
                                <p>
                                    We may use third-party analytics (like Google Analytics with IP anonymization) to understand how visitors interact with the website.
                                    These cookies help us improve the user experience.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. How to Manage Cookies</h2>
                        <p className="mb-4">
                            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer
                            and you can set most browsers to prevent them from being placed.
                        </p>
                        <p>
                            However, if you do this, you may have to manually adjust some preferences every time you visit a site
                            and some services all functionalities may not work.
                        </p>
                    </section>

                </CardContent>
            </Card>
        </div>
    );
};

export default Cookies;
