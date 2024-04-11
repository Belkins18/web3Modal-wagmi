import { Link } from 'react-router-dom'

export const MainPage = () => {
  const routerLink = [
    {
      path: 'wagmi',
      name: 'wagmi',
    },
    {
      path: 'ethers',
      name: 'ethers',
    },
  ]
  return (
    <main>
      <section>
        <nav>
          <ul>
            {routerLink.map(({ path, name }, index) => {
              return (
                <li key={index}>
                  <Link to={path}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </section>
    </main>
  )
}
