// Analytics Data Model and Utilities

export const TeamStats = {
  year: 2025,
  name: "Athens Titans",
  pace: 97.2,
  offEff: 118.5,
  defEff: 110.1,
  tovRate: 12.8,
  efg: 54.2,
};

export const PlayerStats = {
  name: "Giannis Antetokounmpo",
  usage: 31.5,
  ts: 64.1,
  plusMinus: 8.3,
  synergy: 92,
};

export const OpponentReport = {
  name: "Tokyo Suns",
  weak: ["rebounds", "transition D"],
  strong: ["three-point shooting", "pace"],
};

export const NationalStats = {
  team: "Greece",
  tournament: "Olympics 2024",
  efficiency: 116.4,
  synergy: 85,
  fibaStats: { fastBreak: 14, turnovers: 9 },
};

export const Rankings = [
  { year: 2024, rank: 8 },
  { year: 2025, rank: 5 },
];

export function getTeamMetrics(teamStats) {
  return [
    `Pace: ${teamStats.pace}`,
    `Off Eff: ${teamStats.offEff}`,
    `Def Eff: ${teamStats.defEff}`,
    `Turnover Rate: ${teamStats.tovRate}%`,
    `eFG%: ${teamStats.efg}`,
  ];
}

export function getPlayerMetrics(playerStats) {
  return [
    `Usage Rate: ${playerStats.usage}%`,
    `TS%: ${playerStats.ts}%`,
    `Plus/Minus: ${playerStats.plusMinus}`,
    `Lineup Synergy: ${playerStats.synergy}`,
  ];
}

export function getOpponentReport(report) {
  return `Scouting: ${report.name} - Weak: ${report.weak.join(", ")} | Strong: ${report.strong.join(", ")}`;
}

export function getNationalMetrics(natStats) {
  return [
    `Efficiency: ${natStats.efficiency}`,
    `Synergy: ${natStats.synergy}`,
    `FIBA: Fast-break Pts: ${natStats.fibaStats.fastBreak}, TOs: ${natStats.fibaStats.turnovers}`,
  ];
}

export function getRankingTrends(rankings) {
  if (rankings.length < 2) return "No trend data.";
  let change = rankings[rankings.length - 1].rank - rankings[0].rank;
  return `Ranking trend: ${rankings[0].year} (Rank ${rankings[0].rank}) → ${rankings[rankings.length - 1].year} (Rank ${rankings[rankings.length - 1].rank}) | Change: ${change > 0 ? "+" : ""}${change}`;
}

export function getTradeProjection({ offense = 5, defense = -3 }) {
  return `Trade projection: Offense +${offense}%, Defense ${defense >= 0 ? "+" : ""}${defense}%`;
}

export function getDraftFit({ position = "PG", chemistry = 3 }) {
  return `Draft fit: ${position} adds +${chemistry}% Chemistry`;
}

export function compareSeasons(season1, season2) {
  let offChange = season2.offEff - season1.offEff;
  return `Historical trend: ${season2.year}: Off Eff ${season2.offEff} (${offChange > 0 ? "+" : ""}${offChange} vs. ${season1.year})`;
}

export function filterAnalytics(data, { type, value }) {
  return data.filter(item => item[type] === value);
}

const analystComments = [
  "Lineup X dominates with synergy!",
  "Team’s pace wears down opponents.",
  "Clutch defense sealed the win.",
  "Star’s clutch stats shine.",
];
export function getAnalystCommentary() {
  return analystComments[Math.floor(Math.random() * analystComments.length)];
}

const dataStories = [
  "Data Story: Star’s clutch stats shine when it matters most.",
  "Insight: Bench lineup outscored starters in the 2nd quarter.",
  "Trend: Defensive efficiency up 8% since midseason trade.",
];
export function getDataStory() {
  return dataStories[Math.floor(Math.random() * dataStories.length)];
}

const randomAnalyticsEvents = [
  { desc: "New analytics tool! +10% accuracy.", effect: { accuracy: 10 } },
  { desc: "Stat system bug -5% efficiency data.", effect: { efficiency: -5 } },
  { desc: "Analyst workshop: +7% better projections.", effect: { projections: 7 } },
];
export function getRandomAnalyticsEvent() {
  return randomAnalyticsEvents[Math.floor(Math.random() * randomAnalyticsEvents.length)];
}