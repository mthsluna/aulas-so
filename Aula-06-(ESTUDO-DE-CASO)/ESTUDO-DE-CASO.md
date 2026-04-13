# Estudo de Caso I: Reestruturação de Infraestrutura - DevStore

## 1. Introdução
[cite_start]A **DevStore** é uma startup focada no desenvolvimento de sites que, atualmente, enfrenta gargalos críticos em sua operação[cite: 9]. [cite_start]O crescimento da empresa está limitado pelo uso de servidores locais sem padronização e pela falta de processos modernos no pipeline de desenvolvimento[cite: 10, 15].

[cite_start]Este projeto propõe uma nova arquitetura baseada em conceitos de **Sistemas Operacionais, Virtualização, Containerização e Computação em Nuvem** para garantir escalabilidade, segurança e eficiência[cite: 14].

## 2. Cenário Atual vs. Proposta

### 2.1 Problemas Identificados
* [cite_start]**Servidores Locais:** Falta de padronização no gerenciamento[cite: 10].
* [cite_start]**Pipeline de Desenvolvimento:** Código produzido diretamente na máquina do desenvolvedor, sem versionamento ou testes[cite: 19].
* [cite_start]**Escalabilidade:** Infraestrutura física rígida que dificulta o crescimento sustentável[cite: 9, 15].

### 2.2 Fluxo de Trabalho Proposto
[cite_start]O novo fluxo visa reduzir a dependência de servidores locais e automatizar o ambiente de desenvolvimento[cite: 25].

```mermaid
graph LR
    A[Desenvolvedor] --> B(Versionamento / Git)
    B --> C{Ambiente de Teste}
    C -->|Virtualização| D[VMs de Teste Isoladas]
    C -->|Docker| E[Containers Padronizados]
    D --> F[Validação]
    E --> F
    F --> G[Produção: Nuvem AWS]	