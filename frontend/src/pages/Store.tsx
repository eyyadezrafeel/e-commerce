import Items from '../ItemsComp/Items'

interface StoreProps {
  isDark: boolean;
}

export default function Store({ isDark }: StoreProps) {
  return (
    <div>
      <Items isDark={isDark} />
    </div>
  )
}
