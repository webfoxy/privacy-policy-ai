import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Award, Lock } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "실제 법률 자문도 포함되나요?",
      answer:
        "저희 서비스는 법령 준거 여부 점검 및 가이드 제공에 특화된 서비스입니다. 구체적인 법률 자문이 필요한 경우 전문 법무법인을 연결해드릴 수 있습니다.",
    },
    {
      question: "AI 점검의 정확도는 어느 정도인가요?",
      answer:
        "개인정보보호위원회 공식 지침과 관련 법령을 기반으로 학습된 AI가 95% 이상의 정확도로 점검을 수행합니다. 지속적인 학습을 통해 정확도를 개선하고 있습니다.",
    },
    {
      question: "업로드한 문서는 안전하게 보관되나요?",
      answer:
        "모든 문서는 암호화되어 처리되며, 점검 완료 후 즉시 삭제됩니다. 고객의 개인정보와 기업 정보 보호를 최우선으로 합니다.",
    },
    {
      question: "어떤 형태의 파일을 업로드할 수 있나요?",
      answer: "PDF, DOC, DOCX, TXT 형태의 파일을 지원합니다. 향후 더 다양한 형태의 파일 지원을 계획하고 있습니다.",
    },
    {
      question: "점검 결과에 대한 이의제기는 어떻게 하나요?",
      answer:
        "점검 결과에 대해 궁금한 점이나 이의가 있으시면 고객지원팀을 통해 문의해주세요. 전문가가 직접 검토하여 답변드립니다.",
    },
  ]

  const trustSignals = [
    {
      icon: Shield,
      title: "개인정보보호위원회 지침 기반",
      description: "공식 작성지침과 관련 법령을 완전히 반영한 점검 기준",
    },
    {
      icon: Award,
      title: "데이터 보호 인증",
      description: "ISO 27001 정보보안 관리체계 인증 획득",
    },
    {
      icon: Lock,
      title: "보안 강화",
      description: "엔드투엔드 암호화로 고객 데이터 완전 보호",
    },
  ]

  return (
    <section className="py-20 bg-card/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">자주 묻는 질문</h2>
          <p className="text-lg text-muted-foreground">궁금한 점들을 미리 확인해보세요</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">신뢰도 보장</h3>
            <div className="space-y-6">
              {trustSignals.map((signal, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <signal.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{signal.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed">{signal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
