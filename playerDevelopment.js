// Player Development Data Model and Utilities

export const Player = {
  id: 1,
  name: "Giannis Antetokounmpo",
  club: "Athens Titans",
  attributes: {
    threePoints: 72,
    defense: 90,
    playmaking: 81,
    conditioning: 85,
    speed: 89,
    rebounding: 86,
    stamina: 84,
  },
  fatigue: 10,
  injuryRisk: 0,
  progress: 0.8,
  potential: "A",
  coachBoost: 0.15,
  academy: false,
  fibaReady: false,
};

export function runTraining(player, plan) {
  let gain = 0;
  let fatigue = player.fatigue;
  let injuryRisk = player.injuryRisk;
  let log = "";
  let quotes = [
    "I’m getting stronger!",
    "Coach is pushing us hard.",
    "I feel my shot improving.",
    "Defensive drills are paying off.",
    "Ready for the next challenge!"
  ];
  let quote = quotes[Math.floor(Math.random() * quotes.length)];

  const attrMap = {
    shooting: "threePoints",
    defense: "defense",
    playmaking: "playmaking",
    conditioning: "conditioning",
    speed: "speed",
    rebounding: "rebounding",
    stamina: "stamina",
  };

  switch (plan.intensity) {
    case "low":
      gain = 1;
      fatigue += 2;
      log = "Steady work in fundamentals.";
      break;
    case "medium":
      gain = 2;
      fatigue += 5;
      log = "Good effort in training session.";
      break;
    case "high":
      gain = Math.round(3 + Math.random() * 2);
      fatigue += 10;
      injuryRisk += 10;
      log = "Intense drills bring major gains!";
      break;
  }

  let coachBoost = player.coachBoost || 0;
  if (attrMap[plan.drill] === "speed" && coachBoost > 0) {
    gain = Math.round(gain * (1 + coachBoost));
    log += " Coach’s speed training makes a difference!";
  }

  const attr = attrMap[plan.drill];
  let newAttr = { ...player.attributes };
  newAttr[attr] = (newAttr[attr] || 0) + gain;

  let fibaReady = player.fibaReady;
  if (plan.fiba && (attr === "stamina" || attr === "conditioning")) {
    newAttr[attr] += 5;
    fibaReady = true;
    log += " Extra stamina work for FIBA!";
  }

  let progress = player.progress + (gain / 100);
  if (progress > 1) progress = 1;

  return {
    ...player,
    attributes: newAttr,
    fatigue,
    injuryRisk,
    progress,
    fibaReady,
    log,
    quote,
  };
}

export function seasonalProgress(player, attrGains) {
  let newAttr = { ...player.attributes };
  Object.entries(attrGains).forEach(([key, val]) => {
    newAttr[key] = (newAttr[key] || 0) + val;
  });
  let progress = player.progress + 0.05;
  if (progress > 1) progress = 1;
  return {
    ...player,
    attributes: newAttr,
    progress,
  };
}

export function academyProgress(prospect, attrGains) {
  let newAttr = { ...prospect.attributes };
  Object.entries(attrGains).forEach(([key, val]) => {
    newAttr[key] = (newAttr[key] || 0) + val;
  });
  let progress = prospect.progress + 0.06;
  if (progress > 1) progress = 1;
  return {
    ...prospect,
    attributes: newAttr,
    progress,
  };
}

export function generateTrainingLog(player, plan) {
  return `${player.name} shines in ${plan.drill} drills (${plan.intensity} intensity).`;
}