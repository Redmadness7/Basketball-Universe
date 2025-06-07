// History Data Model and Utilities

export const ClubSeason = {
  year: 2024,
  standings: 1,
  winPct: 0.78,
  playoffs: "Champions",
  championships: 1,
  stats: {
    points: 8120,
    rebounds: 3890,
    assists: 2124,
    efficiency: 115.7,
  },
  awards: [
    { type: "MVP", player: "Giannis Antetokounmpo" },
    { type: "Coach of the Year", coach: "Dimitris Karalis" },
    { type: "Rookie of the Year", player: "Lucas Gomez" },
  ],
  milestones: ["2024: First title"],
};

export const NationalHistory = {
  team: "Greece",
  tournaments: [
    { name: "Olympics", year: 2025, medal: "Gold", keyGame: "Final vs. France, 88-81" },
    { name: "World Cup", year: 2024, medal: "Bronze", keyGame: "Bronze vs. USA, 77-75" },
  ],
  stats: {
    internationalPPG: 84.2,
    winPct: 0.68,
    keyPerformers: [
      { name: "Giannis Antetokounmpo", ppg: 27.5 },
      { name: "Lucas Gomez", ppg: 18.2 },
    ],
  },
  rankings: [
    { year: 2023, rank: 10 },
    { year: 2024, rank: 7 },
    { year: 2025, rank: 3 },
  ],
  milestones: [
    "2024: First World Cup medal",
    "2025: Olympic gold",
  ],
};

export function getClubHistorySummary(records) {
  return records.map(season =>
    `Year: ${season.year} | Standings: ${season.standings} | Win%: ${(season.winPct * 100).toFixed(1)} | Playoffs: ${season.playoffs} | Championships: ${season.championships}\n` +
    `Stats: Pts ${season.stats.points}, Reb ${season.stats.rebounds}, Ast ${season.stats.assists}, Eff ${season.stats.efficiency}\n` +
    `Awards: ${season.awards.map(a => (a.type + (a.player ? ` - ${a.player}` : ` - ${a.coach}`))).join("; ")}\n` +
    `Milestones: ${season.milestones.join(", ")}`
  );
}

export function getNationalHistorySummary(natHistory) {
  let tourneys = natHistory.tournaments.map(
    t => `${t.year} ${t.name}: ${t.medal} (${t.keyGame})`
  ).join("; ");
  let performers = natHistory.stats.keyPerformers.map(
    kp => `${kp.name} (${kp.ppg} PPG)`
  ).join(", ");
  let rankings = natHistory.rankings.map(
    r => `${r.year}: #${r.rank}`
  ).join(", ");
  let milestones = natHistory.milestones.join(", ");
  return [
    `Tournaments: ${tourneys}`,
    `Stats: Intl PPG ${natHistory.stats.internationalPPG}, Win% ${(natHistory.stats.winPct * 100).toFixed(1)}, Key: ${performers}`,
    `Rankings: ${rankings}`,
    `Milestones: ${milestones}`
  ];
}