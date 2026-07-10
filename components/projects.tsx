"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeading from "./section-heading";

const projects = [
  {
    title: "SolCuts",
    badge: "Solana Hackathon",
    description:
      "Protocolo descentralizado na Solana que impulsiona a Creator Economy. Através de Clip Pools, influenciadores incentivam a criação de conteúdo com recompensas em SOL, usando oráculos para rastrear engajamento em tempo real (views, likes e comentários) e vincular a remuneração dos editores à performance.",
    image: "/projects/solcuts.png",
    tags: ["Solana", "Rust", "Oráculos", "Next.js"],
    repo: "https://github.com/vdsilveira/SOLCUTS_colosseum_Hackathon",
    demo: "https://d-app-frontend-colosseum-hackathon.vercel.app/",
  },
  {
    title: "Deterministic.Online",
    description:
      "Gerador de chaves Bitcoin 100% client-side que cria carteiras determinísticas a partir de até 11 entradas personalizáveis (texto ou arquivos). Construído com Next.js e hashing BLAKE3, dando controle total sobre suas fontes de entropia.",
    image: "/projects/deterministic.png",
    tags: ["Bitcoin", "BLAKE3", "Next.js", "Client-side"],
    repo: "https://github.com/vdsilveira/Deterministic.Online",
    demo: "https://deterministic.online/",
  },
  {
    title: "NFT 4U — AI Generated NFT Creator",
    description:
      "Demonstração prática e totalmente funcional da integração entre Inteligência Artificial e Blockchain para criar um produto digital inovador, cunhando NFTs gerados por IA com o padrão ERC-721 na Ethereum.",
    image: "/projects/nft4u.png",
    tags: ["ERC-721", "Ethereum", "IA", "Solidity"],
    repo: "https://github.com/vdsilveira/NFT4U-AIGeneratedAssets",
    demo: null,
  },
  {
    title: "indy-besu",
    badge: "Open Source",
    description:
      "Contribuição open source para a Hyperledger: um substituto EVM-compatível para o ecossistema Hyperledger Indy, oferecendo suporte a credenciais verificáveis, DIDs (indy, sov, ethr) e registro AnonCreds sobre uma blockchain permissionada.",
    image: "/projects/indy-besu.png",
    tags: ["Hyperledger", "Besu", "DID", "AnonCreds"],
    repo: "https://github.com/vdsilveira/indy-besu",
    demo: null,
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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                {p.badge && (
                  <span className="absolute left-4 top-4 rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                    {p.badge}
                  </span>
                )}
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
                  {p.demo && (
                    <Link
                      href={p.demo}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      <FiExternalLink className="h-4 w-4" />
                      Ver site
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
