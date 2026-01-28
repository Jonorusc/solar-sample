export interface SimulationResult {
  monthlyKwh: number
  systemSizeKw: number // kWp
  systemCost: number // R$
  monthlySavings: number // R$
  paybackMonths: number
  co2Saved: number // kg/year approx
}

export function calculateSolarSystem(
  billValue: number,
  config: { kwhPrice: number; sunHours: number; costPerWatt: number },
): SimulationResult {
  const EFFICIENCY_LOSS = 0.2 // 20% loss (dirt, heat, cables)
  const PERFORMANCE_RATIO = 1 - EFFICIENCY_LOSS

  // 1. Calculate Monthly Production Target (kWh)
  // We assume the user wants to offset ~95% of the bill (leaving only the grid availability cost)
  // For simplicity MVP, we map Bill $ -> kWh directly.
  const monthlyKwh = billValue / config.kwhPrice

  // 2. Calculate System Size (kWp)
  // Formula: Energy = Power * Time * Performance
  // Power = Energy / (Time * Performance)
  const dailySunHours = config.sunHours
  const daysInMonth = 30

  const systemSizeKw = monthlyKwh / (dailySunHours * daysInMonth * PERFORMANCE_RATIO)

  // 3. Calculate Investment
  const systemCost = systemSizeKw * 1000 * config.costPerWatt

  // 4. Calculate Savings
  // Assuming 95% saving on the energy part
  const monthlySavings = billValue * 0.95

  // 5. Payback
  const paybackMonths = systemCost / monthlySavings

  // 6. CO2 (Approx 0.4kg per kWh generated in Thermal plants avoided)
  const co2Saved = monthlyKwh * 12 * 0.4

  return {
    monthlyKwh: Math.round(monthlyKwh),
    systemSizeKw: Number(systemSizeKw.toFixed(2)),
    systemCost: Math.round(systemCost),
    monthlySavings: Math.round(monthlySavings),
    paybackMonths: Math.round(paybackMonths),
    co2Saved: Math.round(co2Saved),
  }
}
