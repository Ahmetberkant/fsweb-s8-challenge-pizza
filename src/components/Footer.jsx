import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white mt-10">
      <div className="container !mx-auto py-6 grid grid-cols-1 md:grid-cols-3">
        <div className=" ml-10 lg:ml-30">
          <h2 className="text-2xl font-bold mb-4">
            Teknolojik <br /> Yemekler
          </h2>
          <div className="flex items-start gap-3 mb-3">
            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
            <p>
              341 Londonderry Road, <br /> Istanbul Türkiye
            </p>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <FaEnvelope className="text-yellow-400 mt-1" />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="flex items-start gap-3">
            <FaPhone className="text-yellow-400 mt-1" />
            <p>+90 216 123 45 67</p>
          </div>
        </div>

        <div className="ml-10">
          <h3 className="text-xl font-semibold mb-4 ml-7">Hot Menu</h3>
          <ul className="space-y-2">
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="lg:mr-30">
          <h3 className="text-xl font-semibold mb-4">Instagram</h3>
          <div className="grid grid-cols-3 gap-1">
            <img
              src="/images/iteration-2-images/footer/insta/li-0.png"
              alt="Insta"
              className="w-full h-[100px] object-cover rounded"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-1.png"
              alt="Insta"
              className="w-full h-[100px] object-cover rounded"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-2.png"
              alt="Insta"
              className="w-full h-[100px] object-cover rounded"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-3.png"
              alt="Insta"
              className="w-full h-[100px] object-cover rounded"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-4.png"
              alt="Insta"
              className="w-full h-[100px] object-cover rounded"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-5.png"
              alt="Insta"
              className="w-full h-[100px] object-cover rounded"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm flex items-center justify-evenly ">
        <span>© 2023 Teknolojik Yemekler.</span>
        <FaTwitter className="text-white w-4 h-4" />
      </div>
    </footer>
  );
};

export default Footer;
