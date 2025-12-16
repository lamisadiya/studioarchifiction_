// src/components/space-calculator/AdvancedSpaceCalculator.tsx
"use client";

import { useState } from "react";
import { Switch } from "../ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui";
import Image from "next/image";
import { Calculator, Users, Building2, Coffee, DoorOpen, Lock, Home, Sparkles } from "lucide-react";

export default function AdvancedSpaceCalculator() {
  const [employeeCount, setEmployeeCount] = useState(20);
  const [toggles, setToggles] = useState({
    reception: false,
    discussion: false,
    smallMeeting: false,
    bigMeeting: false,
    workstation: true,
    manager: false,
    director: false,
    pantry: false,
    lounge: false,
    utility: false,
    dineIn: false,
    smokeZone: false,
    sportsZone: false,
    locker: false,
    prayer: false,
  });

  // Area calculation (realistic sq ft per item)
  const areaPerWorkstation = 50;
  const areas = {
    reception: 300,
    discussion: 150,
    smallMeeting: 200,
    bigMeeting: 400,
    workstation: areaPerWorkstation,
    manager: 150,
    director: 250,
    pantry: 200,
    lounge: 300,
    utility: 100,
    dineIn: 250,
    smokeZone: 100,
    sportsZone: 500,
    locker: 150,
    prayer: 200,
  };

  const totalWorkstationArea = toggles.workstation ? employeeCount * areas.workstation : 0;
  const totalExtraArea = Object.keys(toggles).reduce((sum, key) => {
    if (toggles[key as keyof typeof toggles] && key !== "workstation") {
      return sum + areas[key as keyof typeof areas];
    }
    return sum;
  }, 0);

  const totalArea = totalWorkstationArea + totalExtraArea;
  const totalAreaWithCirculation = Math.round(totalArea * 1.4); // +40% for corridors

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="py-20 lg:py-32 bg-linear-to-br from-red-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-4xl lg:text-5xl font-black text-gray-900 mb-16">
          Find out how much space your company needs
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT: Calculator Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 space-y-10">

            {/* Toggle Groups */}
            <div className="space-y-8">
              <ToggleGroup
                icon={<Building2 className="w-6 h-6" />}
                items={[
                  { key: "reception", label: "Reception and waiting" },
                  { key: "discussion", label: "Discussion Room" },
                ]}
                toggles={toggles}
                onToggle={handleToggle}
              />

              <div className="flex justify-center">
                <div className="w-full max-w-xs border-t-4 border-red-500" />
              </div>

              <ToggleGroup
                icon={<DoorOpen className="w-6 h-6" />}
                items={[
                  { key: "smallMeeting", label: "Small Meeting Room" },
                  { key: "bigMeeting", label: "Big Meeting Room" },
                ]}
                toggles={toggles}
                onToggle={handleToggle}
              />

              <div className="text-center">
                <Calculator className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-red-600">Workstation</p>
              </div>

              {/* Employee Count */}
              <div>
                <label className="text-lg font-bold text-gray-800">NUMBER OF EMPLOYEES *</label>
                <Input
                  type="number"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value) || 0)}
                  className="mt-3 h-16 text-2xl font-bold text-center border-2"
                />
              </div>

              <ToggleGroup
                icon={<Users className="w-6 h-6" />}
                items={[
                  { key: "manager", label: "Manager Room" },
                  { key: "director", label: "Director Room" },
                  { key: "pantry", label: "Pantry" },
                  { key: "lounge", label: "Lounge" },
                  { key: "utility", label: "Utility Room" },
                  { key: "dineIn", label: "Dine In" },
                  { key: "smokeZone", label: "Smoke Zone" },
                  { key: "sportsZone", label: "Sports Zone" },
                  { key: "locker", label: "Locker Room" },
                  { key: "prayer", label: "Prayer Room" },
                ]}
                toggles={toggles}
                onToggle={handleToggle}
              />
            </div>

            {/* Result Button */}
            <div className="text-center pt-8">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-20 py-8 rounded-full shadow-2xl">
                CALCULATE SPACE ESTIMATE
              </Button>
              <div className="mt-8 p-8 bg-red-50 rounded-2xl">
                <p className="text-sm text-gray-600 mb-2">Total Estimated Space Required</p>
                <p className="text-6xl font-black text-red-600">
                  {totalAreaWithCirculation.toLocaleString()} sq ft
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: How CUBIC Work */}
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-black text-gray-900 mb-8">How CUBIC Work</h3>
            </div>

            <div className="grid gap-10">
              {[
                { icon: "Plan", title: "Plan", list: ["Space Measurement & Analysis", "Block Planning", "Space layout specification", "Conceptual Design", "Color Scheme Selecting", "Budgeting"] },
                { icon: "Design", title: "Design", list: ["Material Selection", "2D design of the initial concept", "3D rendering and visualization", "Project work Schedule", "Procure Material"] },
                { icon: "Execute", title: "Execute", list: ["Project Work Proceed", "Project Coordination", "Always Support From Architect", "Furniture Installation", "Finish Project And Handover", "After Sales Service"] },
              ].map((phase) => (
                <div key={phase.title} className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {phase.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">{phase.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {phase.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-red-600 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/cubic-team-working.jpg"
                alt="CUBIC Team Working"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Toggle Group Component
function ToggleGroup({ icon, items, toggles, onToggle }: any) {
  return (
    <div className="space-y-6">
      {items.map((item: any) => (
        <div key={item.key} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {icon}
            <span className="text-lg font-medium text-gray-800">{item.label}</span>
          </div>
          <Switch
            checked={toggles[item.key]}
            onCheckedChange={() => onToggle(item.key)}
            className="data-[state=checked]:bg-red-600"
          />
        </div>
      ))}
    </div>
  );
}