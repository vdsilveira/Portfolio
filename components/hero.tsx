"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const stats = [
  { value: "4+", label: "Anos em Web3" },
  { value: "20+", label: "Smart contracts" },
  { value: "10+", label: "dApps entregues" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pt-28 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Disponível para novos projetos
          </span>

          <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Olá, eu sou Vinicius,{" "}
            <span className="text-gradient">Blockchain Developer</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Construo soluções descentralizadas em Web3 — de smart contracts
            seguros a dApps completos. Bem-vindo ao meu portfólio, onde
            compartilho projetos e experiências.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow"
            >
              Ver projetos
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary"
            >
              <FiDownload className="h-4 w-4" />
              Entrar em contato
            </Link>
          </div>

          <div className="mt-14 grid max-w-lg grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-foreground">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto max-w-sm lg:mx-0 lg:justify-self-end"
        >
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-primary/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card">
            <Image
              src="/perfil.png"
              alt="Ilustração de Vinicius, desenvolvedor Blockchain, com grafismos de rede on-chain"
              width={640}
              height={640}
              priority
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
