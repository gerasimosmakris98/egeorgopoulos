import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
            <Button variant="ghost" asChild className="mb-8 hover:bg-transparent hover:text-primary">
                <Link to="/" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </Button>

            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <Shield className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-playfair font-bold text-foreground">
                    Privacy Policy
                </h1>
            </div>

            <Card className="glass-effect border-white/5">
                <CardContent className="p-8 space-y-8 text-muted-foreground leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">1. Data Controller</h2>
                        <p>
                            <strong>Identity:</strong> Efstathios Georgopoulos<br />
                            <strong>Location:</strong> Madrid, Spain<br />
                            <strong>Contact:</strong> Accessible via the <Link to="/contact" className="text-primary hover:underline">Contact Page</Link>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. Purpose of Processing</h2>
                        <p className="mb-4">
                            We process the information you provide in order to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Manage requests made through the website's contact forms.</li>
                            <li>Maintain professional communication via email.</li>
                            <li>Provide information about services or professional collaboration opportunities.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. Legitimacy</h2>
                        <p>
                            The legal basis for the processing of your data is your <strong>consent</strong>,
                            granted by checking the acceptance box before sending the contact form.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">4. Data Retention</h2>
                        <p>
                            The data provided will be kept as long as the commercial relationship is maintained or
                            during the years necessary to comply with legal obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">5. Recipients</h2>
                        <p>
                            Data will not be transferred to third parties except in cases where there is a legal obligation.
                            Hosting services are provided by secure providers compliant with GDPR.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">6. Your Rights (ARCO)</h2>
                        <p className="mb-4">
                            You have the right to access your personal data, rectify inaccurate data, or request its deletion
                            when the data is no longer necessary. You may exercise these rights by contacting us through the
                            <Link to="/contact" className="text-primary hover:underline ml-1">Contact Form</Link>.
                        </p>
                    </section>

                </CardContent>
            </Card>
        </div>
    );
};

export default Privacy;
