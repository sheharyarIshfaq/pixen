import { Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="container px-8 mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-medium tracking-tight flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        >
          <Sparkles className="h-5 w-5" />
          <span>Pixen</span>
        </Link>

        <nav className="flex items-center space-x-1">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-muted-foreground rounded-md hover:bg-secondary hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
