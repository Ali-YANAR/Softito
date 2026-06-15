import './App.css'

function App() { 
  return (
    <>
    <div className=''>
      <h3 className='text-tx font-bold'>
        Ürün arama ve depolama</h3>
      <div>
          <input className='' type="text" placeholder='Urun adi ara...' /> 
      </div>
      <div className='flex flex-col'>
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
          <p>Fiyar : Ürün Fiyatı gelecek</p>
          <button> - </button>
          <label>Urun Adeti</label>
          <button> + </button>
          <button>Sil</button>
          <hr /> 

        <p>Toplam Tutar: Toplam FiyatTL</p>
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
