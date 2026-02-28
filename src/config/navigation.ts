export interface NavLink {
  label: string;
  path: string;
}

export const NAVIGATION_LINKS: NavLink[] = [
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Contact', path: '#contact' },
  { label: 'GitHub', path: 'https://github.com/AUKhattak' },
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: 'Privacy', path: '#' },
  { label: 'Terms', path: '#' },
];
