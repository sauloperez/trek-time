import Nav from '../components/nav'
import Input from '../components/input'

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

        <div className="mt-14 max-w-xs mx-auto">
          <div className="grid gap-6">
            <Input
              name="slope"
              label="Desnivell"
              placeholder="600"
              unit="metres"
            />
            <Input
              name="distance"
              label="Distància"
              placeholder="10"
              unit="kilòmetres"
            />

            <div>
              <p className="text-gray-400">Temps total</p>
              <div className="text-4xl font-medium text-gray-700">
                7h 30m
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
