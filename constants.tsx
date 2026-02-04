
import React from 'react';
import { Project, Experience, Education } from './types';

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
    tags: ["Python", "FinBERT", "NLP", "Quant Finance", "NLP"],
    description: [
      "Built sentiment signal from 330K+ financial headlines (S&P 500, 2009–2020) using FinBERT; achieved 0.71% daily IC with 52% hit rate",
      "Validated alpha through Fama-French 3-factor regression — 15% annualized alpha (t=2.73) after controlling for market, size, and value",
      "Optimized strategy across rebalancing frequencies and news filters; weekly rebalancing with 5+ article threshold yielded Sharpe 1.26",
      "Engineered GPU-accelerated NLP pipeline with checkpoint-based processing on Colab T4"
    ],
    imagePlaceholder: "Screenshot of sentiment analysis dashboard and alpha curve"
  },
  {
    title: "Options Pricing Calculator & Greeks Engine",
    year: "2024",
    link: "https://options-pricing-calculator.vercel.app",
    tags: ["React", "TypeScript", "Black-Scholes", "Monte Carlo", "Binomial Trees"],
    description: [
      "Engineered an Options Pricing Calculator integrating Black-Scholes, Monte Carlo simulation, and Binomial Tree Models",
      "Developed a comprehensive Greeks Calculation Engine (Delta, Gamma, Vega, Theta, Rho) to analyze sensitivities",
      "Designed and deployed a real-time pricing interface with dynamically adjustable parameters for risk management training"
    ],
    imagePlaceholder: "Screenshot of Options Pricing Calculator UI"
  },
  {
    title: "SPY Volatility Surface Visualizer",
    year: "2024",
    link: "https://volatility-surface-mp.streamlit.app/#spy-volatility-surface-options-starter",
    tags: ["Python", "Streamlit", "Financial Modeling", "Data Visualization", "Volatility"],
    description: [
      "Interactive dashboard visualizing the implied volatility surface for SPY options",
      "Implemented smooth surface interpolation and Greeks surface visualization using Plotly/Streamlit",
      "Analyzes term structure and volatility skew across multiple expirations"
    ],
    imagePlaceholder: "Screenshot of Volatility Surface 3D Plot"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Namefi.io",
    role: "Market Data Analyst Intern",
    location: "Palo Alto, CA",
    period: "July 2023 – Dec 2023",
    points: [
      "Engineered end-to-end Web3 analytics pipeline leveraging Dune Analytics SQL to process 2-10TB of DNS transaction data",
      "Analyzed market microstructure patterns of domain trading using statistical techniques to isolate key drivers of demand",
      "Created real-time Dune Analytics dashboards for executive leadership, reducing reporting time by 1 hour daily"
    ]
  }
];

export const SKILLS = {
  programming: ["Python", "Scikit-learn", "PySpark", "TensorFlow", "PyTorch", "BackTrader", "C++", "R", "SQL"],
  modeling: ["RNN/LSTM", "ARIMA/GARCH", "Stochastic Calculus", "Monte-Carlo", "BSM", "VaR/CVaR"],
  cloud: ["AWS", "Google Cloud Platform (GCP)", "Docker", "REST APIs", "Git"]
};
