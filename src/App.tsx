import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import './globals.css'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from './components/ui/form'
import { Input } from './components/ui/input'

import { sindicatos } from './data/sindicatos'
import { useEffect, useState } from 'react'

const FormSchema = z.object({
  sindicato: z.string(),
})

export function App() {
  const [searchValue, setSearchValue] = useState('')
  const [filteredList, setFilteredList] = useState(new Set())

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      sindicato: '',
    },
  })

  function onSubmit({ sindicato }: z.infer<typeof FormSchema>) {
    setSearchValue(sindicato)
  }

  useEffect(() => {
    const result = []
    const addedNames = new Set()

    if (searchValue.length < 3) {
      setFilteredList(sindicatos)
      return
    }

    sindicatos.flatMap((sindicato) =>
      sindicato.coverage
        .filter(
          (coverageItem) =>
            coverageItem
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .includes(
                searchValue
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, ''),
              ) && !addedNames.has(sindicato.name),
        )
        .forEach((coverageItem) => {
          result.push(coverageItem)
          addedNames.add(sindicato)
        }),
    )

    setFilteredList(addedNames)
  }, [searchValue])

  function handleOnKeyDown(e) {
    e.key === 'Enter' && e.preventDefault()
  }

  return (
    <div className="flex justify-center max-w-1100 mx-auto">
      <div className="flex flex-col max-w-1100 mx-auto">
        <Form {...form}>
          <form
            onKeyDown={handleOnKeyDown}
            className="my-6"
            onChange={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="sindicato"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-0"
                      placeholder="Procure pela cidade de atuação do sindicato laboral"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <div className="w-[1100px]">
          {Array.from(filteredList).length === 0 && searchValue.length > 2 && (
            <div className="mb-6 border border-red border-opacity-80 rounded p-4 w-1100px">
              <h1>Nenhum sindicato encontrado</h1>
            </div>
          )}
          {Array.from(filteredList).map((item, i) => {
            return (
              <div
                key={i}
                className="mb-6 border border-red border-opacity-80 rounded p-4 max-w-1100"
              >
                <Item item={item} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Item(props: { item: any }): React.ReactNode {
  return (
    <div className="flex flex-col p-2">
      <h1 className="font-bold pb-6">{props.item.name}</h1>
      <div className="grid grid-cols-2">
        <div>
          <div className="flex gap-1">
            <p className="font-semibold">Endereço</p>
            <span>{props.item.address}</span>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold">Bairro</p>
            <span>{props.item.town}</span>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold">Cidade</p>
            <span>{props.item.city}</span>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold">UF</p>
            <span>{props.item.state}</span>
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <p className="font-semibold">Telefone</p>
            <span>{props.item.phone}</span>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold">Email</p>
            <span>{props.item.email}</span>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold">Website</p>
            <span>{props.item.website}</span>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold">Data base</p>
            <span>{props.item.basedata}</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold pb-4 py-6">ABRANGÊNCIA</h1>
        <div className="grid grid-cols-2 gap-1">
          {props.item.coverage.map((city) => {
            return (
              <span key={city} className="">
                {city}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/**
 * <iframe src="https://gcrozariol.github.io/sindicatos/" style="height:100vh; width:100vw; overflow:scroll; border:none;"/>
 */
