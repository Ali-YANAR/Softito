import {  useState } from "react";

const Object = () => {
    const [kulanici, setKullanici] = useState({
        ad: "Ali", 
        Soyad: "Veli", 
        eposta: "ali@aliveli.com",
        yaS: 50,
    });

    const adGuncelle = (yeniAd) => {
        setKullanici((prev) => ({
            ...prev,
            ad: yeniAd
        }));
    };
    const soyadGuncelle = (yeniSoyad) => {
        setKullanici((prev) => ({
            ...prev,
            soyad: yeniSoyad
        }));
    };
    const epostaGuncelle = (yeniEposta) => {
        setKullanici((prev) => ({
            ...prev,
            eposta: yeniEposta
        }));
    };
    const yasGuncelle = (yeniYas) => {
        setKullanici((prev) => ({
            ...prev,
            yas: Number(yeniYas) || 0,
        }));
    };
    return (
        <div className="p-4">
            <h3 className="demo-title">Demo Nesne(object) state yönetimi</h3>
            <div className="demo-card-layout-grid max-w-3xl">
                <div className="demo-card demo-card-3xl space-y-4">
                    <h4 className="card-title-bordered">Profil Düzenle</h4>
                    <div>
                        <label className="demo-label">Ad:</label>
                        <input type="text" value={kulanici.ad} onChange={(e) => adGuncelle(e.target.value)} className="demo-input"></input>
                    </div>
                    <div>
                        <label className="demo-label">Soyad:</label>
                        <input type="text" value={kulanici.soyad} onChange={(e) => soyadGuncelle(e.target.value)} className="demo-input"></input>
                    </div>
                    <div>
                        <label className="demo-label">Eposta:</label>
                        <input type="text" value={kulanici.eposta} onChange={(e) => epostaGuncelle(e.target.value)} className="demo-input"></input>
                    </div>
                    <div>
                        <label className="demo-label">yaş:</label>
                        <input type="text" value={kulanici.yas} onChange={(e) => yasGuncelle(e.target.value)} className="demo-input"></input>
                    </div>

                </div>
                <div className="demo-card demo-card-3xl demo-profile-card">
                    <div>
                        <span className="badge-success mb-3">Canlı Profil Kartı</span>
                        <h4 className="demo-title">{kulanici.ad}</h4>
                        <div className="demo-state-info space-y-2">
                            <div>
                                <strong>E-Posta:</strong>
                                {kulanici.eposta}
                            </div>
                            <div>
                                <strong>Yas:</strong>
                                {kulanici.yas}
                            </div>

                        </div>

                        <div className="demo-code-foter">
                            <strong>Mevcut state Nesnesi (JSON)</strong>
                            <pre className="demo-pre">
                                {JSON.stringify(kulanici, null, 2)}</pre>
                        </div>


                    </div>

                </div>

            </div>

        </div>
    )

}

export default Object