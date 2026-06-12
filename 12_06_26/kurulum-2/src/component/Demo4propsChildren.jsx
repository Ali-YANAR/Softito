import React from "react";

const Kart =(props)=>{
    return(
        <div className="card">
            {props.children}
        </div>
    )
}

const Demo4propsChildren=()=>{
    return(
        <div className="p-4">
            <h3 className="text-lx font-bold">Demo 4 props.children kullanımı</h3>
            <div className="prodect-grid">
                <Kart>
                    <h4 className="font-bold">Kart:1 Başlık</h4>
                    <p className="text-sm">Birinci Kartın içerik metni</p>
                </Kart>
                <Kart>
                    <h4 className="font-bold">Kart:2 Başlık</h4>
                    <button className="btn-blue">Kart Butonu</button>
                </Kart>

            </div>
        </div>
    )
}

export default Demo4propsChildren