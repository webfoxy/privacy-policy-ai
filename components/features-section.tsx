import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, FileCheck, BarChart3 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "자동 점검 (AI 기반)",
      description: "인공지능이 개인정보처리방침을 자동으로 분석하고 법적 요구사항 준수 여부를 실시간으로 점검합니다.",
    },
    {
      icon: FileCheck,
      title: "작성지침 준거 여부 확인",
      description: "개인정보보호위원회 작성지침에 따른 필수 항목 포함 여부와 내용의 적절성을 체계적으로 검토합니다.",
    },
    {
      icon: BarChart3,
      title: "리포트 제공",
      description: "법적 요구사항 충족 여부, 개선 필요 항목, 권장사항을 포함한 상세한 분석 리포트를 제공합니다.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-card/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">핵심 기능</h2>
          <p className="text-lg text-muted-foreground">AI 기술로 개인정보처리방침 점검을 혁신합니다</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
