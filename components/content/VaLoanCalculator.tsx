"use client";

import { useMemo, useState } from "react";

/**
 * Simple VA loan monthly payment (principal & interest) estimator.
 * Standard amortization formula: M = P * (r(1+r)^n) / ((1+r)^n - 1)
 * where P = loan principal, r = monthly interest rate, n = number of
 * monthly payments. Does not estimate taxes, insurance, HOA dues, or
 * the VA funding fee — labeled clearly as an estimate only.
 */
export default function VaLoanCalculator() {
  const [homePrice, setHomePrice] = useState("400000");
  const [downPaymentPercent, setDownPaymentPercent] = useState("0");
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTermYears, setLoanTermYears] = useState("30");

  const result = useMemo(() => {
    const price = parseFloat(homePrice);
    const downPct = parseFloat(downPaymentPercent);
    const rate = parseFloat(interestRate);
    const years = parseFloat(loanTermYears);

    if (!isFinite(price) || !isFinite(downPct) || !isFinite(rate) || !isFinite(years)) {
      return null;
    }
    if (price <= 0 || years <= 0 || downPct < 0 || downPct >= 100 || rate < 0) {
      return null;
    }

    const downPayment = price * (downPct / 100);
    const principal = price - downPayment;
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;

    let monthlyPayment: number;
    if (monthlyRate === 0) {
      monthlyPayment = principal / numPayments;
    } else {
      const factor = Math.pow(1 + monthlyRate, numPayments);
      monthlyPayment = (principal * (monthlyRate * factor)) / (factor - 1);
    }

    return {
      principal,
      downPayment,
      monthlyPayment,
    };
  }, [homePrice, downPaymentPercent, interestRate, loanTermYears]);

  const currency = (value: number) =>
    value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <form className="card-vm space-y-4" onSubmit={(event) => event.preventDefault()}>
        <div>
          <label htmlFor="vc-home-price" className="mb-1 block text-sm font-semibold text-charcoal">
            Home price ($)
          </label>
          <input
            id="vc-home-price"
            type="number"
            min="0"
            step="1000"
            value={homePrice}
            onChange={(event) => setHomePrice(event.target.value)}
            className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
          />
        </div>

        <div>
          <label htmlFor="vc-down-payment" className="mb-1 block text-sm font-semibold text-charcoal">
            Down payment (%)
          </label>
          <input
            id="vc-down-payment"
            type="number"
            min="0"
            max="99"
            step="1"
            value={downPaymentPercent}
            onChange={(event) => setDownPaymentPercent(event.target.value)}
            className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
          />
          <p className="mt-1 text-xs text-charcoal-300">
            Many eligible VA borrowers put 0% down — adjust this if you plan to put money down.
          </p>
        </div>

        <div>
          <label htmlFor="vc-interest-rate" className="mb-1 block text-sm font-semibold text-charcoal">
            Interest rate (%)
          </label>
          <input
            id="vc-interest-rate"
            type="number"
            min="0"
            max="20"
            step="0.125"
            value={interestRate}
            onChange={(event) => setInterestRate(event.target.value)}
            className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
          />
        </div>

        <div>
          <label htmlFor="vc-loan-term" className="mb-1 block text-sm font-semibold text-charcoal">
            Loan term (years)
          </label>
          <select
            id="vc-loan-term"
            value={loanTermYears}
            onChange={(event) => setLoanTermYears(event.target.value)}
            className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
          >
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="30">30 years</option>
          </select>
        </div>
      </form>

      <div className="card-vm bg-navy text-offwhite-100">
        <p className="text-xs font-semibold uppercase tracking-widest text-brass-200">Estimated Monthly Payment</p>
        {result ? (
          <>
            <p className="mt-3 text-4xl font-headline font-extrabold text-offwhite-100">
              {currency(result.monthlyPayment)}
              <span className="text-base font-body font-normal text-offwhite-300"> / month</span>
            </p>
            <dl className="mt-6 space-y-2 text-sm text-offwhite-200">
              <div className="flex justify-between">
                <dt>Loan amount</dt>
                <dd>{currency(result.principal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Down payment</dt>
                <dd>{currency(result.downPayment)}</dd>
              </div>
            </dl>
          </>
        ) : (
          <p className="mt-3 text-sm text-offwhite-300">Enter valid numbers to see an estimate.</p>
        )}

        <p className="mt-6 text-xs leading-relaxed text-offwhite-300">
          Estimate only. Not a loan offer or rate quote. This figure covers principal and interest only — it does
          not include property taxes, homeowners insurance, HOA dues, or the VA funding fee, all of which affect
          your actual payment. Confirm actual numbers with a licensed loan officer.
        </p>
      </div>
    </div>
  );
}
