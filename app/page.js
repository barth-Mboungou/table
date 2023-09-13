import Table from '@/components/table'
import { data } from '@/data/Data'


export default function Home() {
  return (
    <main>
      <>
      <Table datas={data}/>
      </>
    </main>
  )
}
