import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('deve renderizar o título Hello World', () => {
    render(<App />)
    const heading = screen.getByText(/Hello World!/i)
    expect(heading).toBeInTheDocument()
  })

  it('deve renderizar o parágrafo descritivo', () => {
    render(<App />)
    const paragraph = screen.getByText(/Este é um App.tsx com Vite e React/i)
    expect(paragraph).toBeInTheDocument()
  })
})