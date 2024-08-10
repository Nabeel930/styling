export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        <div className="border border-dashed border-white text-center h-14 items-center bg-green-900">
            <p className="my-auto">Hi this is nested layout user page in service page </p>
        </div>
        {children}
        </section>
  }