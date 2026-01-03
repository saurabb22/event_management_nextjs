import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className='log'>
                <Image src="/logo/logo.png" alg= "logo" width={24} height={30} />
            </Link>
        </nav>
    </header>
  )
}

export default Navbar


// sbhk4325_db_user
// Fijazw0QlmKrtqIW
// mongodb+srv://sbhk4325_db_user:Fijazw0QlmKrtqIW@cluster0.mzfyrqi.mongodb.net/?appName=Cluster0
// 