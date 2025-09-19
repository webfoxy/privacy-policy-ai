"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Search, FileText, Download, AlertTriangle } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"

export function DemoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const steps = [
    {
      icon: Upload,
      title: "개인정보처리방침 파일 업로드",
      description: "PDF, DOC, TXT 형태의 개인정보처리방침을 업로드합니다.",
    },
    {
      icon: Search,
      title: "AI 자동 점검",
      description: "AI가 법적 요구사항과 작성지침을 기준으로 자동 분석을 시작합니다.",
    },
    {
      icon: FileText,
      title: "개선 필요 항목 하이라이트",
      description: "부족하거나 개선이 필요한 항목을 명확하게 표시하고 설명합니다.",
    },
    {
      icon: Download,
      title: "리포트 다운로드",
      description: "상세한 분석 결과와 개선 방안을 포함한 리포트를 제공합니다.",
    },
  ]

  return (
    <>
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">사용 시나리오 데모</h2>
            <p className="text-lg text-muted-foreground mb-4">간단한 4단계로 완성되는 개인정보처리방침 점검</p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
              <AlertTriangle className="h-4 w-4" />
              <span>※ 현재 화면은 예시 UI이며 실제 동작하지 않습니다.</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="relative border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mt-2">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mx-auto max-w-4xl">
            <Card className="border-2 border-dashed border-muted-foreground/30 bg-muted/20">
              <CardContent className="p-12 text-center">
                <div className="mb-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">데모 인터페이스</h3>
                  <p className="text-muted-foreground">
                    실제 서비스에서는 이 영역에서 파일 업로드와 분석 결과를 확인할 수 있습니다.
                  </p>
                </div>
                <Button className="bg-accent hover:bg-accent/90" onClick={() => setIsModalOpen(true)}>
                  웨이팅 리스트 등록
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
