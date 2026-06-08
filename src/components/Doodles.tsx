export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 10 Q 12 0, 22 10 T 42 10 T 62 10 T 80 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 6.9H22l-6 4.4 2.3 7L12 16.9 5.7 20.3 8 13.3 2 8.9h7.6L12 2z" />
    </svg>
  );
}

export function Heart({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7-4.5-9.5-9.2C.8 8.2 3 4 6.7 4 9 4 10.7 5.3 12 7.2 13.3 5.3 15 4 17.3 4 21 4 23.2 8.2 21.5 11.8 19 16.5 12 21 12 21z" />
    </svg>
  );
}

export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M5 20 C 10 5, 25 35, 30 20 S 50 5, 55 20" />
    </svg>
  );
}

export function Rays({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <line x1="30" y1="5" x2="30" y2="20" />
      <line x1="10" y1="15" x2="20" y2="25" />
      <line x1="50" y1="15" x2="40" y2="25" />
      <line x1="5" y1="35" x2="20" y2="35" />
      <line x1="55" y1="35" x2="40" y2="35" />
    </svg>
  );
}