import './App.css'
import Button from './components/ui/button/Button'
import DropDown from './components/ui/drop-down/DropDown'

function App() {

  const onClick = () => {
    console.log('Click happened!')
  }

  const dropDownOptions = [
    { name: "one", value: "one"},
    { name: "two", value: "two"},
  ]

  return (
    <div className='kanakk-lander'>
      Kanakk | Kanakkupusthakam
      <Button onClick={(() => { onClick() })}>Sample</Button>
      <DropDown options={dropDownOptions} />
    </div>
  )
}

export default App
