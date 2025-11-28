import prisma from '@/lib/db'
const Page =  async() => {

  const users = await prisma.user.findMany()

  return (
    <div className='text-red-800'>hello world
    {JSON.stringify(users)}</div>
  )
}

export default Page //39.48 