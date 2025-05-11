import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-black shadow-md p-4 flex justify-between items-center">
      <h1 className="text-neon font-bold text-2xl">Neon Tech</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-pink-400">Início</Link>
        <Link to="/sobre" className="hover:text-pink-400">Sobre</Link>
        <Link to="/contato" className="hover:text-pink-400">Contato</Link>
      </div>
    </nav>
  )
}
