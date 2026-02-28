// String formatting utilities
export const truncateText = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return `${text.substring(0, length)}...`;
};

export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatEmail = (email: string): string => {
  return email.replace('@', '[at]').replace('.', '[dot]');
};

// Array utilities
export const chunk = <T,>(arr: T[], size: number): T[][] => {
  const chunked: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

// Object utilities
export const filterEmpty = <T extends Record<string, any>>(obj: T): Partial<T> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined && value !== null && value !== '')
  ) as Partial<T>;
};

// Delay promise helper
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// URL utilities
export const isExternalUrl = (url: string): boolean => {
  return url.startsWith('http://') || url.startsWith('https://');
};

export const openInNewTab = (url: string): void => {
  if (url && url !== '#') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};
