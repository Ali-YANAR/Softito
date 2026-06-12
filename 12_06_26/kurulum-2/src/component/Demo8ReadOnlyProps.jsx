import React from "react";
 


const DegistirilmeyenKart=(props)=>{
    const deneVeHataGoster=()=>{
        try{
            props.baslik = "Yeni başlık";
             
        }catch(hata){
            alert("hata yakalandı !props değiştirilemez"+hata.message);
        }
    }
    return(
        <div className="card">
            <h4 className="font-bold">{props.baslik}</h4>
            <p className="text-gray-500">Gelen Prop Değeri{props.baslik}</p>
            <button onClick={deneVeHataGoster} className="btn-red">Prop değiştirmeyi dene</button> 
        </div>
    )
}

const Demo8ReadOnlyprops=()=>{
    return(
        <div className="p-4">
            <h3 className="text-xl font-bold">Demo 8: Salt okunur read only props</h3>
            <div className="m-t">
                 <DegistirilmeyenKart baslik="Değiştirilmeyen kart başlık" />
            </div>
        </div>
    )
}
export default Demo8ReadOnlyprops;