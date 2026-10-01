"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  Cpu,
  Activity,
  FileText,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Server,
  Database,
  Building2,
  UserCheck,
  ChevronRight,
  ExternalLink,
  Mail,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { StatCountUp, RangeStatCountUp } from "@/components/stat-countup";
import { TiltCard } from "@/components/tilt-card";
import { HeroPulse } from "@/components/hero-pulse";

// Staggered motion variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"audit" | "deck">("audit");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleOpenModal = (type: "audit" | "deck") => {
    setModalType(type);
    setFormSubmitted(false);
    setEmailInput("");
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-clinical font-sans selection:bg-teal selection:text-clinical">
      {/* Top Announcement Bar */}
      <div className="bg-charcoal border-b border-slate-800 px-4 py-2 text-center text-xs font-mono text-mutedslate">
        <span className="text-teal font-semibold">SEED ROUND:</span> Raising a seed round for healthcare AI compliance scaling.{" "}
        <button
          onClick={() => handleOpenModal("deck")}
          className="text-clinical underline hover:text-teal ml-2 cursor-pointer font-sans font-medium"
        >
          Request Investor Deck →
        </button>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-obsidian/95 border-b border-slate-800 backdrop-blur-none">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-teal/20 border border-teal/40 flex items-center justify-center text-teal font-bold font-mono text-lg">
              AM
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-clinical">AegisMed<span className="text-teal">.ai</span></span>
              <span className="block text-[10px] font-mono text-mutedslate uppercase tracking-wider">Clinical AI Compliance</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-mutedslate font-medium">
            <a href="#overview" className="hover:text-clinical transition-colors">Overview</a>
            <a href="#exposure" className="hover:text-clinical transition-colors">Exposure Audit</a>
            <a href="#clinical-support" className="hover:text-clinical transition-colors">Decision Support</a>
            <a href="#architecture" className="hover:text-clinical transition-colors">Architecture</a>
            <a href="#founder" className="hover:text-clinical transition-colors">Founder Note</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleOpenModal("deck")}
              className="hidden sm:inline-flex"
            >
              Investor Deck
            </Button>
            <Button
              variant="teal"
              size="sm"
              onClick={() => handleOpenModal("audit")}
            >
              Request Audit
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-slate-800">
        {/* Signature background motif: subtle animated waveform / pulse line */}
        <HeroPulse />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge variant="teal" className="mb-6">
              [ENTERPRISE HEALTHCARE AI COMPLIANCE PLATFORM]
            </Badge>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-clinical leading-[1.1] mb-6 font-sans">
              Total visibility over patient data exposure across clinical AI stacks.
            </h1>

            <p className="text-lg sm:text-xl text-mutedslate mb-10 leading-relaxed">
              Built for telehealth, digital health SaaS, and clinic groups. Uncovering PHI/PII leakage in third-party LLM integrations before regulators or data breaches do.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="lg"
                variant="teal"
                onClick={() => handleOpenModal("audit")}
                className="text-base font-semibold group"
              >
                Request Data Exposure Audit
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleOpenModal("deck")}
                className="text-base"
              >
                View Seed Investment Deck
              </Button>
            </div>
          </motion.div>

          {/* Verified Stats Bar (Ground Truth) with Animated Count-up and Tilt Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <TiltCard>
              <Card className="bg-charcoal border-slate-800 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-mutedslate uppercase tracking-wider">AI Adoption</span>
                    <Badge variant="mint">Verified Stat</Badge>
                  </div>
                  <div className="text-3xl font-bold font-mono text-clinical mb-1">
                    <StatCountUp end={88} suffix="%" />
                  </div>
                  <p className="text-sm text-mutedslate">
                    Of healthcare organizations already use AI regularly in clinical or administrative workflows.
                  </p>
                </CardContent>
              </Card>
            </TiltCard>

            <TiltCard>
              <Card className="bg-charcoal border-slate-800 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-mutedslate uppercase tracking-wider">Patient Trust</span>
                    <Badge variant="amber">High Risk</Badge>
                  </div>
                  <div className="text-3xl font-bold font-mono text-amber mb-1">
                    <StatCountUp end={77} suffix="%" />
                  </div>
                  <p className="text-sm text-mutedslate">
                    Of patients express serious concern regarding AI touching their sensitive medical data.
                  </p>
                </CardContent>
              </Card>
            </TiltCard>

            <TiltCard>
              <Card className="bg-charcoal border-slate-800 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-mutedslate uppercase tracking-wider">Breach Impact</span>
                    <Badge variant="amber">13-Yr Streak #1</Badge>
                  </div>
                  <div className="text-3xl font-bold font-mono text-amber mb-1">
                    <RangeStatCountUp endStart={6} endFinal={9} prefix="$" suffix="M" />
                  </div>
                  <p className="text-sm text-mutedslate">
                    Average healthcare data breach cost per incident, highest of any industry for 13 straight years.
                  </p>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* Interactive Clinical Decision-Support Preview (Strict Language Guardrail) */}
      <motion.section
        id="clinical-support"
        className="py-24 bg-obsidian border-b border-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={itemVariants} className="max-w-2xl mb-16">
            <Badge variant="teal" className="mb-4">[CORE PRODUCT ENGINE]</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-clinical mb-4">
              Private Clinical Decision-Support &amp; Compliance Engine
            </h2>
            <p className="text-mutedslate text-base">
              Underneath our audit offering sits our proprietary private AI system that securely analyzes patient data and presents treatment and medication comparison options strictly to licensed clinicians.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-charcoal border-slate-800 overflow-hidden">
              <CardHeader className="border-b border-slate-800 pb-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <CardTitle className="text-lg">Clinical Session Audit #AEG-8842</CardTitle>
                      <Badge variant="outline" className="border-slate-700 text-xs text-mutedslate">
                        Illustrative example, not derived from real patient data
                      </Badge>
                    </div>
                    <CardDescription>Simulated secure sandbox analyzing case presentation without external PHI leakage.</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="mint">PHI Redacted (Sample Trace)</Badge>
                    <Badge variant="teal">Illustrative Example</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="comparison" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="comparison">Treatment Options Comparison</TabsTrigger>
                    <TabsTrigger value="redaction">PHI Exposure Audit Log</TabsTrigger>
                    <TabsTrigger value="compliance">Stack Compliance Score</TabsTrigger>
                  </TabsList>

                  <TabsContent value="comparison" className="space-y-6">
                    <div className="bg-obsidian rounded-lg p-5 border border-slate-800">
                      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                        <span className="text-xs font-mono text-teal uppercase tracking-wider">Decision Support Reference Module</span>
                        <span className="text-xs text-mutedslate font-mono">
                          Illustrative example, not derived from real patient data — presented for clinician evaluation (does not diagnose or prescribe)
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-clinical mb-2">Case: Type 2 Diabetes Management with Renal Impairment (eGFR 38)</h3>
                      <p className="text-sm text-mutedslate mb-4">
                        The following evidence-based treatment options are presented for clinician review based on anonymized clinical guidelines and institutional formulary rules:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-charcoal rounded p-4 border border-slate-700">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-clinical text-sm">Option A: SGLT2 Inhibitor Protocol</span>
                            <Badge variant="mint">Recommended Profile</Badge>
                          </div>
                          <ul className="text-xs text-mutedslate space-y-2 mb-3">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-mint mt-0.5 shrink-0" />
                              <span>Cardiorenal protective benefits established in clinical trials</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-mint mt-0.5 shrink-0" />
                              <span>Adjusted dosage required for eGFR &lt; 45 mL/min</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-charcoal rounded p-4 border border-slate-700">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-clinical text-sm">Option B: GLP-1 Receptor Agonist</span>
                            <Badge variant="teal">Alternative Option</Badge>
                          </div>
                          <ul className="text-xs text-mutedslate space-y-2 mb-3">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-teal mt-0.5 shrink-0" />
                              <span>Superior glycemic control &amp; weight reduction profile</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-teal mt-0.5 shrink-0" />
                              <span>Requires gastrointestinal tolerance assessment</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="redaction" className="space-y-4">
                    <div className="bg-obsidian rounded-lg p-5 border border-slate-800 font-mono text-xs space-y-3">
                      <div className="flex items-center justify-between text-mutedslate border-b border-slate-800 pb-2">
                        <span>TIMESTAMP / EVENT</span>
                        <span>DETECTED PHI / PII PATTERN</span>
                        <span>ACTION TAKEN</span>
                      </div>
                      <div className="flex items-center justify-between text-clinical">
                        <span className="text-mutedslate">14:02:11.04</span>
                        <span className="text-amber">Patient Name &amp; MRN (#992-01-44)</span>
                        <span className="text-mint font-semibold">[SECURELY HASHED &amp; REDACTED]</span>
                      </div>
                      <div className="flex items-center justify-between text-clinical">
                        <span className="text-mutedslate">14:02:11.08</span>
                        <span className="text-amber">Provider IP &amp; Geolocation (Clinic B)</span>
                        <span className="text-mint font-semibold">[ANONYMIZED VIA PROXY]</span>
                      </div>
                      <div className="flex items-center justify-between text-clinical">
                        <span className="text-mutedslate">14:02:11.15</span>
                        <span className="text-amber">Unencrypted API Payload to LLM Gateway</span>
                        <span className="text-mint font-semibold">[INTERCEPTED &amp; REROUTED]</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="compliance" className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-obsidian p-4 rounded border border-slate-800">
                        <span className="text-xs font-mono text-mutedslate block mb-1">Architecture Alignment</span>
                        <span className="text-xl font-bold font-mono text-mint">HIPAA Safe Harbor Target</span>
                      </div>
                      <div className="bg-obsidian p-4 rounded border border-slate-800">
                        <span className="text-xs font-mono text-mutedslate block mb-1">Data Residency</span>
                        <span className="text-xl font-bold font-mono text-clinical">US-East (Isolated)</span>
                      </div>
                      <div className="bg-obsidian p-4 rounded border border-slate-800">
                        <span className="text-xs font-mono text-mutedslate block mb-1">Third-Party Leakage Target</span>
                        <span className="text-xl font-bold font-mono text-mint">Zero Exposure</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* The Zero Exposure Audit Offer Section with Tilt Card and Staggered Motion */}
      <motion.section
        id="exposure"
        className="py-24 bg-charcoal/50 border-b border-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <Badge variant="teal" className="mb-4">[THE ZERO EXPOSURE AUDIT]</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-clinical mb-6">
                The Zero Exposure Audit
              </h2>
              <p className="text-mutedslate text-base mb-6 leading-relaxed">
                For telehealth platforms, digital health SaaS teams, and clinic groups already using AI for notes, intake, or patient chat. We map every place patient data touches AI in your stack, hand you a plain language risk report, and tell you exactly what to fix first.
              </p>
              <p className="text-mutedslate text-base mb-6 leading-relaxed">
                Delivered in 14 days, no engineering team required on your end.
              </p>

              <div className="space-y-3 mb-6">
                <div className="text-sm font-semibold text-clinical font-mono uppercase tracking-wider">Includes:</div>
                <div className="text-sm text-mutedslate flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  <span>A full AI Exposure Map</span>
                </div>
                <div className="text-sm text-mutedslate flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  <span>A severity ranked risk report</span>
                </div>
                <div className="text-sm text-mutedslate flex items-center gap-2">
                  <Badge variant="teal" className="text-[10px] py-0 px-1.5">Bonus</Badge>
                  <span>A one page AI usage policy as a bonus</span>
                </div>
                <div className="text-sm text-mutedslate flex items-center gap-2">
                  <Badge variant="teal" className="text-[10px] py-0 px-1.5">Bonus</Badge>
                  <span>30 days of follow-up access as a bonus</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <TiltCard maxTilt={5}>
                <Card className="bg-charcoal border-slate-800 p-8 shadow-lg">
                  {/* FOUNDER-PROVIDED ASSUMPTIONS: $1,997 price and 3 slots scarcity may change */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-mutedslate uppercase tracking-wider">Investment &amp; Scarcity</span>
                    <Badge variant="amber">Only 3 slots this month</Badge>
                  </div>
                  <div className="text-4xl font-bold font-mono text-clinical mb-6">
                    $1,997 <span className="text-sm font-sans font-normal text-mutedslate">flat</span>
                  </div>

                  <div className="space-y-4 mb-8 text-sm text-mutedslate">
                    <Card className="bg-obsidian border-slate-800 p-4">
                      <div className="flex items-start gap-2.5">
                        <Badge variant="mint" className="shrink-0 mt-0.5">Guarantee</Badge>
                        <p className="leading-relaxed text-clinical text-xs">
                          If we do not find at least one real exposure point in your stack, the audit is free.
                        </p>
                      </div>
                    </Card>

                    <p className="leading-relaxed">
                      <strong className="text-clinical">Why now:</strong> Healthcare has had the highest data breach cost of any industry for 13 years running, averaging 6 to 9 million dollars per incident.
                    </p>
                  </div>

                  <div className="mt-8">
                    <Button
                      variant="teal"
                      className="w-full"
                      onClick={() => handleOpenModal("audit")}
                    >
                      Request The Zero Exposure Audit
                    </Button>
                  </div>
                </Card>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Founder's Note Section (Ground Truth) with Staggered Motion */}
      <motion.section
        id="founder"
        className="py-24 bg-obsidian border-b border-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div variants={itemVariants}>
            <Card className="bg-charcoal border-slate-800 p-8 sm:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 text-center md:text-left">
                  <div className="h-24 w-24 rounded-full bg-teal/20 border-2 border-teal/40 mx-auto md:mx-0 flex items-center justify-center text-teal font-bold font-mono text-2xl mb-4">
                    R
                  </div>
                  <h3 className="font-bold text-lg text-clinical">Robel</h3>
                  <p className="text-xs font-mono text-mutedslate">Founder, AegisMed AI</p>
                  <p className="text-xs text-teal mt-1">Founder of LoadLogic (AI Systems Agency)</p>
                </div>
                <div className="md:col-span-2 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8">
                  <Badge variant="teal" className="mb-4">[FOUNDER&apos;S PERSPECTIVE]</Badge>
                  <blockquote className="text-mutedslate text-base sm:text-lg italic leading-relaxed mb-6">
                    &ldquo;While building enterprise AI systems at LoadLogic, we saw firsthand how rigorous healthcare clients had to be when vetting data exposure. Standard compliance tooling wasn&apos;t holding up to real security scrutiny. AegisMed AI was built to give clinical organizations absolute confidence and visibility over every AI interaction.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenModal("deck")}
                    >
                      Connect With Founder
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Seed Investment CTA Section with Staggered Motion */}
      <motion.section
        id="architecture"
        className="py-24 bg-charcoal/30 border-b border-slate-800 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={itemVariants}>
            <Badge variant="teal" className="mb-4">[SEED INVESTMENT OPPORTUNITY]</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-clinical mb-6">
              Securing the Future of Compliant Healthcare AI
            </h2>
            <p className="text-mutedslate text-lg mb-10 max-w-2xl mx-auto">
              We are currently partnering with visionary seed investors and clinical pilot groups to scale our audit platform and private clinical decision-support infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="teal"
                onClick={() => handleOpenModal("deck")}
                className="w-full sm:w-auto"
              >
                Request Investor Seed Deck
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleOpenModal("audit")}
                className="w-full sm:w-auto"
              >
                Book Technical Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-obsidian py-12 border-t border-slate-800 text-sm text-mutedslate">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-teal/20 border border-teal/40 flex items-center justify-center text-teal font-bold font-mono text-sm">
              AM
            </div>
            <span className="font-bold text-clinical">AegisMed AI</span>
            <span className="text-xs font-mono">© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <span className="text-teal">Enterprise Security Architecture</span>
            <span>•</span>
            <span className="text-mutedslate">Privacy-First Data Isolation</span>
          </div>
        </div>
      </footer>

      {/* Modal Dialog for Audit / Investor Deck */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogHeader>
          <DialogTitle>
            {modalType === "audit" ? "Request Data Exposure Audit" : "Request Seed Investor Deck"}
          </DialogTitle>
          <DialogDescription>
            {modalType === "audit"
              ? "Enter your institutional email to schedule a secure PHI/PII compliance audit for your clinical AI stack."
              : "Access financial models, technical architecture whitepaper, and seed round allocation details."}
          </DialogDescription>
        </DialogHeader>

        {formSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-mint/20 border border-mint/40 text-mint flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-clinical text-lg">Request Received Successfully</h3>
            <p className="text-sm text-mutedslate">
              Our team will review your domain and reach out within 24 hours at <span className="text-teal font-mono">{emailInput}</span>.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setIsModalOpen(false)}
            >
              Close Window
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-xs font-mono text-mutedslate uppercase tracking-wider mb-2">
                Institutional / Corporate Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-mutedslate" />
                <input
                  type="email"
                  required
                  placeholder="name@clinicgroup.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-obsidian border border-slate-700 rounded-md py-2.5 pl-10 pr-4 text-clinical placeholder:text-mutedslate/50 text-sm focus:outline-none focus:border-teal"
                />
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" variant="teal" className="w-full">
                {modalType === "audit" ? "Initialize Stack Audit" : "Access Seed Deck"}
              </Button>
            </div>
          </form>
        )}
      </Dialog>
    </div>
  );
}
