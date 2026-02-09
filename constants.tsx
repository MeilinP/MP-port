
import { Project, Experiences, Education } from './types';

export const EDUCATION: Education[] = [
  {
    institution: "University of Southern California (USC)",
    location: "Los Angeles, CA",
    degree: "Master of Science in Applied Data Science",
    period: "Jan 2024 - Jan 2026",
    coursework: ["Applied Machine Learning", "Data Mining", "Database System Architecture"]
  },
  {
    institution: "University of California, Santa Barbara (UCSB)",
    location: "Goleta, CA",
    degree: "Bachelor of Science in Statistics and Data Science",
    period: "Sep 2019 - Mar 2023",
    coursework: ["Probability Theory", "Mathematical Statistics", "Advanced Calculus", "Derivative Market"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "High-Sharpe Deep Learning Options Trading Strategy",
    year: "2026",
    link: "https://github.com/MeilinP/Deeplearning-option",
    tags: ["Python", "Deep Learning", "Options Trading", "Backtesting"],
    imageUrl: "/dl_options.png",
    description: [
      "Developed an end-to-end deep learning options trading system; CNN outperformed Linear, MLP, and LSTM models with Sharpe 20.21, 38.99% total return, and −0.18% max drawdown.",
      "Achieved 27.68% annualized return with 1.37% annualized volatility across 287 trades, demonstrating exceptional risk-adjusted performance.",
      "Incorporated turnover penalties and transaction cost awareness, maintaining Sharpe ~17.6–17.8 at ~0.95 turnover, validating robustness under realistic execution constraints."
    ],
    imagePlaceholder: "Deep Learning Options Backtest"
},
  {
    title: "Extracting Alpha from Financial News",
    year: "2025",
    link: "https://github.com/MeilinP/FinBERT_Sentiment_Analysis_on_SP500Constitutes",
    tags: ["Python", "FinBERT", "NLP", "Quant Finance"],
    imageUrl: "/sentiment.png", 
    description: [
      "Built sentiment signal from 330K+ financial headlines using FinBERT; achieved 0.71% daily IC.",
      "Validated alpha through Fama-French 3-factor regression — 15% annualized alpha.",
      "Optimized strategy; weekly rebalancing with 5+ article threshold yielded Sharpe 1.26."
    ],
    imagePlaceholder: "Sentiment Analysis Dashboard"
  },
  {
    title: "Options Pricing & Greeks Engine",
    year: "2025",
    link: "https://options-pricing-calculator.vercel.app",
    tags: ["React", "TypeScript", "Black-Scholes"],
    imageUrl: "/options.png",
    description: [
      "Engineered an Options Pricing Calculator integrating Black-Scholes and Monte Carlo models.",
      "Developed a comprehensive Greeks Engine for real-time risk sensitivity analysis."
    ],
    imagePlaceholder: "Options Pricing UI"
  },
  {
    title: "SPY Volatility Surface Visualizer",
    year: "2025",
    link: "https://volatility-surface-mp.streamlit.app/",
    tags: ["Python", "Streamlit", "Plotly"],
    imageUrl: "/demo.gif",
    description: [
      "Interactive dashboard visualizing the implied volatility surface for SPY options.",
      "Analyzes term structure and volatility skew across multiple expirations."
    ],
    imagePlaceholder: "3D Volatility Plot"
  },
  {
  title: "Algorithmic Trading Bot (Lumibot)",
  year: "2025",
  tags: ["Python", "Lumibot", "Quant Trading", "Backtesting"],
  imageUrl: "",
  description: [
    "Developed an end-to-end algorithmic trading bot using Lumibot, integrating Polygon market data and Alpaca brokerage APIs.",
    "Implemented rule-based trading strategies using technical indicators (EMA, RSI, Bollinger Bands) with configurable risk management, stop-loss, and take-profit logic.",
    "Conducted historical backtesting and paper trading to evaluate performance metrics including PnL, Sharpe ratio, and maximum drawdown."
  ],
  imagePlaceholder: "Trading Strategy Backtest"
},
  {
  title: "Market Regime Identifer & Backtesting",
  year: "2025",
  link: "https://github.com/MeilinP/market-regime-identifier/tree/main", 
  tags: ["Python", "Market Regimes", "Technical Analysis", "Backtesting"],
  imageUrl: "/spy_market_regimes.png", 
  description: [
    "Explores regime-aware trading signals with lightweight backtests and visualizations highlighting trend vs range market conditions.",
    "Implements ADX- and EMA-based regime classification to switch between mean-reversion (RSI) and breakout-style entry logic.",
    "Used as a regime filter for option trading strategies, dynamically sizing down exposure outside bullish market regimes."
  ],
  imagePlaceholder: "Market Regime & Entry Visualizations"
},
  {
  title: "Market Tempo: Music & Market Time-Series Analysis",
  year: "2025",
  link: "https://github.com/MeilinP/market-tempo/tree/main", 
  tags: ["Python", "Time Series", "Signal Processing", "Quant Research"],
  imageUrl: "/market-tempo.png", 
  description: [
    "Exploratory research project analyzing structural similarities between jazz audio features and S&P 500 market dynamics.",
    "Engineered cross-domain time-series features (energy, momentum, volatility) and aligned musical tempo with market time scales.",
    "Applied autocorrelation-based cycle detection and correlation analysis to study periodicity and regime behavior.",
    "Check it out at: https://market-tempo.vercel.app"
  ],
  imagePlaceholder: "Music vs Market Time-Series"
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
  },
  {
  company: "University of California, Santa Barbara (DSP)",
  role: "Academic Notetaker",
  location: "Santa Barbara, CA",
  period: "Sept 2021 – June 2022",
  points: [
  "Produced high-quality, structured lecture notes for CS9 (Intermediate Python) to support students registered with the Disabled Students Program."
],
  link: "https://ucsb-cs9.github.io/w24/"
}
];

export const SKILLS = {
  programming: ["Python", "Scikit-learn", "PySpark", "TensorFlow", "PyTorch", "C++", "R", "SQL"],
  modeling: ["RNN/LSTM", "ARIMA/GARCH", "Stochastic Calculus", "Monte-Carlo", "BSM", "VaR/CVaR"],
  cloud: ["AWS", "Google Cloud Platform (GCP)", "Docker", "REST APIs", "Git"]
};
