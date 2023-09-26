import { Link, routes } from '@redwoodjs/router'

type BudgetLayoutProps = {
  children?: React.ReactNode
}

const BudgetLayout = ({ children }: BudgetLayoutProps) => {
  return (
    <>
      <header>
      <h1>
        <Link to={routes.home()}>Budget berekenen</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.budget()}>Budget</Link>
          </li>
        </ul>        
      </nav>
      </header>
    <main>{children}</main>
    </>
  )

}

export default BudgetLayout
