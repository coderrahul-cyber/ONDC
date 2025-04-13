import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className=' flex flex-col items-center gap-2 font-rejouice  text-white justify-center h-[80vh]'>
      <h2 className='text-4xl '>Not Found Page</h2>
      <Link href="/" >Return Home</Link>
    </div>
  )
}