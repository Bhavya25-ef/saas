"use client"

export default function BillingPage() {

  // ✅ API CALL
  const upgradePlan = async (plan: string) => {
    try {
      const res = await fetch("/api/billing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan }),
      })

      const data = await res.json()

      alert(data.message || "Upgraded 🚀")
    } catch (error) {
      console.error(error)
      alert("Upgrade failed ❌")
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Billing</h1>

      {/* Current Plan */}
      <div className="bg-card p-6 rounded-lg border mb-8">
        <h2 className="text-xl font-semibold mb-4">Current Plan</h2>
        <p className="text-3xl font-bold">Free</p>
        <p className="text-muted-foreground mt-2">
          $0/month - Forever free tier included
        </p>
      </div>

      {/* Pricing */}
      <h2 className="text-2xl font-semibold mb-6">Upgrade Your Plan</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricing.map((plan) => (
          <div
            key={plan.id}
            className={`p-6 rounded-lg border ${
              plan.popular
                ? "border-primary ring-2 ring-primary"
                : "border-border"
            }`}
          >
            {plan.popular && (
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm inline-block mb-4">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

            <p className="text-3xl font-bold mb-6">
              ${plan.price}
              <span className="text-lg text-muted-foreground font-normal">
                /mo
              </span>
            </p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* ✅ BUTTON FIX */}
            <button
              onClick={() => {
                if (plan.id !== "free") upgradePlan(plan.id)
              }}
              disabled={plan.id === "free"}
              className={`w-full px-4 py-2 rounded-lg transition ${
                plan.id === "free"
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : plan.popular
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "border border-input hover:bg-muted"
              }`}
            >
              {plan.id === "free" ? "Current Plan" : plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Billing History */}
      <h2 className="text-2xl font-semibold mt-12 mb-6">
        Billing History
      </h2>

      <div className="bg-card rounded-lg border overflow-hidden">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Description</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-4">Jan 1, 2024</td>
              <td className="p-4">Free Plan</td>
              <td className="p-4">$0.00</td>
              <td className="p-4">
                {/* ✅ CLICKABLE ACTIVE */}
                <button
                  onClick={() => alert("Your plan is active ✅")}
                  className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
                >
                  Active
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const pricing = [
  {
    id: "free",
    name: "Free",
    price: 0,
    popular: false,
    buttonText: "Current Plan",
    features: [
      "Up to 5 workflows",
      "Basic integrations",
      "1,000 actions/month",
      "Email support",
      "Community access",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    price: 29,
    popular: true,
    buttonText: "Upgrade Now",
    features: [
      "Unlimited workflows",
      "All integrations",
      "50,000 actions/month",
      "Priority email support",
      "Advanced analytics",
      "Custom workflows",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 99,
    popular: false,
    buttonText: "Upgrade Now",
    features: [
      "Unlimited everything",
      "API access",
      "Unlimited actions",
      "24/7 phone support",
      "Dedicated account manager",
      "SLA guarantee",
    ],
  },
]