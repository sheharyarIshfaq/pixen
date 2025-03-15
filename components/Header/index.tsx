"use client";

import { Github, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

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

        <nav className="flex items-center space-x-3">
          <a
            href="https://github.com/sheharyarIshfaq/pixen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-muted-foreground rounded-md hover:bg-secondary hover:text-foreground transition-colors flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" size="sm" className="px-4 cursor-pointer">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm" className="px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 cursor-pointer">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
};

export default Header;
