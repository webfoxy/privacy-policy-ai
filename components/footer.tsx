export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">AI</span>
              </div>
              <span className="text-xl font-bold">PrivacyCheck</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI 기반 개인정보처리방침 점검 서비스로 법적 리스크를 최소화하세요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  기능 소개
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  가격 정책
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API 문서
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">지원</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  고객 지원
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  도움말
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">법적 고지</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  쿠키 정책
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 PrivacyCheck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
