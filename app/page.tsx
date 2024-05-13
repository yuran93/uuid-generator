"use client"
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from "react"
import { Button } from '@/components/ui/button'
import copy from 'copy-to-clipboard'

export default function Home() {
  const [uuid, setUuid] = useState("")

  const generate = () => {
    setUuid(uuidv4())
    copy(uuid)
  }

  useEffect(() => {
    setUuid(uuidv4())
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <p className="text-sm text-center font-semibold p-5 rounded-lg border-gray-200 border w-96">{uuid}</p>
        <div className="flex space-x-3 mt-3 justify-center">
          <Button onClick={generate}>Generate and Copy</Button>
        </div>
      </div>
    </main>
  );
}
