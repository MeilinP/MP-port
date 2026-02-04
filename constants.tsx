
import React from 'react';
import { Project, Experience, Education } from './types';

// Robustly resolve project images using current file location context
const getImageUrl = (path: string) => new URL(`./${path}`, import.meta.url).href;

export const EDUCATION: Education[] = [
  {
    institution: "University of Southern California (USC)",
    location: "Los Angeles, CA",
    degree: "Master of Science in Applied Data Science",
    period: "Expected Graduation Jan 2026",
    coursework: ["Applied Machine Learning", "Data Mining", "Database System Architecture"]
  },
  {
    institution: "University of California, Santa Barbara (UCSB)",
    location: "Goleta, CA",
    degree: "Bachelor of Science in Statistics and Data Science",
    period: "March 2023",
    gpa: "3.6/4.0 (Dean’s List)",
    coursework: ["Probability Theory", "Mathematical Statistics", "Advanced Calculus", "Derivative Market"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Extracting Alpha from Financial News",
    year: "2025",
    tags: ["Python", "FinBERT", "NLP", "Quant Finance"],
    imageUrl: getImageUrl("components/sentiment.png"), 
    description: [
      "Built sentiment signal from 330K+ financial headlines using FinBERT; achieved 0.71% daily IC.",
      "Validated alpha through Fama-French 3-factor regression — 15% annualized alpha.",
      "Optimized strategy; weekly rebalancing with 5+ article threshold yielded Sharpe 1.26."
    ],
    imagePlaceholder: "Sentiment Analysis Dashboard"
  },
  {
    title: "Options Pricing & Greeks Engine",
    year: "2024",
    link: "https://options-pricing-calculator.vercel.app",
    tags: ["React", "TypeScript", "Black-Scholes"],
    imageUrl: getImageUrl("components/options.png"),
    description: [
      "Engineered an Options Pricing Calculator integrating Black-Scholes and Monte Carlo models.",
      "Developed a comprehensive Greeks Engine for real-time risk sensitivity analysis."
    ],
    imagePlaceholder: "Options Pricing UI"
  },
  {
    title: "SPY Volatility Surface Visualizer",
    year: "2024",
    link: "https://volatility-surface-mp.streamlit.app/",
    tags: ["Python", "Streamlit", "Plotly"],
    imageUrl: getImageUrl("components/demo.gif"),
    description: [
      "Interactive dashboard visualizing the implied volatility surface for SPY options.",
      "Analyzes term structure and volatility skew across multiple expirations."
    ],
    imagePlaceholder: "3D Volatility Plot"
  },
  {
    title: "HFT Order Book Simulator",
    year: "2024",
    tags: ["C++", "Market Microstructure"],
    imageUrl: "", 
    description: [
      "Developed a high-performance LOB simulator to analyze price impact and liquidity provision.",
      "Implemented basic market-making algorithms and tested back-off strategies during volatility."
    ],
    imagePlaceholder: "Order Book Visualization"
  },
  {
    title: "Portfolio Risk Management Tool",
    year: "2023",
    tags: ["Python", "VaR", "Optimization"],
    imageUrl: "", 
    description: [
      "Built a tool to calculate Value-at-Risk (VaR) and CVaR for multi-asset portfolios.",
      "Implemented Mean-Variance optimization with custom constraints for sector exposure."
    ],
    imagePlaceholder: "Risk Analysis Report"
  },
  {
    title: "Crypto Arbitrage Bot",
    year: "2023",
    tags: ["Node.js", "WebSockets", "Arbitrage"],
    imageUrl: "", 
    description: [
      "Identified triangular arbitrage opportunities across DEXs using real-time price feeds.",
      "Optimized execution speed using custom WebSocket handlers to minimize slippage."
    ],
    imagePlaceholder: "Execution Logs"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Namefi.io",
    role: "Market Data Analyst Intern",
    location: "Palo Alto, CA",
    period: "July 2023 – Dec 2023",
    points: [
      "Engineered end-to-end Web3 analytics pipeline leveraging Dune Analytics SQL.",
      "Analyzed market microstructure patterns of domain trading using statistical techniques.",
      "Created real-time Dune Analytics dashboards for executive leadership."
    ]
  }
];

export const SKILLS = {
  programming: ["Python", "Scikit-learn", "PySpark", "TensorFlow", "PyTorch", "C++", "R", "SQL"],
  modeling: ["RNN/LSTM", "ARIMA/GARCH", "Stochastic Calculus", "Monte-Carlo", "BSM", "VaR/CVaR"],
  cloud: ["AWS", "Google Cloud Platform (GCP)", "Docker", "REST APIs", "Git"]
};
