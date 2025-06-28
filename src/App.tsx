import { useSuspenseQuery } from "@tanstack/react-query"
import Card from "./Card"
import { useRef } from "react"
import createUsersQueryOptions from "./createUsersQueryOptions"

function App() {
  // const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
  //   useInfiniteQuery(createUsersInfiniteQueryOptions())
  const scrollRef = useRef<HTMLDivElement>(null)

  const { data: users } = useSuspenseQuery(createUsersQueryOptions())

  // const users = data?.pages.flatMap((page) => page.users) ?? []

  // const virtualizer = useVirtualizer({
  //   count: users?.length ?? 0,
  //   estimateSize: () => 160,
  //   getScrollElement: () => scrollRef.current,
  // })

  // const virtualItems = virtualizer.getVirtualItems()

  // useEffect(() => {
  //   const lastItem = virtualItems[virtualItems.length - 1]
  //   if (
  //     !hasNextPage ||
  //     isFetchingNextPage ||
  //     !lastItem ||
  //     lastItem.index < users.length - 6
  //   )
  //     return
  //   fetchNextPage()
  // }, [virtualItems, hasNextPage, isFetchingNextPage, users, fetchNextPage])

  return (
    <div
      ref={scrollRef}
      className="mx-auto max-w-2xl w-full h-screen overflow-y-auto flex flex-col gap-4"
    >
      {users?.map((user) => (
        <Card key={user._id} user={user} />
      ))}
      {/* <div
        className="relative"
        style={{ height: `${virtualizer.getTotalSize()}px` }}
      >
        {virtualItems.map((vItem) => {
          const user = users?.[vItem.index]
          if (!user) return null
          return (
            <div
              key={vItem.key}
              style={{
                transform: `translateY(${vItem.start}px)`,
                height: `${vItem.size}px`,
              }}
              className="absolute top-0 left-0 w-full"
              data-index={vItem.index}
            >
              <Card key={user._id} user={user} />
            </div>
          )
        })}
      </div>
      {isFetchingNextPage && (
        <div className="flex justify-center items-center">
          Loading More data...
        </div>
      )} */}
    </div>
  )
}

export default App
