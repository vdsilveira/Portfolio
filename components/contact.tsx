"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contato" className="border-t border-border py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />

          <span className="font-mono text-sm font-medium text-primary">
            // contato
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Vamos construir algo juntos
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Tem um projeto Web3 em mente ou quer trocar uma ideia? Estou sempre
            aberto a novas oportunidades e colaborações.
          </p>

          <Link
            href="mailto:contato@vdsilveira.dev"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow"
          >
            <FiMail className="h-4 w-4" />
            Enviar e-mail
          </Link>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="https://github.com/vdsilveira"
              target="_blank"
              aria-label="GitHub"
              className="rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <FiGithub className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vdsilveira/"
              target="_blank"
              aria-label="LinkedIn"
              className="rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <FiLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vinicius Silveira. Construído com Next.js
          &amp; Tailwind CSS.
        </footer>
      </div>
    </section>
  );
}
