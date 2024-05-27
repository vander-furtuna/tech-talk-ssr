import { Link } from '@/components/Link'

export default function Home() {
  return (
    <>
      <h1 className="title">Dashboard</h1>
      <Link href="/me">Meu Perfil</Link>
    </>
  )
}
