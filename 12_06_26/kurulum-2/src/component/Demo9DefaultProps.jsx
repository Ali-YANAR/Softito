import React from "react";
const ProfilKarti=({isim="Ali hocamız ", rol="Borsa Kaplanı"})=>{
    return(
        <div className="card"> 
            <h4 className="font-bold">{isim}</h4>
            <p className="text-gray-300">Rol:{rol}</p>            
        </div>
    )
}

const Demo9DeaultProps=()=>{
    return(
        <div className="p-4">
            <h3 className="text-xl font-bold">Demo 9: Varsayılan (dafault) Props  </h3>
            <div className="product-grid" >
                <ProfilKarti isim="Ali YILMAZ" rol="Yönetici" />
                <ProfilKarti isim="Tam hataylı " rol="Aygen" />
                <ProfilKarti />  
            </div>
        </div>
    )
}

export default Demo9DeaultProps;