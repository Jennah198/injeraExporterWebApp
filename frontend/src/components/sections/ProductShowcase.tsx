type Product = {
  id: string
  name: string
  image: string
}

export default function ProductShowcase({ products }: { products: Product[] }) {
  return (
    <section id="products" className="py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="shadow rounded-lg overflow-hidden">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
