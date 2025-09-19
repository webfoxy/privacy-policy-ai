import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Building2, Shield } from "lucide-react"

export function ValuePropositionSection() {
  const valueProps = [
    {
      icon: Rocket,
      title: "스타트업",
      subtitle: "빠른 컴플라이언스 준비",
      description:
        "제한된 리소스로도 전문가 수준의 개인정보처리방침 점검이 가능합니다. 법무팀 없이도 안전하게 서비스를 런칭하세요.",
    },
    {
      icon: Building2,
      title: "중견기업",
      subtitle: "법적 리스크 최소화 + 비용 절감",
      description: "외부 법무법인 의뢰 비용을 대폭 절감하면서도 더욱 정확하고 신속한 점검 서비스를 받을 수 있습니다.",
    },
    {
      icon: Shield,
      title: "공공기관/협력사 대상 기업",
      subtitle: "신뢰도 강화 + 인증 대응력",
      description: "공공기관 입찰이나 대기업 협력사 등록 시 요구되는 개인정보보호 인증 준비를 체계적으로 지원합니다.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">사용자별 가치 제시</h2>
          <p className="text-lg text-muted-foreground">기업 규모와 상황에 맞는 맞춤형 솔루션을 제공합니다</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {valueProps.map((prop, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <prop.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{prop.title}</CardTitle>
                <CardDescription className="text-primary font-semibold">{prop.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
