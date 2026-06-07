export class Project {
  constructor({ id, name, codename, status, description, features, modules, tags }) {
    this.id = id;
    this.name = name;
    this.codename = codename;
    this.status = status;
    this.description = description;
    this.features = features;
    this.modules = modules;
    this.tags = tags;
    this.createdAt = new Date().toISOString();
  }
}

export const projectsData = [
  {
    id: 'caliper-a1',
    name: 'Agent Caliper_A1-Construct',
    codename: 'Newborn Semantic Oracle',
    status: 'active',
    phase: 'Genesis',
    description: `A newborn semantic-capable global memory fetcher that transcends traditional retrieval systems. Caliper_A1 measures, indexes, and retrieves knowledge across the entire semantic spectrum — understanding context, intent, and relational meaning between data points across distributed memory architectures. Built as an MCP-native agent with full spectrum/scope of integrational capabilities and comprehensive MCP tools utilization, operating as a local DevSecOps Orchestrator that automates security pipelines, deployment workflows, and infrastructure management.`,
    features: [
      {
        icon: '🧠',
        name: 'Semantic Memory Engine',
        description: 'Global memory fetcher with contextual understanding. Retrieves not just data, but meaning — connecting concepts across vast knowledge graphs.'
      },
      {
        icon: '🔗',
        name: 'MCP Full Spectrum',
        description: 'Complete Model Context Protocol integration. Every tool, every capability, every scope — natively orchestrated through unified MCP interface.'
      },
      {
        icon: '🛡️',
        name: 'DevSecOps Orchestrator',
        description: 'Local-first security orchestration. Automated pipelines for CI/CD, vulnerability scanning, compliance checks, and zero-trust deployment.'
      },
      {
        icon: '🌐',
        name: 'Global Fetch Protocol',
        description: 'Distributed memory retrieval across federated sources. Semantic indexing with real-time synchronization and conflict resolution.'
      },
      {
        icon: '⚙️',
        name: 'MCP Tool Maestro',
        description: 'Dynamic tool composition and chaining. Automatically selects, sequences, and executes MCP tools based on semantic task analysis.'
      },
      {
        icon: '🔬',
        name: 'Self-Evolving Construct',
        description: 'Newborn architecture that learns and adapts. Expands its semantic vocabulary and tool proficiency through continuous interaction.'
      }
    ],
    modules: [
      {
        id: 'module-ii',
        number: 'II',
        title: 'Semantic Cognition Layer',
        description: 'The neural substrate of Caliper_A1. Processes natural language queries through multi-dimensional semantic space, understanding nuance, metaphor, and implicit relationships between concepts.',
        tags: ['NLP', 'Knowledge Graph', 'Embeddings', 'RAG']
      },
      {
        id: 'module-iii',
        number: 'III',
        title: 'MCP Integration Matrix',
        description: 'Full-spectrum MCP tool orchestration engine. Maps every available Model Context Protocol tool into a unified operational matrix for seamless agent-driven automation.',
        tags: ['MCP', 'Tool Registry', 'API Mesh', 'Protocol']
      },
      {
        id: 'module-iv',
        number: 'IV',
        title: 'DevSecOps Automata',
        description: 'Local-first orchestration layer for continuous security. Integrates SAST, DAST, container scanning, and compliance validation into autonomous deployment pipelines.',
        tags: ['CI/CD', 'SAST/DAST', 'Zero-Trust', 'K8s']
      },
      {
        id: 'module-v',
        number: 'V',
        title: 'Global Memory Fabric',
        description: 'Distributed semantic memory network. Federated knowledge storage with vector similarity search, temporal versioning, and cross-source correlation capabilities.',
        tags: ['Vector DB', 'Federation', 'CRDT', 'Sync']
      }
    ],
    tags: ['AI Agent', 'MCP', 'DevSecOps', 'Semantic Memory', 'Autonomous'],
    stats: {
      mcpTools: 47,
      semanticScope: '∞',
      autonomy: '24/7',
      securityPosture: '0-Day'
    }
  }
];
