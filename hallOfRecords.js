// Hall of Records Data Model and Utilities

export const Player = {
  id: 1,
  name: "Giannis Antetokounmpo",
  clubPoints: 14500,
  ppgSeasons: [
    { year: 2020, ppg: 21.5 },
    { year: 2021, ppg: 22.3 },
    { year: 2022, ppg: 20.9 },
    { year: 2023, ppg: 21.0 },
    { year: 2024, ppg: 20.8 },
  ],
  medals: [
    { tournament: "Olympics", medal: "Gold", year: 2025 },
    { tournament: "World Cup", medal: "Bronze", year: 2024 },
    { tournament: "Olympics", medal: "Silver", year: 2021 },
  ],
  retiredJersey: { number: 34, stats: "22,000 points, 12,000 rebounds" },
};

export const Coach = {
  id: 1,
  name: "Dimitris Karalis",
  championships: [2016, 2019, 2021, 2023, 2024],
  seasons: [
    { year: 2015, winPct: 0.63 },
    { year: 2016, winPct: 0.66 },
    { year: 2017, winPct: 0.61 },
    { year: 2018, winPct: 0.64 },
    { year: 2019, winPct: 0.65 },
    { year: 2020, winPct: 0.62 },
    { year: 2021, winPct: 0.67 },
    { year: 2022, winPct: 0.66 },
    { year: 2023, winPct: 0.68 },
    { year: 2024, winPct: 0.64 },
  ],
};

export function isHOFPlayer(player) {
  if (player.clubPoints >= 10000) return true;
  if (
    player.ppgSeasons &&
    player.ppgSeasons.length >= 5 &&
    player.ppgSeasons.every(season => season.ppg >= 20)
  )
    return true;
  if (player.medals && player.medals.length >= 3) return true;
  return false;
}

export function isHOFCoach(coach) {
  if (coach.championships && coach.championships.length >= 5) return true;
  if (
    coach.seasons &&
    coach.seasons.length >= 10 &&
    coach.seasons.filter(s => s.winPct >= 0.6).length >= 10
  )
    return true;
  return false;
}

export function getClubLegacyDisplay(championships, retiredJerseys, moments) {
  return {
    trophies: championships.map(c => `🏆 ${c.year}: ${c.keyPlayers.join(", ")}`),
    retired: retiredJerseys.map(j => `${j.name} (#${j.number}) — ${j.stats}`),
    moments,
  };
}

export function getNationalLegacyDisplay(medals, legends) {
  let medalCounts = { Gold: 0, Silver: 0, Bronze: 0 };
  medals.forEach(m => {
    if (medalCounts[m.medal] !== undefined) medalCounts[m.medal]++;
  });
  let years = medals.map(m => `${m.year} (${m.medal})`);
  let legendNames = legends.map(l => l.name + (l.type === "coach" ? " (Coach)" : ""));
  return {
    medals: medalCounts,
    years,
    legends: legendNames,
  };
}

export function fanVoteForInduction(playerOrCoach, votes = 1000) {
  let yesVotes = Math.round(votes * (0.55 + Math.random() * 0.1));
  let noVotes = votes - yesVotes;
  let inducted = yesVotes > noVotes;
  let cost = 0.5;
  let loyalty = inducted ? 5 : -3;
  return {
    inducted,
    yesVotes,
    noVotes,
    cost,
    loyalty,
    summary: inducted
      ? `Inducted by fan vote! (${yesVotes} vs. ${noVotes}), Cost: $${cost}M, Loyalty: +${loyalty}%`
      : `Not inducted. (${yesVotes} vs. ${noVotes}), Cost: $${cost}M, Loyalty: ${loyalty}%`,
  };
}