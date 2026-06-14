

import './App.css'

function App() {
 

  return (
    <>
    <div className=''>
      <h3>Ürün arama ve depolama</h3>
      <div>
          <input className='' type="text" placeholder='Urun adi ara...' /> 
      </div>
      <div>
        <button>Tümü</button>
        <button>Aksesuar</button>
        <button>Ekran</button>
        <button>Ses</button>
        <button>Depolama</button> 
      </div>
      <div>
        <h3>Urun Listesi</h3>
        <div>
          urun bilgileri
        </div>
      </div>
      <div>
          <h3>Sepetiniz</h3>
          <p>Ürün adı gelecek</p>
          <p>Ürün Fiyatı gelecek</p>
          <button> - </button>
          <label>1</label>
          <button> + </button>
          <hr /> 

        <p>Toplam Tutar:TL</p>
        <button>Temizle</button>
        <button>Satın Al</button>

           
      </div>

    </div>
    <div></div>
    <div></div>

    </>
  )
}

export default App
