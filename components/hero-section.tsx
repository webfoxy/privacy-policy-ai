"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, FileText, Zap } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="home" className="relative py-20 lg:py-32 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-muted/70"></div>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                <Zap className="h-8 w-8 text-accent" />
              </div>
            </div>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance lg:text-6xl font-paperlogy">
            AI가 점검하는 <br />
            <span className="text-primary">개인정보처리방침</span>
          </h1>

          <p className="mb-8 text-xl text-muted-foreground text-pretty lg:text-2xl">
            법적 리스크 없이, 빠르고 정확하게
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-lg px-8 py-6"
              onClick={() => setIsModalOpen(true)}
            >
              웨이팅 리스트 등록하기
            </Button>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
