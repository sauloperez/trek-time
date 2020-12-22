import Nav from '../components/nav'
import Calculator from '../components/calculator'

export default function IndexPage() {
  return (
    <div>
      <div className="container mx-auto py-28">
        <div>
          <h1 className="text-5xl text-center text-gray-800 dark:text-gray-100">
            Trek Time
          </h1>
          <p className="text-center text-gray-500">Calcula quina durada té l'excursió</p>
        </div>

        <Calculator />
      </div>
    </div>
  )
}
