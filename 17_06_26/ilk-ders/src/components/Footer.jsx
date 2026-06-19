export default function Footer(setView,setSelectedCategory){
    const handleCategoryLink=(cat) =>{
        setSelectedCategory(cat);
        setView("home");
    };
    return(
    <>
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
                <h3 className="footer-title">N11clone</h3>
                <h3 className="footer-link" onClick={()=>setView("about")}>Hakkımızda</h3>
                <h3 className="footer-link" onClick={()=>setView("about")}>Kariyer</h3>
                <h3 className="footer-link" onClick={()=>setView("help")}>İletişim</h3> 
            </div>
            <div className="footer-section" >
                <h3 className="footer-link"  onClick={()=>setView('categories')}>Kategoriler</h3>
                <h3 className="footer-link" onClick={()=>handleCategoryLink("Telefon")}>Telefon</h3>
                <h3 className="footer-link" onClick={()=>handleCategoryLink("Aksesuar")}>Aksesuar</h3>
                <h3 className="footer-link" onClick={()=>handleCategoryLink("Bilgisayar")}>Bilgisayar</h3> 
            </div>
             <div className="footer-section">
                <h3 className="footer-title">Müşteri Hizmetleri</h3>
                <h3 className="footer-link" onClick={()=>setView("help")}>Yardım Merkezi</h3>
                <h3 className="footer-link" onClick={()=>setView("tracking")}>Sipariş Takibi</h3>
                <h3 className="footer-link" onClick={()=>setView("return")}>İade ve Değişim</h3> 
            </div>
                        <div className="footer-section">
                <h3 className="footer-title">Güvenli Alışveriş</h3>
                <p className="text-xs text-gray-500" >
                    %100 güvenli ödeme altyapısı ile kart bilgileriniz korunmaktadır.
                </p>
            </div>
            <div className="footer-bottom">
                <p>@2026 Ali YANAR - Tüm Hakkı Saklıdır.</p>
            </div>
        </div>

    </footer>

    </>
    )
}