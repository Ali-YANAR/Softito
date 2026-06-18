export default function OrderTracking() {
    return (
        <>
            <main className="tracking-container">
                <div className="tracking-card">
                    <h2 className="form-title">Sipariş Takibi</h2>
                    <form>
                        <div className="form-group">
                            <label className="form-label">Sipariş Numarası</label>
                            <input
                                className="form-input"
                                type="text"
                                placeholder="Örn:12345"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">E-Posta Adresi</label>
                            <input
                                className="form-input"
                                type="email"
                                placeholder="Ahmet@yilmaz.com"
                            />
                        </div>
                        <button className="form-submit" type="submit">
                            Siparişi Sorgula
                        </button>
                    </form>
                </div>
                <div className="tracking-card">
                    <h3 className="value-title">Sipariş Durumu: Hazırlanıyor</h3>
                    <div className="timeline">
                        <div className="timeline-step">
                            <div className="timeline-icon timeline-icon-active"></div>
                            <span className="timeline-label timeline-label-active">Sipariş Alındı</span>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="timeline-icon timeline-icon-active"></div>
                        <span className="timeline-label timeline-label-active">Hazırlanıyor</span>
                    </div>
                    <div className="timeline-step">
                        <div className="timeline-icon timeline-icon-active">3</div>
                        <span className="timeline-label timeline-label-active">Kargoya Verildi</span>
                    </div>
                    <div className="timeline-step">
                        <div className="timeline-icon timeline-icon-active">4</div>
                        <span className="timeline-label timeline-label-active">Teslim Edildi</span>
                    </div>
                </div>
            </main>
        </>
    );
}
