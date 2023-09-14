import Table from '@/components/table'
import { cols, data } from '@/data/Data'


export default function Home() {
  return (
    <main>
      <>
      <Table datas={data} columns={cols}/>
      </>
    </main>
  )
}
