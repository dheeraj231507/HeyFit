"use client";

import React, { useState } from "react";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Events() {
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const toggleEventsDropdown = () => {
    setIsEventsDropdownOpen(!isEventsDropdownOpen);
  };

  return (
    <>
      {/* Events Dropdown */}
      <div className="relative">
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          onClick={toggleEventsDropdown}
        >
          <CalendarIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Events</span>
          <ChevronDownIcon className="w-4 h-4" />
        </Button>

        {/* Dropdown Menu */}
        {isEventsDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <Link
              href="/eventcreate"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsEventsDropdownOpen(false)}
            >
              Event Create
            </Link>
            <Link
              href="/events"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsEventsDropdownOpen(false)}
            >
              Events
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Events;
