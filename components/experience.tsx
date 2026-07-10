"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const timeline = [
  {
    role: "Blockchain Developer",
    company: "Web3 Projects",
    period: "2023 — Presente",
    text: "Desenvolvimento de smart contracts em Solidity, dApps full-stack e integrações on-chain com foco em segurança e performance.",
  },
  {
    role: "Smart Contract Engineer",
    company: "DeFi & NFTs",
    period: "2022 — 2023",
    text: "Criação de protocolos DeFi, contratos de tokens ERC e marketplaces de NFT, com testes automatizados e auditoria.",
  },
  {
    role: "Frontend Developer",
    company: "Web / dApps",
    period: "2021 — 2022",
    text: "Construção de interfaces reativas em React e Next.js, integrando carteiras e dados de blockchain.",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// trajetória"
          title="Experiência"
          description="Um resumo da minha jornada construindo no ecossistema Web3."
        />

        <div className="mx-auto mt-14 max-w-2xl">
          {timeline.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative border-l border-border pb-10 pl-8 last:pb-0"
            >
              <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-primary">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {item.company}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
