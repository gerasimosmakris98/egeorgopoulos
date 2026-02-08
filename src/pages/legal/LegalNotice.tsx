import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalNotice = () => {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
            <Button variant="ghost" asChild className="mb-8 hover:bg-transparent hover:text-primary">
                <Link to="/" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </Button>

            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <Scale className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-playfair font-bold text-foreground">
                    Legal Notice (Aviso Legal)
                </h1>
            </div>

            <Card className="glass-effect border-white/5">
                <CardContent className="p-8 space-y-8 text-muted-foreground leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">1. Information Society Services Law (LSSI)</h2>
                        <p className="mb-4">
                            In compliance with Article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE),
                            the following identification data of the owner of this website is provided:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Owner:</strong> Efstathios Georgopoulos</li>
                            <li><strong>Address:</strong> Madrid, Spain</li>
                            <li><strong>Email:</strong> Available via the <Link to="/contact" className="text-primary hover:underline">Contact Form</Link>.</li>
                            <li><strong>Activity:</strong> Personal Portfolio & Professional Services</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. Professional Disclaimer</h2>
                        <p>
                            The content provided on this website (including blog posts, project descriptions, and compliance resources) is for
                            <strong>informational and educational purposes only</strong>. It does not constitute professional legal, financial, or compliance advice.
                            While the owner strives to keep the information up to date and correct, we make no representations or warranties of any kind about
                            the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. Terms of Use</h2>
                        <p>
                            Access to this website implies the status of USER and accepts the General Conditions of Use listed here.
                            The USER assumes responsibility for the use of the portal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                        <p>
                            Efstathios Georgopoulos is the owner of all intellectual and industrial property rights of his website,
                            as well as the elements contained therein (images, sound, audio, video, software, or texts; trademarks or logos,
                            color combinations, structure, and design, etc.). All rights reserved.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">5. Liability Exclusion</h2>
                        <p>
                            The owner is not responsible for damages of any kind that may cause errors or omissions in the content,
                            unavailability of the portal, or the transmission of viruses or malicious programs in the content,
                            despite having adopted all necessary technological measures to prevent it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">6. Modifications</h2>
                        <p>
                            The owner reserves the right to make unannounced changes it deems appropriate in its portal,
                            being able to change, delete, or add both the content and services provided through it and the way in which they are presented.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">6. Applicable Law</h2>
                        <p>
                            The relationship between the owner and the USER shall be governed by current Spanish regulations,
                            and any controversy shall be submitted to the Courts and tribunals of the city of Madrid.
                        </p>
                    </section>

                </CardContent>
            </Card>
        </div>
    );
};

export default LegalNotice;
