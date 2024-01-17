import { zodResolver } from '@hookform/resolvers/zod'
import { InputContent } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'

const searchFormSchemas = z.object({
  query: z.string(),
})
type SearchFormInput = z.infer<typeof searchFormSchemas>

interface InputProps {
  getPost: (query?: string) => Promise<void>
  postLength: number
}

export function Input({ getPost, postLength }: InputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchemas),
  })
  async function handleOnSubmit(data: SearchFormInput) {
    await getPost(data.query)
  }
  return (
    <InputContent onSubmit={handleSubmit(handleOnSubmit)}>
      <div>
        <h2>Publicações</h2>
        <span>{postLength} publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </InputContent>
  )
}
