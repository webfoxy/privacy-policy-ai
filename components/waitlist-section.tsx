"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircle, Mail, User, X } from "lucide-react"

export function WaitlistSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const isFormValid = formData.name.trim() !== "" && formData.email.trim() !== ""

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call - replace with actual Notion API integration
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleModalClose = () => {
    setIsOpen(false)
    setIsSubmitted(false)
    setFormData({ name: "", email: "" })
  }

  return (
    <section id="waitlist" className="py-20 bg-accent/5">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">웨이팅 리스트 등록</h2>
          <p className="text-lg text-muted-foreground">출시 소식을 가장 먼저 받아보세요</p>
        </div>

        <div className="mx-auto max-w-md text-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
                웨이팅 리스트 등록하기
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <button
                onClick={handleModalClose}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>

              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="mb-6">
                    <CheckCircle className="mx-auto h-16 w-16 text-accent" />
                  </div>
                  <DialogHeader className="mb-4">
                    <DialogTitle className="text-2xl">등록 완료!</DialogTitle>
                    <DialogDescription className="text-base leading-relaxed">
                      🎉 웨이팅 리스트 등록이 완료되었습니다! <br />
                      출시되면 가장 먼저 알려드릴게요.
                    </DialogDescription>
                  </DialogHeader>
                  <Button onClick={handleModalClose} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    확인
                  </Button>
                </div>
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-xl">얼리 액세스 신청</DialogTitle>
                    <DialogDescription>서비스 출시 시 우선 이용 기회를 드립니다</DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                        <User className="h-4 w-4" />
                        이름
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="홍길동"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        이메일
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-input"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      disabled={isLoading || !isFormValid}
                    >
                      {isLoading ? "등록 중..." : "등록하기"}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    등록하시면 개인정보 처리방침에 동의하는 것으로 간주됩니다.
                  </p>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
