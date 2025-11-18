import { useState } from 'react'
import PriceRange from './PriceRange'
import { ChevronDown } from 'lucide-react'

interface FilterProps {
  isDark: boolean;
}

export default function Filter({ isDark }: FilterProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
  <div className="sticky top-[130px] h-fit">
   <div className="flex flex-col gap-2 p-6 w-[20vw] h-fit"
     style={{
       backgroundColor: isDark ? "#000" : "#fff"
     }} >
      {/* ---------- TOOLS CATEGORY ---------- */}
      <div className="relative w-full">
        <button 
          onClick={() => toggleCategory("tools")}
          className="w-full px-4 py-2 rounded flex items-center justify-between cursor-pointer transition-all duration-200"
          style={{
            backgroundColor: isDark ? "#000" : "#fff",
            color: isDark ? "#fff" : "#000",
            border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`
          }}>
          <span>Tools</span>
          <ChevronDown 
            className="h-4 w-4 transition-transform duration-200"
            style={{
              transform: expandedCategory === "tools" ? "rotate(180deg)" : "rotate(0deg)"
            }}
          />
        </button>

        {/* Subcategories */}
        {expandedCategory === "tools" && (
          <div className="w-full rounded-lg shadow-lg z-10 mt-2"
            style={{
              backgroundColor: isDark ? "#000" : "#fff",
              color: isDark ? "#fff" : "#000",
              border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`
            }}>
            <ul className="py-2 m-0 list-none">
              <li className="px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  color: isDark ? "#B3001B" : "#7EC8FF"
                }}>
                Car Charger
              </li>
              <li className="px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  color: isDark ? "#B3001B" : "#7EC8FF"
                }}>
                Car Jack
              </li>
              <li className="px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  color: isDark ? "#B3001B" : "#7EC8FF"
                }}>
                Wrench
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* ---------- ELECTRONICS CATEGORY ---------- */}
      <div className="relative w-full">
        <button 
          onClick={() => toggleCategory("electronics")}
          className="w-full px-4 py-2 rounded flex items-center justify-between cursor-pointer transition-all duration-200"
          style={{
            backgroundColor: isDark ? "#000" : "#fff",
            color: isDark ? "#fff" : "#000",
            border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`
          }}>
          <span>Electronics</span>
          <ChevronDown 
            className="h-4 w-4 transition-transform duration-200"
            style={{
              transform: expandedCategory === "electronics" ? "rotate(180deg)" : "rotate(0deg)"
            }}
          />
        </button>

        {/* Subcategories */}
        {expandedCategory === "electronics" && (
          <div className="w-full rounded-lg shadow-lg z-10 mt-2"
            style={{
              backgroundColor: isDark ? "#000" : "#fff",
              color: isDark ? "#fff" : "#000",
              border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`
            }}>
            <ul className="py-2 m-0 list-none">
              <li className="px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  color: isDark ? "#B3001B" : "#7EC8FF"
                }}>
                Phone Holder
              </li>
              <li className="px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  color: isDark ? "#B3001B" : "#7EC8FF"
                }}>
                GPS Tracker
              </li>
              <li className="px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  color: isDark ? "#B3001B" : "#7EC8FF"
                }}>
                Dash Cam
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* ---------- ACCESSORIES CATEGORY ---------- */}
      <div className="relative w-full">
        <button 
          onClick={() => toggleCategory("accessories")}
          className="w-full px-4 py-2 rounded flex items-center justify-between cursor-pointer transition-all duration-200"
          style={{
            backgroundColor: isDark ? "#000" : "#fff",
            color: isDark ? "#fff" : "#000",
            border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`
          }}>
          <span>Accessories</span>
          <ChevronDown 
            className="h-4 w-4 transition-transform duration-200"
            style={{
              transform: expandedCategory === "accessories" ? "rotate(180deg)" : "rotate(0deg)"
            }}
          />
        </button>

        {/* Subcategories */}
        {expandedCategory === "accessories" && (
          <div className="w-full rounded-lg shadow-lg z-10 mt-2"
            style={{
              backgroundColor: isDark ? "#000" : "#fff",
              color: isDark ? "#fff" : "#000",
              border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`
            }}>
            <ul className="py-2 m-0 list-none">
              <li className="px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  color: isDark ? "#B3001B" : "#7EC8FF"
                }}>
                Seat Covers
              </li>
              <li className="px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  color: isDark ? "#B3001B" : "#7EC8FF"
                }}>
                Air Freshener
              </li>
              <li className="px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  color: isDark ? "#B3001B" : "#7EC8FF"
                }}>
                Floor Mats
              </li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <PriceRange isDark={isDark} />
      </div>
    </div>
    </div>
  )
}
