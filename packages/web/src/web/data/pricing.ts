/**
 * JTA PRICING ENGINE
 * ------------------------------------------------------------------
 * Every displayed price is COMPUTED here, not hand-typed, so the
 * agency margin is always baked INTO the number a client sees.
 *
 * Formula (per person):
 *   netCost   = (parkNights × accommodation/night)
 *             + (parkDays   × park/conservation fee)
 *             + (totalDays  × logistics/day)
 *   displayed = netCost ÷ (1 − margin)
 *
 * Dividing by (1 − margin) makes the margin a TRUE cut of the final
 * price — the way agency commission actually works. Client pays the
 * displayed price, JTA pays the supplier the net cost, JTA keeps the
 * rest. Nothing to chase from suppliers separately.
 *
 * LOW end of a range  = leaner camps  ($800/night floor) + 15% margin
 * HIGH end of a range = premium camps ($1,500/night)     + 25% margin
 *
 * NOTE: cost inputs are still ESTIMATES (no firm net rates yet). The
 * MARGIN math is guaranteed correct. When real net rates land, update
 * the constants below and the whole catalogue (and the cost guide)
 * re-prices instantly.
 * ------------------------------------------------------------------
 */

// --- Accommodation (per person / night) ---
// SAFARI CAMPS carry the $800 floor; COAST (Zanzibar) is priced separately
// and much lower — it is not a fee-bearing, remote safari camp.
export const ACCOM_LOW = 800; // safari camp floor — characterful camps
export const ACCOM_HIGH = 1150; // premium / prime-position safari camps
export const COAST_LOW = 300; // Zanzibar / coast, low
export const COAST_HIGH = 550; // Zanzibar / coast, high

// --- Margin band ---
export const MARGIN_LOW = 0.12; // applied to the low end of every range
export const MARGIN_HIGH = 0.18; // applied to the high end of every range

// --- Logistics per person / day (vehicle + guide + transfers + water + meals) ---
// Road-based is leaner; fly-in adds internal flights; mixed sits between.
const LOGISTICS = {
  road: { low: 160, high: 260 },
  mixed: { low: 200, high: 320 },
  fly: { low: 280, high: 440 },
} as const;

export type LogisticsTier = keyof typeof LOGISTICS;

// --- Park / conservation fees (per person / day, government-set, pass-through) ---
// Coast/Zanzibar nights carry no park fee.
const PARK_FEE: Record<string, number> = {
  Serengeti: 130, // park fee + concession/camping
  Ngorongoro: 150, // entry + crater service + per-vehicle, averaged per person
  Tarangire: 70,
  Manyara: 70,
  Ruaha: 50,
  Nyerere: 80,
  Zanzibar: 0,
};

export interface JourneyCostInputs {
  /** nights spent inside fee-bearing parks (excludes coast nights) */
  parkNightsByPark: Record<string, number>;
  /** nights on the coast (Zanzibar) — accommodation but no park fee */
  coastNights: number;
  logisticsTier: LogisticsTier;
}

function round100(n: number): number {
  return Math.round(n / 100) * 100;
}

function fmt(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

/**
 * Compute the displayed per-person price range for a journey.
 * Returns both the formatted string and the raw numbers (for checks/JSON-LD).
 */
export function computeRange(inputs: JourneyCostInputs): {
  text: string;
  low: number;
  high: number;
  netLow: number;
  netHigh: number;
} {
  const parkNights = Object.values(inputs.parkNightsByPark).reduce(
    (a, b) => a + b,
    0,
  );
  const totalNights = parkNights + inputs.coastNights;
  const parkDays = parkNights; // one fee-day per in-park night

  const parkFees = Object.entries(inputs.parkNightsByPark).reduce(
    (sum, [park, nights]) => sum + (PARK_FEE[park] ?? 0) * nights,
    0,
  );

  const log = LOGISTICS[inputs.logisticsTier];

  // Net supplier cost per person, low and high configurations.
  // Safari nights at the $800+ camp rate; coast nights much lower.
  const netLow =
    parkNights * ACCOM_LOW +
    inputs.coastNights * COAST_LOW +
    parkFees +
    totalNights * log.low;
  const netHigh =
    parkNights * ACCOM_HIGH +
    inputs.coastNights * COAST_HIGH +
    parkFees +
    totalNights * log.high;

  // Bake margin INTO the displayed price
  const low = round100(netLow / (1 - MARGIN_LOW));
  const high = round100(netHigh / (1 - MARGIN_HIGH));

  return {
    text: `${fmt(low)} – ${fmt(high)} per person`,
    low,
    high,
    netLow: round100(netLow),
    netHigh: round100(netHigh),
  };
}
