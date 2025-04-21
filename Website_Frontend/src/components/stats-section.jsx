export default function StatsSection() {
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "100+", label: "Satisfied Clients" },
    { value: "50+", label: "Team Members" },
  ]

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
