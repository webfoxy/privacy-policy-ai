"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "./waitlist-modal"

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">AI</span>
              </div>
              <span className="text-xl font-bold">PrivacyCheck</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a href="#home" className="transition-colors hover:text-primary">
                홈
              </a>
              <a href="#features" className="transition-colors hover:text-primary">
                기능
              </a>
              <a href="#pricing" className="transition-colors hover:text-primary">
                가격
              </a>
              <a href="#contact" className="transition-colors hover:text-primary">
                문의
              </a>
            </nav>

            <Button className="bg-primary hover:bg-primary/90" onClick={() => setIsModalOpen(true)}>
              웨이팅 리스트 등록
            </Button>
          </div>
        </div>
      </header>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
