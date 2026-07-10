"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const groups = [
  {
    title: "Blockchain",
    items: ["Solidity", "Ethereum / EVM", "Hardhat", "Foundry", "The Graph"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "wagmi / viem"],
  },
  {
    title: "Backend & Infra",
    items: ["Node.js", "IPFS", "PostgreSQL", "Docker", "The RPC / Alchemy"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "Ethers.js", "OpenZeppelin", "Chainlink", "MetaMask"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// stack"
          title="Tecnologias que eu uso"
          description="Ferramentas e linguagens que utilizo para construir soluções Web3 do contrato à interface."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
