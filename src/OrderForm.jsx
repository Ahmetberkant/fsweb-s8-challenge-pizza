import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const extrasList = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalapeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

export default function OrderForm({ setOrderData }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  const basePrice = 85.5;
  const extraPrice = 5;
  const pizzaName = "Position Absolute Acı Pizza";
  const total = (basePrice + extras.length * extraPrice) * quantity;

  const isFormValid =
    name.trim().length >= 3 &&
    size &&
    dough &&
    extras.length >= 4 &&
    extras.length <= 10;

  const handleExtraChange = (e) => {
    const value = e.target.value;
    if (extras.includes(value)) {
      setExtras(extras.filter((x) => x !== value));
    } else if (extras.length < 10) {
      setExtras([...extras, value]);
    } else {
      alert("En fazla 10 malzeme seçebilirsiniz.");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert(
        "Lütfen isim (en az 3 karakter), boyut, hamur seçiniz ve 4-10 arası malzeme seçiniz."
      );
      return;
    }

    const payload = {
      isim: name,
      boyut: size,
      hamur: dough,
      malzemeler: extras,
      özel: note,
      adet: quantity,
      toplamFiyat: total.toFixed(2),
    };

    axios
      .post("https://reqres.in/api/pizza", payload, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((response) => {
        console.log("API Response:", response.data);
        alert("Siparişiniz başarıyla alındı!");
        setOrderData(response.data);
        history.push("/success");
      })
      .catch((err) => {
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
        console.error(err);
      })
      .finally(() => {});
  };

  return (
    <div className="min-h-screen bg-[#ffff]">
      <div className="bg-red-600 py-4">
        <h1 className="text-white font-bold text-2xl text-center">
          Teknolojik Yemekler
        </h1>
      </div>

      <div className=" bg-[#FAF7F2]">
        <div className="flex justify-center ">
          <img
            src="/images/iteration-2-images/pictures/form-banner.png"
            alt="Pizza"
          />
        </div>

        <p className="text-center text-gray-500 text-sm pt-4 mb-0 md:pr-110">
          Anasayfa &gt; <span className="text-red-500">Sipariş Oluştur</span>
        </p>
      </div>

      <div className="flex justify-center bg-[#FAF7F2]">
        <div className="w-full max-w-2xl px-6 py-8 ">
          <h2 className="text-2xl font-bold pb-2">{pizzaName}</h2>
          <div className="flex justify-between">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              {basePrice.toFixed(2)}₺
            </p>
            <div className="flex gap-20">
              <p className="text-sm text-gray-500 mb-4">4.9 </p>
              <p className="text-sm text-gray-500 mb-4">(200)</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6 leading-7">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </div>

      <div className="max-w-2xl w-full mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="!w-full bg-white p-8 ">
          <div className="mb-4">
            <label className="block font-semibold mb-1">İsim *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınızı giriniz (en az 3 karakter)"
              className="w-full border rounded px-3 py-2 bg-[#FAF7F2] "
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-8 pt-2 pb-5">
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Boyut Seç *</h3>
              <div className="flex gap-3">
                {["S", "M", "L"].map((b) => (
                  <label key={b} className="cursor-pointer">
                    <input
                      type="radio"
                      name="boyut"
                      value={b}
                      checked={size === b}
                      onChange={(e) => setSize(e.target.value)}
                      className="hidden"
                    />
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-full transition-colors ${
                        size === b ? "bg-[#FFEECC]" : "bg-[#FAF7F2]"
                      }`}
                    >
                      <span className="text-base font-medium">{b}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex-1 ">
              <h3 className="font-semibold mb-2">Hamur Seç *</h3>
              <select
                className="border rounded-[6px] px-3 h-[56px] w-[258px] bg-[#FAF7F2]"
                value={dough}
                onChange={(e) => setDough(e.target.value)}
              >
                <option value="">-Hamur Kalınlığı-</option>
                <option value="İnce">İnce</option>
                <option value="Orta">Orta</option>
                <option value="Kalın">Kalın</option>
              </select>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Ek Malzemeler</h3>
            <p className="text-sm text-gray-500 mb-2">
              En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {extrasList.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={item}
                    checked={extras.includes(item)}
                    onChange={handleExtraChange}
                    className="hidden"
                  />
                  <div className="flex items-center gap-3 ">
                    <div
                      className={`w-10 h-10 flex-shrink-0 rounded flex items-center justify-center border-2 border-gray-400 transition-colors ${
                        extras.includes(item) ? "bg-[#FDC913]" : "bg-[#FAF7F2]"
                      }`}
                    >
                      {extras.includes(item) && (
                        <span className="text-white font-bold text-lg">✔</span>
                      )}
                    </div>
                    <span className="leading-none">{item}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 pt-10">Sipariş Notu</h3>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              className="w-full border rounded px-3 py-2  bg-[#FAF7F2]"
            />
          </div>
          <div className="w-[560px] h-px bg-[#5F5F5F80] mt-4"></div>

          <div className="flex flex-col sm:flex-row justify-between gap-6 pt-4">
            <div className="flex items-center gap-2 ">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 bg-yellow-400 rounded"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 bg-yellow-400 rounded"
              >
                +
              </button>
            </div>

            <div className="border rounded px-2 pt-4 w-full sm:w-64 bg-[#FAF7F2]">
              <p>Sipariş Toplamı</p>

              <p className="flex justify-between">
                <span>Seçimler</span> <span>{extras.length * extraPrice}₺</span>
              </p>
              <p className="flex justify-between font-bold text-base mt-2 text-[#CE2829]">
                <span>Toplam</span> <span>{total.toFixed(2)}₺</span>
              </p>
              <button
                type="submit"
                className={`mt-4 w-full py-2 rounded font-bold  ${
                  isFormValid
                    ? "bg-yellow-400 hover:bg-yellow-500"
                    : "bg-yellow-400 cursor-not-allowed"
                }`}
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
