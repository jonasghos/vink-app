import type { Metadata } from "next";
import { AlternativeLanding } from "@/components/landing-alt/AlternativeLanding";
import "./vink-alt.css";

export const metadata: Metadata = {
  title: "Vink — Versión alternativa",
  description:
    "Vink conoce tu negocio, piensa qué comunicar y crea contenido para tus redes. Vos revisás, ajustás y aprobás.",
};

export default function AlternativeLandingPage() {
  return <AlternativeLanding />;
}
