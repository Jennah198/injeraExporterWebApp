export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">Habesha Harvest</h1>

        <div className="space-x-6">
          <a href="#products">Products</a>
          <a href="#contact">Order</a>
        </div>
      </div>
    </nav>
  )
}
