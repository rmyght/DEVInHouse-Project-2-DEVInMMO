export const ChangeTheme = ({ main, setMain }) => {
  const handleChangeTheme = () => {
    setMain(!main)
  }
  const text = main ? 'Toggle Dark Theme' : 'Toggle Main Theme'
  return (
    <button onClick={handleChangeTheme}>{text}</button>
  )
}