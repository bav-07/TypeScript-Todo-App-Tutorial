import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {

  // const [state, setState] = useState<string | number>('')
  const [input, setInput] = useState<string>('')
  const [todos, setTodos] = useState<string[]>([])

  const inputRef = useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() !== '') {
      setTodos([...todos, input])
      setInput('')
    }
  }  

  return (
    <form onSubmit={handleSubmission}>
      <div className='flex items-center w-full max-w-lg gap-2 p-5 m-auto'>
        <Input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          className='w-full px-4 py-2 bg-transparent border-[1px] outline-none transition-all duration-200 border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-blue-600'
          placeholder='start typing...'
        />
        <button
          type="submit"
          className='px-5 py-2 text-sm font-normal transition-all duration-100 text-gray-100 bg-blue-600 border-2 border-blue-600 active:scale-95 rounded-xl'
        >
          Submit
        </button>
      </div>
    </form>
  )
}
