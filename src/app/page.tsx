import React from "react";
import Link from "next/link";
import { Section, Heading, Card } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandDifference } from "@/components/home/BrandDifference";
import { CustomerNeeds } from "@/components/home/CustomerNeeds";
import { SignatureExperience } from "@/components/home/SignatureExperience";
import { MeetBeula } from "@/components/home/MeetBeula";
import { NatureSection } from "@/components/home/NatureSection";
import { WellnessSection } from "@/components/home/WellnessSection";
import { TalksPreview } from "@/components/home/TalksPreview";
import { ProofSection } from "@/components/home/ProofSection";
import { CapacitySection } from "@/components/home/CapacitySection";
import { CircleSection } from "@/components/home/CircleSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd()),
        }}
      />
      <HeroSection />
      <BrandDifference />
      <CustomerNeeds />
      <SignatureExperience />
      <MeetBeula />
      <NatureSection />
      <WellnessSection />
      <TalksPreview />
      <ProofSection />
      <CapacitySection />
      <CircleSection />
      <FinalCTA />
    </>
  );
}
