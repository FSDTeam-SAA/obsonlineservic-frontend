export const primaryNavigation = [
  "Holiday Parks",
  "Properties",
  "Offers",
  "About us",
  "Contact",
];

export const footerLinks = {
  company: ["About Us", "Contact", "Blog"],
  explore: ["Holiday Parks", "Properties", "Offers", "Destinations"],
};

export const searchFields = [
  { label: "WHERE", value: "All Countries", icon: "location" },
  { label: "PARK", value: "All Parks", icon: "park" },
  { label: "CHECK-IN", value: "dd/mm/yyyy", icon: "calendar" },
  { label: "CHECK-OUT", value: "dd/mm/yyyy", icon: "calendar" },
  { label: "GUESTS", value: "1 Guest", icon: "guest" },
] as const;
