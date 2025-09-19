"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle, Loader2 } from "lucide-react"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSuccess(true)
    } catch (error) {
      console.error("Failed to submit:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setFormData({ name: "", email: "", company: "", position: "" })
    setIsSuccess(false)
    setIsLoading(false)
    onClose()
  }

  const isFormValid = formData.name.trim() && formData.email.trim()

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">웨이팅 리스트 등록</DialogTitle>
        </DialogHeader>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름 *</Label>
              <Input
                id="name"
                type="text"
                placeholder="홍길동"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">이메일 *</Label>
              <Input
                id="email"
                type="email"
                placeholder="hong@company.com"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">회사명</Label>
              <Input
                id="company"
                type="text"
                placeholder="회사명을 입력해주세요"
                value={formData.company}
                onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">직책</Label>
              <Input
                id="position"
                type="text"
                placeholder="직책을 입력해주세요"
                value={formData.position}
                onChange={(e) => setFormData((prev) => ({ ...prev, position: e.target.value }))}
              />
            </div>

            <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={!isFormValid || isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  등록 중...
                </>
              ) : (
                "웨이팅 리스트 등록하기"
              )}
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="mx-auto h-16 w-16 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">등록이 완료되었습니다!</h3>
            <p className="text-muted-foreground mb-6">서비스 출시 소식을 가장 먼저 알려드리겠습니다.</p>
            <Button onClick={handleClose} className="bg-accent hover:bg-accent/90">
              확인
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
