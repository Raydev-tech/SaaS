import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, Play, Zap, Shield, BarChart3, Users, Smartphone, Globe, Check, Star } from "lucide-react";
import IntegrationsPage from "./integrations";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with optimized performance and instant loading times.",
    colorFrom: "from-yellow-400",
    colorTo: "to-yellow-600",
    iconColor: "text-yellow-600",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance certifications.",
    colorFrom: "from-indigo-400",
    colorTo: "to-indigo-600",
    iconColor: "text-indigo-600",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights with real-time analytics and customizable dashboards.",
    colorFrom: "from-green-400",
    colorTo: "to-green-600",
    iconColor: "text-green-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time collaboration tools and permissions.",
    colorFrom: "from-purple-400",
    colorTo: "to-purple-600",
    iconColor: "text-purple-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access your workspace anywhere with our responsive design and mobile apps.",
    colorFrom: "from-pink-400",
    colorTo: "to-pink-600",
    iconColor: "text-pink-600",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with our global infrastructure and CDN network.",
    colorFrom: "from-teal-400",
    colorTo: "to-teal-600",
    iconColor: "text-teal-600",
  },
];
const plans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for individuals and small teams getting started.",
    features: ["Up to 5 team members", "10GB storage", "Basic analytics", "Email support", "Mobile app access"],
    popular: false,
    colorFrom: "from-blue-400",
    colorTo: "to-blue-600",
  },
  {
    name: "Professional",
    price: "$29",
    description: "Ideal for growing businesses that need more power.",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
    ],
    popular: true,
    colorFrom: "from-purple-400",
    colorTo: "to-purple-600",
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with advanced requirements.",
    features: [
      "Unlimited team members",
      "1TB storage",
      "Custom analytics",
      "24/7 phone support",
      "Advanced API access",
      "Custom integrations",
      "SSO & SAML",
      "Dedicated account manager",
    ],
    popular: false,
    colorFrom: "from-green-400",
    colorTo: "to-green-600",
  },
];
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "https://images.pexels.com/photos/27738917/pexels-photo-27738917/free-photo-of-a-woman-in-a-green-sequin-dress-sitting-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600?height=40&width=40",
    content:
      "SaaSify has completely transformed how we manage our business. The automation features alone have saved us 20 hours per week.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCorp",
    avatar: "https://images.pexels.com/photos/20274153/pexels-photo-20274153/free-photo-of-man-in-hoodie.jpeg?auto=compress&cs=tinysrgb&w=600?height=40&width=40",
    content:
      "The analytics dashboard gives us insights we never had before. It's like having a data scientist on our team.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, GrowthLab",
    avatar: "https://images.unsplash.com/profile-fb-1498079624-12f9a0e33a96.jpg?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0?height=40&width=40",
    content: "Customer support is outstanding. They helped us migrate our entire workflow in just two days.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CTO, ScaleUp",
    avatar: "https://media.istockphoto.com/id/93551142/photo/young-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=t8GbwoZj7FfMSLCaYTsiH-WdFMU3HU0hCJKvjWV4jcI=",
    content: "The API integration was seamless. We had our custom tools connected within hours, not weeks.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Operations Director, Efficiency Co",
    avatar: "https://images.unsplash.com/photo-1675469675830-11d9a6099ef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGlzYSUyMFRob21wc29ufGVufDB8fDB8fHww?height=40&width=40",
    content: "SaaSify's mobile app keeps our team connected and productive, even when we're on the go.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Marketing Lead, BrandBoost",
    avatar: "https://images.unsplash.com/profile-1506763313112-b5dae9d7c06e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0?height=40&width=40",
    content: "The collaboration features have made our remote team more productive than ever. Highly recommended!",
    rating: 5,
  },
];

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            {/* Announcement */}
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
              <span className="mr-2">🎉</span>
              <span>Introducing our new AI-powered features</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Build your business
              <span className="text-blue-600 dark:text-blue-400 block">
                faster than ever
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              SaaSify helps you streamline your workflow, automate repetitive
              tasks, and scale your business with powerful tools designed for
              modern teams.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
              data-aos="zoom-in"
            >
              <a
                href="/signup"
                className="inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-medium rounded-lg shadow transition"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button
                className="inline-flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 px-8 py-3 text-lg font-medium rounded-lg transition"
                onClick={() => alert("Play demo video...")}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Image */}
            <div className="relative" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="SaaSify Dashboard Preview"
                className="rounded-xl shadow-2xl border mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
       <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to succeed</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you build, grow, and scale your business efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                p-6 rounded-xl bg-gradient-to-br ${feature.colorFrom} ${feature.colorTo} 
                shadow-lg text-white cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl
              `}
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <div
                className={`h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center mb-4 ${feature.iconColor}`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="pricing" className="py-20 md:py-32 bg-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 150}
              className={`
                relative p-8 rounded-2xl
                bg-gradient-to-br ${plan.colorFrom} ${plan.colorTo}
                text-white shadow-xl
                transition-transform transform hover:scale-105
                ${plan.popular ? "border-4 border-white shadow-2xl" : ""}
                cursor-pointer
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-gray-900 px-5 py-1 rounded-full text-sm font-semibold tracking-wide shadow">
                    Most Popular
                  </span>
                </div>
              )}

              <header className="text-center mb-8">
                <h3 className="text-3xl font-extrabold">{plan.name}</h3>
                <div className="mt-4 flex justify-center items-baseline space-x-2">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className="text-lg font-medium text-white/80">/month</span>
                </div>
                <p className="mt-3 max-w-xs mx-auto text-white/90">{plan.description}</p>
              </header>

              <ul className="space-y-4 mb-8 max-w-md mx-auto">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-3 text-white/90">
                    <Check className="h-5 w-5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold
                  ${plan.popular ? "bg-white text-gray-900 hover:bg-gray-200" : "bg-white/30 hover:bg-white/50 text-white"}
                  transition-colors duration-300
                `}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Loved by thousands of businesses</h2>
          <p className="text-xl max-w-2xl mx-auto">
            See what our customers have to say about their experience with SaaSify.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-500 mr-1" />
                ))}
              </div>

              <blockquote className="mb-6 italic">"{testimonial.content}"</blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full mr-3 object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <IntegrationsPage />
    </>
  );
};
export default HomePage;
