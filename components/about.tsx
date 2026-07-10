"use client";

import { motion } from "framer-motion";
import { FiBox, FiShield, FiZap } from "react-icons/fi";

const highlights = [
  {
    icon: FiShield,
    title: "Smart contracts seguros",
    text: "Solidity com foco em segurança, testes e auditoria antes do deploy.",
  },
  {
    icon: FiBox,
    title: "dApps full-stack",
    text: "Do contrato à interface, integrando carteiras e dados on-chain.",
  },
  {
    icon: FiZap,
    title: "DeFi & tokenização",
    text: "Protocolos, tokens ERC e mecânicas de incentivo on-chain.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-sm font-medium text-primary">
              // sobre mim
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Transformando ideias em protocolos descentralizados
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Sou desenvolvedor Blockchain apaixonado por construir a próxima
                geração da internet. Trabalho com Solidity, EVM e todo o
                ecossistema Web3 para criar aplicações confiáveis e escaláveis.
              </p>
              <p>
                Meu foco é unir engenharia sólida com boas experiências de
                usuário — desde a arquitetura de smart contracts até a interface
                final do dApp.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <h.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {h.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
