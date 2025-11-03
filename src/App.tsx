function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <main className="mx-auto max-w-3xl space-y-8 px-6 py-12">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold">你的名字</h1>
          <p className="text-lg text-slate-600">前端开发工程师</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <span>📧 you@example.com</span>
            <span>📱 123-456-7890</span>
            <span>🌐 your-portfolio.com</span>
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">简介</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            两到三句话概述自己的职业目标与核心技能，明确你能带来的价值。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">工作经历</h2>
          <div className="space-y-1">
            <div className="flex flex-wrap items-baseline justify-between text-sm text-slate-600">
              <span className="font-medium text-slate-800">
                公司名称 | 职位
              </span>
              <span>2021.01 - 至今</span>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>用一句话说明项目或职责亮点。</li>
              <li>量化成果，例如提升性能、增长数据等。</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">教育背景</h2>
          <div className="flex flex-wrap items-baseline justify-between text-sm text-slate-600">
            <span className="font-medium text-slate-800">学校名称 | 专业</span>
            <span>毕业年份</span>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">技能</h2>
          <div className="flex flex-wrap gap-2 text-sm text-slate-700">
            <span className="rounded-full bg-slate-200 px-3 py-1">React</span>
            <span className="rounded-full bg-slate-200 px-3 py-1">
              TypeScript
            </span>
            <span className="rounded-full bg-slate-200 px-3 py-1">
              Tailwind CSS
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
