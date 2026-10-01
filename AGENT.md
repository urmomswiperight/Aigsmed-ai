# AGENT Instructions & Project Context: AegisMed AI

## Project Overview
AegisMed AI is an enterprise healthcare AI compliance and data exposure audit platform, built for telehealth, digital health SaaS, and clinic groups. Underneath the audit offer sits the real product: a private AI system that analyzes patient data and compares treatment/medication options for clinicians. The goal is an investor-ready, high-converting B2B landing page designed to secure seed investment.

## Ground Truth (do not invent beyond this)
- Verified stats, safe to use as-is: 88% of healthcare orgs already use AI regularly. 77% of people are concerned about AI touching their medical data. Healthcare has had the highest data breach costs of any industry for 13 straight years, averaging $6-9M per incident.
- Offer Details (The Zero Exposure Audit): For telehealth platforms, digital health SaaS teams, and clinic groups already using AI for notes, intake, or patient chat. We map every place patient data touches AI in your stack, hand you a plain language risk report, and tell you exactly what to fix first. Delivered in 14 days, no engineering team required on your end. Includes a full AI Exposure Map, a severity ranked risk report, a one page AI usage policy as a bonus, and 30 days of follow-up access as a bonus. Guarantee: if we do not find at least one real exposure point in your stack, the audit is free. Price $1,997 flat (founder-provided assumption). Scarcity: only 3 slots this month (founder-provided assumption). Why now: healthcare has had the highest data breach cost of any industry for 13 years running, averaging 6 to 9 million dollars per incident.
- Competitor: Philterd (philterd.ai), self-hosted PII/PHI redaction tooling since 2017, one-time handoff, built for engineering teams. Don't claim specifics about their product line beyond this unless confirmed.
- Founder: Robel, founder of LoadLogic, an AI systems agency. Enterprise client work required tooling that held up to real security scrutiny.
- If you need a stat, claim, testimonial, or client logo not listed here, leave the section honestly blank or ask, don't generate a plausible-sounding placeholder.

## Language Guardrail (non-negotiable)
The medicine-comparison feature must read as a clinical decision-support tool that presents options to a clinician, not as something that diagnoses or prescribes. Never imply autonomous clinical decision-making or regulatory clearance that hasn't been confirmed. If unsure how to phrase a claim, phrase it weaker, not stronger.

## UI & Component Standards (Anti-Slop Directive)
- **Primary Component System:** Shadcn UI primitives (`@/components/ui/button`, `@/components/ui/card`, `@/components/ui/badge`, `@/components/ui/tabs`, `@/components/ui/dialog`) combined with `lucide-react` icons and `framer-motion` for micro-interactions.
- **No glassmorphism.** No `backdrop-blur`, frosted panels, or translucent floating cards, this reads as generated, not designed. Get refinement from typography, spacing, and precise borders instead: solid card surfaces, 1px borders at low opacity, crisp hover states.
- No unstyled elements or raw basic HTML buttons.

## Brand Identity & Aesthetic Specs
- **Brand Name:** AegisMed AI
- **Positioning:** Total visibility over patient data exposure across clinical AI stacks.
- **Color Palette:**
  - Background (Obsidian Slate): `#0B131F`
  - Container / Card Surface (Charcoal Steel): `#1E293B`
  - Primary Accent (Surgical Teal): `#0D9488`
  - Success Metric (Verified Mint): `#10B981`
  - Alert / Risk Metric (Exposure Amber): `#F59E0B`
  - Foreground / Headers (Clinical White): `#F8FAFC`
  - Body Text (Slate Muted): `#94A3B8`
- **Typography:** `Plus Jakarta Sans` for headers, `JetBrains Mono` for badges/metrics. Not Inter, it's the default typeface of every AI-scaffolded SaaS page and undercuts a distinctive palette like this one.

## Technical Rules & Execution Policy
1. Framework: Next.js (App Router), Tailwind CSS, Framer Motion, Lucide React icons.
2. Helper Utility: Ensure `lib/utils.ts` exists with the standard `cn()` helper (`clsx` + `tailwind-merge`).
3. Component Fallback: Do NOT stop on interactive CLI prompts. If `npx shadcn` fails or hangs, manually write required UI components (`Button`, `Card`, `Badge`, `Tabs`) directly in `components/ui/` using Tailwind CSS, Radix UI primitives, and `clsx`.
4. Deployment Rules:
   - You are authorized to control production deployments using Vercel CLI with `$VERCEL_TOKEN`.
   - Test build locally via `npm run build` prior to running deployment commands.
   - Command: `npx vercel --prod --token=$VERCEL_TOKEN --yes`

## Before You Build
State your layout decision in one line, then build. Don't ask permission for aesthetic choices within these constraints, ask only when you're missing ground-truth content.