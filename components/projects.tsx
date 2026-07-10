"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeading from "./section-heading";

const projects = [
  {
    title: "DeFi Lending Protocol",
    description:
      "Protocolo de empréstimos descentralizado com pools de liquidez, taxas dinâmicas e liquidação automática.",
    image: "/projects/defi.png",
    tags: ["Solidity", "Next.js", "wagmi"],
    repo: "https://github.com/vdsilveira",
    demo: "https://github.com/vdsilveira",
  },
  {
    title: "NFT Marketplace",
    description:
      "Marketplace completo para cunhar, listar e negociar NFTs com royalties on-chain e integração IPFS.",
    image: "/projects/nft.png",
    tags: ["ERC-721", "IPFS", "React"],
    repo: "https://github.com/vdsilveira",
    demo: "https://github.com/vdsilveira",
  },
  {
    title: "DAO Governance",
    description:
      "Plataforma de governança com propostas, votação por token e gestão de tesouraria transparente.",
    image: "/projects/dao.png",
    tags: ["Governor", "OpenZeppelin", "TypeScript"],
    repo: "https://github.com/vdsilveira",
    demo: "https://github.com/vdsilveira",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// portfólio"
          title="Projetos em destaque"
          description="Uma seleção de soluções Web3 que construí, do smart contract à interface."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={`Captura do projeto ${p.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                  <Link
                    href={p.repo}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <FiGithub className="h-4 w-4" />
                    Código
                  </Link>
                  <Link
                    href={p.demo}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <FiExternalLink className="h-4 w-4" />
                    Demo
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
