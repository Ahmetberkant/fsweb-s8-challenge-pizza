import React from "react";

function OrderSuccess({ order }) {
  return (
    <div className="min-h-screen bg-[#B62E25] flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-3xl font-extrabold mb-4">Teknolojik Yemekler</h1>
      <p className="text-[#FDC913] italic text-xl mb-2">lezzetin yolda</p>
      <h2 className="text-5xl font-light tracking-widest mb-4">
        SİPARİŞ ALINDI
      </h2>
      <div className="w-40 border-t border-white mb-8"></div>

      <div className="text-center space-y-2 mb-10">
        <h3 className="text-lg font-semibold">{order?.pizzaName || "Pizza"}</h3>
        <p>
          <span className="font-medium">İsim: </span>
          {order?.isim}
        </p>
        <p>
          <span className="font-medium">Boyut: </span>
          {order?.boyut}
        </p>
        <p>
          <span className="font-medium">Hamur: </span>
          {order?.hamur}
        </p>
        <p>
          <span className="font-medium">Ek Malzemeler: </span>
          <span className="font-semibold">{order?.malzemeler?.join(", ")}</span>
        </p>
        <p>
          <span className="font-medium">Adet: </span>
          {order?.adet}
        </p>
        {order?.özel && (
          <p>
            <span className="font-medium">Not: </span>
            {order.özel}
          </p>
        )}
      </div>

      <div className="border border-white/70 rounded-md p-6 w-72 text-left">
        <h4 className="font-semibold mb-4">Sipariş Toplamı</h4>
        <div className="flex justify-between mb-2">
          <span>Seçimler</span>
          <span>{order?.malzemeler?.length * 5}₺</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Toplam</span>
          <span>{order?.toplamFiyat}₺</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
