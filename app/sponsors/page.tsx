import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/home/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building, Users, Calendar, Award } from "lucide-react";

export default function SponsorsPage() {
  const sponsors = [
    {
      id: 1,
      name: "Trading firm 1",
      logo: "/placeholder.svg?height=80&width=200",
      tier: "Platinum",
      description:
        "Sponsor 1 is a quantitative trading firm with a focus on technology and collaborative problem solving.",
      website: "https://money.com",
      industry: "Financial Services",
      employees: "1000+",
      since: "2025",
      benefits: [
        "Contest prizes and awards",
        "Internship opportunities",
        "Technical workshops",
        "Career mentorship",
      ],
    },
    {
      id: 2,
      name: "Big tech 1",
      logo: "/placeholder.svg?height=80&width=200",
      tier: "Gold",
      description:
        "big tech 1 builds software that empowers everyone on your team to work better together.",
      website: "https://bigtech.com",
      industry: "Software",
      employees: "10000+",
      since: "2024",
      benefits: [
        "Hackathon sponsorship",
        "Graduate program access",
        "Technical talks",
        "Networking events",
      ],
    },
    {
      id: 3,
      name: "big tech 2",
      logo: "/placeholder.svg?height=80&width=200",
      tier: "Gold",
      description:
        "big tech 2 is a free-to-use online graphic design tool that makes design simple for everyone.",
      website: "https://nothing.com",
      industry: "Design Technology",
      employees: "4000+",
      since: "2024",
      benefits: [
        "Design workshops",
        "Product development insights",
        "Internship programs",
        "Creative challenges",
      ],
    },
    {
      id: 4,
      name: "big tech 3",
      logo: "/placeholder.svg?height=80&width=200",
      tier: "Silver",
      description:
        "big tech 3's mission is to organize the world's information and make it universally accessible.",
      website: "https://google.com",
      industry: "Technology",
      employees: "150000+",
      since: "2023",
      benefits: [
        "Cloud platform credits",
        "Technical resources",
        "Developer tools access",
        "Community support",
      ],
    },
    {
      id: 5,
      name: "big tech 4",
      logo: "/placeholder.svg?height=80&width=200",
      tier: "Silver",
      description:
        "big tech 4 enables digital transformation for the era of an intelligent cloud and edge.",
      website: "https://microsoft.com",
      industry: "Technology",
      employees: "220000+",
      since: "2023",
      benefits: [
        "Development tools",
        "Student programs",
        "Technical certification",
      ],
    },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Gold":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Silver":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "Bronze":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Sponsors</h1>
          <p className="text-white">
            Meet our amazing sponsors who make UTS CPL possible
          </p>
        </div>

        {/* Sponsor Benefits Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-600" />
              Why Sponsor UTS CPL?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Talent Access</h3>
                <p className="text-sm text-white">
                  Connect with top programming talent from UTS and beyond
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Building className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Brand Visibility</h3>
                <p className="text-sm text-white">
                  Showcase your company to the competitive programming community
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Community Impact</h3>
                <p className="text-sm text-white">
                  Support the growth of competitive programming education
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sponsors List */}
        <div className="space-y-6">
          {sponsors.map((sponsor) => (
            <Card
              key={sponsor.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} logo`}
                        className="h-16 w-auto object-contain"
                      />
                      <Badge className={getTierColor(sponsor.tier)}>
                        {sponsor.tier} Sponsor
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {sponsor.name}
                    </h2>
                    <div className="space-y-2 text-sm text-white">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span>{sponsor.industry}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{sponsor.employees} employees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Sponsor since {sponsor.since}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <p className="text-white mb-6">{sponsor.description}</p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-white mb-3">
                        What they provide:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {sponsor.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-sm text-white">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="flex items-center gap-2">
                      Visit Website
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <Card className="mt-12 bg-slate-900 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Interested in Sponsoring UTS CPL?
            </h2>
            <p className="mb-6 text-blue-100">
              Join our community of sponsors and help shape the future of
              competitive programming at UTS.
            </p>
            <Button variant="secondary" size="lg">
              Contact Us About Sponsorship
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
