import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="gradient-primary text-white py-16">
      <div className="container-main text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8 text-blue-100">
          Join thousands of satisfied customers enjoying our digital services
        </p>
        <Link href="/signup" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 inline-block">
          Create Account
        </Link>
      </div>
    </section>
  )
}
