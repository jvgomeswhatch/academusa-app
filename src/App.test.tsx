import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('deve renderizar o título Salve, rapaziada!', () => {
    render(<App />)
    const heading = screen.getByText(/Salve, rapaziada!/i)
    expect(heading).toBeInTheDocument()
  })

  it('deve renderizar o parágrafo descritivo', () => {
    render(<App />)
    const paragraph = screen.getByText(/Teste de ambiente de CI\/CD/i)
    expect(paragraph).toBeInTheDocument()
  })
})