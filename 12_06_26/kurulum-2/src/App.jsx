import { useState } from 'react'

import Demo1JSXBasic from './component/Demo1JSXBasic'
import Demo2Component from './component/Demo2Component'
import Demo3propsBasic from './component/Demo3propsBasic'
import Demo4propsChildren from './component/Demo4propsChildren'
import Demo5Rendering from './component/Demo5Rendering'
import Demo6ListRendering from './component/Demo6ListRendering'
import Demo7EventHandling from './component/Demo7EventHandling'
import Demo8ReadOnlyprops from './component/Demo8ReadOnlyProps'
import Demo9DeaultProps from './component/Demo9DefaultProps'
import Demo11EticaretSepeti from './component/Demo11EticaretSepeti'


function App() {
  const [selectedDemo, setSelectedDemo] = useState(1)
  const renderDemo = () => {
    switch (selectedDemo) {
      case 1:
        return <Demo1JSXBasic />;
      case 2:
        return <Demo2Component />;
      case 3:
        return <Demo3propsBasic />;
      case 4:
        return <Demo4propsChildren />;
      case 5:
        return <Demo5Rendering />;
      case 6:
        return <Demo6ListRendering />;
      case 7:
        return <Demo7EventHandling />;
           case 8:
        return <Demo8ReadOnlyprops />;
        case 9:
        return <Demo9DeaultProps />;
                 case 11:
        return <Demo11EticaretSepeti />;
      default:
        return <Demo1JSXBasic />
    }
  }

  const demolar = [
    { id: 1, ad: "Demo 1: Temel Jsx" },
    { id: 2, ad: "Demo 2: Bileşenler" },
    { id: 3, ad: "Demo 3: Props" },
    { id: 4, ad: "Demo 4: Props Children" },
    { id: 5, ad: "Demo 5: Koşullu Render" },
    { id: 6, ad: "Demo 6: Listeleme Render" },
    { id: 7, ad: "Demo 7: Evend handlin" },
    { id: 8, ad: "Demo 8: Read Only" },
    { id: 9, ad: "Demo 9: Default Props" },
    { id: 11, ad: "Demo 11: Eticaret Sepeti" }





  ]

  return (
    <>
      <div className='p-4'>
        <div className='border'>
          <div className='p-4 bg-blue-400'>
            <h1 className='text-white text-xl'>Reac ve Props Paneli</h1>
          </div>
          <div className='grid grid-cols-4'>
            <div className='border-r'>
              <div className='sidebar-list'>
                {demolar.map((demo) => (
                  <button key={demo.id}
                    onClick={() => setSelectedDemo(demo.id)}
                    className={selectedDemo === demo.id ? "bg-blue-500 text-while" : "bg-gray-500"}>{demo.ad}
                  </button>
                ))}
              </div>
            </div>

            <div className='col-span-3'>
              <div className="p-4">
                {renderDemo()}
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
