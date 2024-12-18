"use client";

import { useState } from "react";
import ProductList from "@/components/ProductList";
import FilterOptions from "@/components/FilterOptions";
import SortOptions from "@/components/SortOptions";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {

  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
  });
  const [sortCriteria, setSortCriteria] = useState<string>("");

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="hidden md:block">Filter Otpions</SidebarGroupLabel>
            <SidebarGroupLabel className="hidden md:block">Filter Otpions</SidebarGroupLabel>
            <SidebarGroupLabel>Filter Otpions</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-3">
                <FilterOptions filters={filters} setFilters={setFilters} />
                <SortOptions sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main className="p-4 space-y-4">
        <SidebarTrigger className="w-full" />
        <ProductList filters={filters} sortOption={sortCriteria} />
      </main>
    </SidebarProvider>
  )
}
