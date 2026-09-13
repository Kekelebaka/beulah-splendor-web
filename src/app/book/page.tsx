import type { Metadata } from "next";
import BookWizard from "./BookWizard";

export const metadata: Metadata = {
  title: "Book Your Time",
  description:
    "Request a private appointment at Beulah Splendor. Choose your treatment, preferred date and time, and Beula will confirm via WhatsApp.",
  openGraph: {
    title: "Book Your Time | Beulah Splendor",
    description:
      "Request a private appointment at Beulah Splendor in Pretoria.",
  },
};

export default function BookPage() {
  return <BookWizard />;
}
