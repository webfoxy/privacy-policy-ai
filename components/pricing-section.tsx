"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const plans = [
    {
      name: "무료 체험",
      price: "0원",
      period: "1회 한정",
      description: "서비스를 체험해보세요",
      features: ["기본 점검 (3개 항목)", "간단한 리포트 제공", "이메일 지원"],
      cta: "무료 체험하기",
      popular: false,
    },
    {
      name: "스타터",
      price: "90,000원",
      period: "월",
      description: "소규모 기업에 적합",
      features: ["전체 항목 점검", "상세 리포트 제공", "월 5회 점검 가능", "이메일 지원", "기본 개선 가이드"],
      cta: "웨이팅 리스트 등록",
      popular: true,
    },
    {
      name: "비즈니스",
      price: "290,000원",
      period: "월",
      description: "중견기업을 위한 프리미엄",
      features: [
        "무제한 점검",
        "고급 분석 리포트",
        "실시간 모니터링",
        "전화/이메일 지원",
        "맞춤형 개선 컨설팅",
        "법령 업데이트 알림",
      ],
      cta: "웨이팅 리스트 등록",
      popular: false,
    },
    {
      name: "엔터프라이즈",
      price: "협의",
      period: "",
      description: "대기업 맞춤형 솔루션",
      features: [
        "모든 비즈니스 기능",
        "전담 컨설턴트 배정",
        "온사이트 교육",
        "커스텀 개발",
        "API 연동 지원",
        "24/7 지원",
      ],
      cta: "문의하기",
      popular: false,
    },
  ]

  return (
    <>
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">가격 정책</h2>
            <p className="text-lg text-muted-foreground">기업 규모에 맞는 합리적인 가격으로 시작하세요</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    인기
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-4">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-auto ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => setIsModalOpen(true)}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
