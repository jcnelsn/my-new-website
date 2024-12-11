export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <p className="text-sm text-orange-800/70">
            btw, I built this from scratch with
            <a 
              href="https://cursor.sh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-orange-900 hover:text-orange-800 mx-1.5 font-medium"
            >
              Cursor AI
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </p>
          <p className="text-xs text-orange-800/60">© 2024 Jack Nelson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 