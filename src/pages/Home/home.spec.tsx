import { screen } from '@testing-library/react'

import theme from 'styles/theme'
import { renderWithTheme } from '../../utils/helpers'
import { Home } from '.'

describe('<Home />', () => {
  it('should be able to render the home page', async () => {
    const { container } = renderWithTheme(<Home />)

    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()

    setTimeout(() => {
      expect(screen.getByText(/react tips/i, { selector: 'aside' }))
      expect(screen.getByText(/hello world/i)).toBeInTheDocument()
      expect(container).toHaveStyle({
        backgroundColor: theme.grid.container,
      })
    }, 100)
  })
})
