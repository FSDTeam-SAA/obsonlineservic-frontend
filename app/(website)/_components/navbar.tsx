import Link from "next/link";
import { BrandLockup } from "@/components/brand-mark";
import { primaryNavigation } from "../_data/site-data";

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8.25" /><path d="M3.75 12h16.5M12 3.75c2.1 2.25 3.15 5 3.15 8.25S14.1 18 12 20.25C9.9 18 8.85 14.75 8.85 12S9.9 6 12 3.75Z" /></svg>
);

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className=" flex h-16 container items-center justify-between gap-5 px-5 sm:px-8">
        <Link href="/" className="shrink-0 text-[#2e286f] transition-transform duration-300 hover:scale-[1.03]" aria-label="Booking is Yours home"><BrandLockup className="flex items-center gap-1.5" /></Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {primaryNavigation.map((item) => <Link key={item.href} href={item.href} className="text-[10px] font-medium text-slate-700 transition-colors hover:text-[#30277a]">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button type="button" className="hidden items-center gap-1.5 text-[10px] font-medium text-slate-700 sm:flex" aria-label="Select language"><GlobeIcon />EN<svg viewBox="0 0 12 12" aria-hidden="true" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m3 4.5 3 3 3-3" /></svg></button>
          <Link href="#" className="hidden border border-[#30277a] px-4 py-2 text-[10px] font-semibold text-[#30277a] transition-colors hover:bg-[#30277a] hover:text-white sm:block">Login/Register</Link>
          <Link href="/#booking" className="bg-[#30277a] px-4 py-2 text-[10px] font-semibold text-white transition-colors hover:bg-[#21195b]">Book Now</Link>
        </div>
      </div>
    </header>
  );
}
