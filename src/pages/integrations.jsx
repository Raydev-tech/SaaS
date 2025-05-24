import { useEffect, useState } from "react"
import { Search, Star, ExternalLink } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const integrations = [
  {
    name: "Slack",
    logo: "/logos/slack.svg",
    description: "Team communication and collaboration tool.",
    category: "Communication",
    popular: true,
    rating: 4.7,
    reviews: 1324,
    url: "https://slack.com",
  },
  {
    name: "Trello",
    logo: "/logos/trello.svg",
    description: "Visual project management and task tracking.",
    category: "Productivity",
    popular: true,
    rating: 4.5,
    reviews: 987,
    url: "https://trello.com",
  },
  {
    name: "Salesforce",
    logo: "/logos/salesforce.svg",
    description: "Leading CRM platform for sales and marketing.",
    category: "CRM",
    popular: true,
    rating: 4.3,
    reviews: 742,
    url: "https://salesforce.com",
  },
  {
    name: "Zapier",
    logo: "/logos/zapier.svg",
    description: "Automate workflows between your apps and services.",
    category: "Automation",
    popular: true,
    rating: 4.8,
    reviews: 2145,
    url: "https://zapier.com",
  },
  {
    name: "Stripe",
    logo: "/logos/stripe.svg",
    description: "Online payment processing for internet businesses.",
    category: "Payments",
    popular: true,
    rating: 4.6,
    reviews: 1890,
    url: "https://stripe.com",
  },
  {
    name: "GitHub",
    logo: "/logos/github.svg",
    description: "Development platform for version control and collaboration.",
    category: "Development",
    popular: true,
    rating: 4.9,
    reviews: 3210,
    url: "https://github.com",
  },
  {
    name: "Zoom",
    logo: "/logos/zoom.svg",
    description: "Video conferencing and online meetings.",
    category: "Communication",
    popular: false,
    rating: 4.4,
    reviews: 1100,
    url: "https://zoom.us",
  },
  {
    name: "Asana",
    logo: "/logos/asana.svg",
    description: "Work management platform to organize teams.",
    category: "Productivity",
    popular: false,
    rating: 4.2,
    reviews: 875,
    url: "https://asana.com",
  },
]

const categories = ["All", "Communication", "Productivity", "CRM", "Automation", "Payments", "Development"]

export default function IntegrationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  // Filter integrations based on search and category
  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = selectedCategory === "All" || integration.category === selectedCategory
    const matchesSearch =
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const popularIntegrations = filteredIntegrations.filter((integration) => integration.popular)

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Connect with your
                <span className="text-primary block">favorite tools</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                SaaSify integrates with 100+ popular tools and services to streamline your workflow and boost productivity.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search integrations..."
                  className="pl-10 w-full border border-gray-300 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-y">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`text-sm px-3 py-1 rounded-md border border-gray-300 hover:bg-primary hover:text-white transition
                    ${
                      selectedCategory === category
                        ? "bg-primary text-white border-primary"
                        : ""
                    }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Integrations */}
        {popularIntegrations.length > 0 && (
          <section className="py-16 bg-muted/20">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Most Popular Integrations</h2>
                <p className="text-muted-foreground">
                  Connect with the tools your team already loves and uses every day.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularIntegrations.map((integration, index) => (
                  <div
                    key={integration.name}
                    className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{integration.name}</h3>
                    <div className="flex items-center justify-center gap-1 text-sm text-yellow-500 mb-2">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{integration.rating}</span>
                      <span className="text-gray-500">({integration.reviews})</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>
                    <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Integrations */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">All Integrations</h2>
              <p className="text-muted-foreground">
                Browse our complete library of integrations and find the perfect tools for your workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIntegrations.map((integration, index) => (
                <div
                  key={integration.name}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                        <img
                          src={integration.logo}
                          alt={integration.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{integration.name}</h3>
                        <span className="inline-block mt-1 text-xs bg-gray-200 rounded px-2 py-0.5">
                          {integration.category}
                        </span>
                      </div>
                    </div>
                    {integration.popular && (
                      <span className="text-xs bg-yellow-300 rounded px-2 py-0.5 font-semibold">Popular</span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{integration.rating}</span>
                      <span className="text-gray-500">({integration.reviews})</span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={integration.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-400 rounded p-1 hover:bg-gray-100 transition"
                        aria-label={`External link to ${integration.name}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <button className="bg-primary text-white px-3 py-1 rounded hover:bg-primary-dark transition">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Integration CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a custom integration?</h2>
              <p className="text-xl opacity-90 mb-8">
                Our team can help you build custom integrations with any tool or service your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded hover:bg-secondary-dark transition">
                  Contact Our Team
                </button>
                <button
                  className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded hover:bg-primary-foreground hover:text-primary transition"
                >
                  View API Docs
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
