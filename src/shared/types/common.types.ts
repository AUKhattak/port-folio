export interface NavLink {
  label: string;
  href: string;
}

export interface Section {
  id: string;
  label: string;
  ref: React.RefObject<HTMLDivElement>;
}
