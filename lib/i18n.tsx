"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

type Dict = typeof dictionaries.pt;

export const dictionaries = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
    },
    hero: {
      badge: "Disponível para novos projetos",
      titleStart: "Olá, eu sou V.D. Silveira,",
      titleHighlight: "Blockchain Developer",
      description:
        "Construo soluções descentralizadas em Web3 — de smart contracts seguros a dApps completos. Bem-vindo ao meu portfólio, onde compartilho projetos e experiências.",
      ctaProjects: "Ver projetos",
      ctaContact: "Entrar em contato",
      stats: [
        { value: "4+", label: "Anos em Web3" },
        { value: "20+", label: "Smart contracts" },
        { value: "10+", label: "dApps entregues" },
      ],
      imageAlt:
        "Ilustração de V.D. Silveira, desenvolvedor Blockchain, com grafismos de rede on-chain",
    },
    about: {
      eyebrow: "// sobre mim",
      title: "Transformando ideias em protocolos descentralizados",
      p1: "Sou desenvolvedor Blockchain apaixonado por construir a próxima geração da internet. Trabalho com Solidity, EVM e todo o ecossistema Web3 para criar aplicações confiáveis e escaláveis.",
      p2: "Meu foco é unir engenharia sólida com boas experiências de usuário — desde a arquitetura de smart contracts até a interface final do dApp.",
      highlights: [
        {
          title: "Smart contracts seguros",
          text: "Solidity com foco em segurança, testes e auditoria antes do deploy.",
        },
        {
          title: "dApps full-stack",
          text: "Do contrato à interface, integrando carteiras e dados on-chain.",
        },
        {
          title: "DeFi & tokenização",
          text: "Protocolos, tokens ERC e mecânicas de incentivo on-chain.",
        },
      ],
    },
    skills: {
      eyebrow: "// stack",
      title: "Tecnologias que eu uso",
      description:
        "Ferramentas e linguagens que utilizo para construir soluções Web3 do contrato à interface.",
      groups: [
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
      ],
    },
    projects: {
      eyebrow: "// portfólio",
      title: "Projetos em destaque",
      description:
        "Uma seleção de soluções Web3 que construí, do smart contract à interface.",
      code: "Código",
      viewSite: "Ver site",
      items: [
        {
          badge: "Solana Hackathon",
          description:
            "Protocolo descentralizado na Solana que impulsiona a Creator Economy. Através de Clip Pools, influenciadores incentivam a criação de conteúdo com recompensas em SOL, usando oráculos para rastrear engajamento em tempo real (views, likes e comentários) e vincular a remuneração dos editores à performance.",
        },
        {
          description:
            "Gerador de chaves Bitcoin 100% client-side que cria carteiras determinísticas a partir de até 11 entradas personalizáveis (texto ou arquivos). Construído com Next.js e hashing BLAKE3, dando controle total sobre suas fontes de entropia.",
        },
        {
          description:
            "Demonstração prática e totalmente funcional da integração entre Inteligência Artificial e Blockchain para criar um produto digital inovador, cunhando NFTs gerados por IA com o padrão ERC-721 na Ethereum.",
        },
        {
          badge: "Open Source",
          description:
            "Contribuição open source para a Hyperledger: um substituto EVM-compatível para o ecossistema Hyperledger Indy, oferecendo suporte a credenciais verificáveis, DIDs (indy, sov, ethr) e registro AnonCreds sobre uma blockchain permissionada.",
        },
      ],
    },
    experience: {
      eyebrow: "// trajetória",
      title: "Experiência",
      description: "Um resumo da minha jornada construindo no ecossistema Web3.",
      present: "Presente",
      timeline: [
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
      ],
    },
    contact: {
      eyebrow: "// contato",
      title: "Vamos construir algo juntos",
      description:
        "Tem um projeto Web3 em mente ou quer trocar uma ideia? Estou sempre aberto a novas oportunidades e colaborações.",
      cta: "Enviar e-mail",
      footer: "Construído com Next.js & Tailwind CSS.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      badge: "Available for new projects",
      titleStart: "Hi, I'm V.D. Silveira,",
      titleHighlight: "Blockchain Developer",
      description:
        "I build decentralized Web3 solutions — from secure smart contracts to full dApps. Welcome to my portfolio, where I share my projects and experience.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      stats: [
        { value: "4+", label: "Years in Web3" },
        { value: "20+", label: "Smart contracts" },
        { value: "10+", label: "dApps shipped" },
      ],
      imageAlt:
        "Illustration of V.D. Silveira, Blockchain developer, with on-chain network graphics",
    },
    about: {
      eyebrow: "// about me",
      title: "Turning ideas into decentralized protocols",
      p1: "I'm a Blockchain developer passionate about building the next generation of the internet. I work with Solidity, the EVM and the whole Web3 ecosystem to create reliable, scalable applications.",
      p2: "My focus is combining solid engineering with great user experiences — from smart contract architecture to the final dApp interface.",
      highlights: [
        {
          title: "Secure smart contracts",
          text: "Solidity focused on security, testing and auditing before deploy.",
        },
        {
          title: "Full-stack dApps",
          text: "From the contract to the interface, integrating wallets and on-chain data.",
        },
        {
          title: "DeFi & tokenization",
          text: "Protocols, ERC tokens and on-chain incentive mechanics.",
        },
      ],
    },
    skills: {
      eyebrow: "// stack",
      title: "Technologies I use",
      description:
        "Tools and languages I use to build Web3 solutions from the contract to the interface.",
      groups: [
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
          title: "Tools",
          items: ["Git", "Ethers.js", "OpenZeppelin", "Chainlink", "MetaMask"],
        },
      ],
    },
    projects: {
      eyebrow: "// portfolio",
      title: "Featured projects",
      description:
        "A selection of Web3 solutions I've built, from the smart contract to the interface.",
      code: "Code",
      viewSite: "View site",
      items: [
        {
          badge: "Solana Hackathon",
          description:
            "A decentralized protocol on Solana that powers the Creator Economy. Through Clip Pools, influencers incentivize content creation with SOL rewards, using oracles to track real-time engagement (views, likes and comments) and tie editor compensation to performance.",
        },
        {
          description:
            "A 100% client-side Bitcoin key generator that creates deterministic wallets from up to 11 customizable inputs (text or files). Built with Next.js and BLAKE3 hashing, giving you full control over your entropy sources.",
        },
        {
          description:
            "A practical, fully functional demonstration of Artificial Intelligence and Blockchain integration to create an innovative digital product, minting AI-generated NFTs with the ERC-721 standard on Ethereum.",
        },
        {
          badge: "Open Source",
          description:
            "Open source contribution to Hyperledger: an EVM-compatible replacement for the Hyperledger Indy ecosystem, supporting verifiable credentials, DIDs (indy, sov, ethr) and AnonCreds registry over a permissioned blockchain.",
        },
      ],
    },
    experience: {
      eyebrow: "// journey",
      title: "Experience",
      description: "A summary of my journey building in the Web3 ecosystem.",
      present: "Present",
      timeline: [
        {
          role: "Blockchain Developer",
          company: "Web3 Projects",
          period: "2023 — Present",
          text: "Developing Solidity smart contracts, full-stack dApps and on-chain integrations focused on security and performance.",
        },
        {
          role: "Smart Contract Engineer",
          company: "DeFi & NFTs",
          period: "2022 — 2023",
          text: "Building DeFi protocols, ERC token contracts and NFT marketplaces, with automated testing and auditing.",
        },
        {
          role: "Frontend Developer",
          company: "Web / dApps",
          period: "2021 — 2022",
          text: "Building reactive interfaces in React and Next.js, integrating wallets and blockchain data.",
        },
      ],
    },
    contact: {
      eyebrow: "// contact",
      title: "Let's build something together",
      description:
        "Got a Web3 project in mind or want to chat? I'm always open to new opportunities and collaborations.",
      cta: "Send email",
      footer: "Built with Next.js & Tailwind CSS.",
    },
  },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (window.localStorage.getItem("lang") as Lang | null)
        : null;
    if (stored === "pt" || stored === "en") {
      setLangState(stored);
    } else if (typeof navigator !== "undefined") {
      setLangState(navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en");
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    }
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", next);
    }
  };

  const toggle = () => setLang(lang === "pt" ? "en" : "pt");

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle, t: dictionaries[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
