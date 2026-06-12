import React from "react";

const UrunKutusu = (props) => {
    return (
        <div className="card">
            <h4 className="mt-2">{props.ad}</h4>
            <div className="mt-2">
                {props.stokAdeti > 0 ? (
                    <span className="badge-succes">Stokta var ({props.stokAdeti}) adet</span>
            ):(<span className="badge-danger">Stokta yok - tükendi</span>)
        }
        </div>


         
            <div className="mt-2">
                {props.indirimdemi && (
                    <span className="badge-danger">Kampanyalı Urun</span>
                )}
        </div >
        </div>
    )
}

        

            const Demo5Rendering = ()=>{
                return(
                    <div className="p-4">
                        <h3 className="text-xl font-bold">Demo 5. Koşullu render</h3>
                        <div className="product-grid">
                            <UrunKutusu ad="Televizyon" stokAdeti ={5} indirimdemi={true}/>
                            <UrunKutusu ad="buzdolabı" stokAdeti ={0} indirimdemi={false}/>
                            <UrunKutusu ad="mikrodalga" stokAdeti ={2} indirimdemi={true}/>





                        </div>
                    </div>
                )
            }

            export default Demo5Rendering