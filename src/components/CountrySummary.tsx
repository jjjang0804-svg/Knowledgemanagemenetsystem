import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Country data with approximate coordinates and fragility scores
const countries = [
  // Africa (10) - adjusted coordinates for real world map
  { name: "Somalia", region: "Africa", x: 52.5, y: 48, fragility: 9.5, population: "17.6M", programs: 2, budget: "$48M" },
  { name: "South Sudan", region: "Africa", x: 51, y: 47, fragility: 9.2, population: "11.4M", programs: 3, budget: "$62M" },
  { name: "Central African Republic", region: "Africa", x: 48.5, y: 47, fragility: 8.8, population: "5.5M", programs: 2, budget: "$35M" },
  { name: "Mali", region: "Africa", x: 45.5, y: 45, fragility: 8.5, population: "22.6M", programs: 4, budget: "$85M" },
  { name: "Burundi", region: "Africa", x: 51.5, y: 52, fragility: 8.2, population: "12.6M", programs: 2, budget: "$28M" },
  { name: "Zimbabwe", region: "Africa", x: 51.5, y: 57, fragility: 7.8, population: "16.3M", programs: 3, budget: "$42M" },
  { name: "Guinea", region: "Africa", x: 44, y: 48, fragility: 7.5, population: "13.9M", programs: 2, budget: "$31M" },
  { name: "Kenya", region: "Africa", x: 52.5, y: 50, fragility: 6.8, population: "55.1M", programs: 5, budget: "$125M" },
  { name: "Comoros", region: "Africa", x: 55, y: 54, fragility: 6.5, population: "0.9M", programs: 1, budget: "$12M" },
  { name: "Sao Tome and Principe", region: "Africa", x: 47.5, y: 50, fragility: 5.8, population: "0.2M", programs: 1, budget: "$8M" },
  
  // Middle East / CIS (7)
  { name: "Yemen", region: "Middle East", x: 54.5, y: 44.5, fragility: 9.3, population: "33.7M", programs: 4, budget: "$95M" },
  { name: "Syria", region: "Middle East", x: 52.5, y: 40, fragility: 9.1, population: "22.1M", programs: 3, budget: "$78M" },
  { name: "Palestine", region: "Middle East", x: 51.5, y: 41, fragility: 8.6, population: "5.3M", programs: 2, budget: "$45M" },
  { name: "Lebanon", region: "Middle East", x: 51.5, y: 40, fragility: 8.3, population: "5.5M", programs: 2, budget: "$38M" },
  { name: "Iran", region: "Middle East", x: 58, y: 40, fragility: 7.2, population: "88.5M", programs: 3, budget: "$52M" },
  { name: "Jordan", region: "Middle East", x: 52, y: 41, fragility: 6.5, population: "11.1M", programs: 3, budget: "$56M" },
  { name: "Armenia", region: "CIS", x: 55.5, y: 37, fragility: 6.8, population: "2.8M", programs: 2, budget: "$24M" },
  
  // Asia (3)
  { name: "Papua New Guinea", region: "Asia", x: 83, y: 53, fragility: 7.8, population: "10.1M", programs: 2, budget: "$35M" },
  { name: "Solomon Islands", region: "Asia", x: 86, y: 54, fragility: 6.5, population: "0.7M", programs: 1, budget: "$15M" },
  { name: "Timor-Leste", region: "Asia", x: 76.5, y: 54, fragility: 7.2, population: "1.3M", programs: 2, budget: "$28M" },
];

// Helper function to get color based on fragility score
const getFragilityColor = (score: number) => {
  if (score >= 9) return "#dc2626"; // red-600
  if (score >= 8) return "#ea580c"; // orange-600
  if (score >= 7) return "#f59e0b"; // amber-500
  if (score >= 6) return "#eab308"; // yellow-500
  return "#84cc16"; // lime-500
};

// Helper function to get size based on fragility score
const getFragilitySize = (score: number) => {
  return 6 + (score * 0.8); // Reduced from 8 + (score * 1.5)
};

export function CountrySummary() {
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8faf9' }}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Global Country Performance Dashboard</h1>
          <p className="text-muted-foreground mt-1">Development Cooperation in 20 Fragile & Conflict-Affected Countries</p>
        </div>

        {/* Map Card */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Fragility Map</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
                <span>Critical (9+)</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                <span>High (8-9)</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span>Medium (7-8)</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Moderate (6-7)</span>
              </div>
            </div>
          </div>

          {/* World Map SVG */}
          <div className="relative w-full" style={{ height: '500px' }}>
            {/* Real World Map Image */}
            <div className="absolute inset-0 rounded-lg overflow-hidden bg-gray-100">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1562504208-03d85cc8c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMHNpbXBsZSUyMG1pbmltYWwlMjBjbGVhbnxlbnwxfHx8fDE3NzUxODI3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="World Map"
                className="w-full h-full object-cover opacity-50"
              />
            </div>
            
            <svg 
              viewBox="0 0 100 60" 
              className="w-full h-full relative z-10"
              style={{ minHeight: '500px' }}
            >
              {/* Country circles */}
              {countries.map((country) => (
                <g key={country.name}>
                  <circle
                    cx={country.x}
                    cy={country.y}
                    r={getFragilitySize(country.fragility) / 10}
                    fill={getFragilityColor(country.fragility)}
                    opacity="0.85"
                    className="cursor-pointer hover:opacity-100 transition-all"
                    onClick={() => setSelectedCountry(country)}
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
                  />
                  <circle
                    cx={country.x}
                    cy={country.y}
                    r={(getFragilitySize(country.fragility) + 3) / 10}
                    fill="none"
                    stroke={getFragilityColor(country.fragility)}
                    strokeWidth="0.15"
                    opacity="0.4"
                    className="pointer-events-none"
                  />
                </g>
              ))}

              {/* Country labels */}
              {countries.map((country) => (
                <text
                  key={`label-${country.name}`}
                  x={country.x}
                  y={country.y - (getFragilitySize(country.fragility) / 10) - 0.8}
                  fontSize="1.1"
                  fill="#ffffff"
                  textAnchor="middle"
                  className="pointer-events-none font-medium"
                  opacity="0.9"
                  style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                >
                  {country.name}
                </text>
              ))}
            </svg>

            {/* Country Info Popup */}
            {selectedCountry && (
              <div className="absolute top-4 right-4 w-80 bg-white rounded-lg shadow-xl p-4 border-2 border-primary">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">{selectedCountry.name}</h4>
                    <Badge className="mt-1" style={{ backgroundColor: getFragilityColor(selectedCountry.fragility), color: 'white' }}>
                      Fragility: {selectedCountry.fragility}/10
                    </Badge>
                  </div>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Region</span>
                    <span className="font-medium">{selectedCountry.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Population</span>
                    <span className="font-medium">{selectedCountry.population}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Programs</span>
                    <span className="font-medium">{selectedCountry.programs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Budget</span>
                    <span className="font-medium">{selectedCountry.budget}</span>
                  </div>
                </div>

                <button
                  className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  onClick={() => {
                    // Navigate to country detail - for now just close
                    setSelectedCountry(null);
                  }}
                >
                  View Full Dashboard
                </button>
              </div>
            )}
          </div>
        </Card>

        {/* Regional Summary */}
        <div className="grid grid-cols-3 gap-6">
          <Card className="p-6 bg-white">
            <h3 className="font-semibold mb-4">Africa</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Countries</span>
                <span className="font-medium">10</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Budget</span>
                <span className="font-medium">$476M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg Fragility</span>
                <span className="font-medium text-orange-600">7.7/10</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white">
            <h3 className="font-semibold mb-4">Middle East / CIS</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Countries</span>
                <span className="font-medium">7</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Budget</span>
                <span className="font-medium">$388M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg Fragility</span>
                <span className="font-medium text-red-600">7.9/10</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white">
            <h3 className="font-semibold mb-4">Asia</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Countries</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Budget</span>
                <span className="font-medium">$78M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg Fragility</span>
                <span className="font-medium text-amber-600">7.2/10</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Country List */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Country List (20 Countries)</h3>
          <div className="grid grid-cols-4 gap-3">
            {countries
              .sort((a, b) => b.fragility - a.fragility)
              .map((country) => (
                <button
                  key={country.name}
                  onClick={() => setSelectedCountry(country)}
                  className="p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-left"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getFragilityColor(country.fragility) }}
                    />
                    <span className="text-sm font-medium">{country.name}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Fragility: {country.fragility} • {country.programs} programs
                  </div>
                </button>
              ))}
          </div>
        </Card>

        {/* Global Stats */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Global Overview</h3>
          <div className="grid grid-cols-6 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">20</div>
              <div className="text-xs text-muted-foreground mt-1">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">48</div>
              <div className="text-xs text-muted-foreground mt-1">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$942M</div>
              <div className="text-xs text-muted-foreground mt-1">Total Budget</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">387.8M</div>
              <div className="text-xs text-muted-foreground mt-1">Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">7.6</div>
              <div className="text-xs text-muted-foreground mt-1">Avg Fragility</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">9</div>
              <div className="text-xs text-muted-foreground mt-1">Critical Countries</div>
            </div>
          </div>
        </Card>

        {/* Legend */}
        <Card className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <p className="text-sm text-center text-muted-foreground">
            Click on any country circle on the map or in the country list to view detailed information
          </p>
        </Card>
      </div>
    </div>
  );
}