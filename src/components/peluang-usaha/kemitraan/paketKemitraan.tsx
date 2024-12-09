import GradientTitle from "@/components/common/GradientTitle";
import { LucideCrown, LucideRocket, LucideSend, LucideTrendingUp } from "lucide-react";
import { NextPage } from "next";

const PaketKemitraan: NextPage = ({}) => {
    return (
        <div className="text-white">
            <div className="text-2xl font-bold opacity-50 ">PAKET KEMITRAAN</div>
            <div className=""><GradientTitle text="APA SAJA PAKET KEMITRAAN PINELEAF ?"/></div>
            <div className="grid grid-cols-3 mt-3 gap-2">
                <div className="container w-full bg-[#18181B] rounded-2xl border-gray-500 border ">
                    <LucideRocket className="my-5 ml-24 w-32 h-32"/>
                    <div className="text-2xl font-thin">Paket Kickstart Lite</div>
                    <div className="text-xs mt-2 opacity-50">Paket ini cocok untuk kamu yang baru memulai perjalanan bisnis. Dengan investasi minimal, kamu sudah bisa mendapatkan perlengkapan dasar dan pelatihan cepat untuk memulai bisnis cuci sepatu.</div>
                    <div className="mt-28 text-4xl text-center font-bold">
                        <span className="relative align-top top-[-10px]">Rp </span>
                        200.000
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="flex items-center justify-between bg-costumBgCard text-white pl-4 mt-10 mb-10 rounded-full border border-gray-600 hover:bg-gray-700 transition">
                            <span className="mr-2">Konsultasi</span> 
                            <span className="px-5 bg-gray-700 rounded-full p-1 m-[3px]">
                                <LucideSend className="w-4 h-4"/>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="container bg-[#18181B] rounded-2xl border-gray-500 border w-full">
                    <LucideTrendingUp className="my-5 ml-24 w-32 h-32"/>
                    <div className="text-2xl font-thin">Paket Rise & Shine</div>
                    <div className="text-xs mt-2 opacity-50">Paket ini dirancang untuk kamu yang ingin memperluas usaha dengan modal lebih besar. Dilengkapi dengan perlengkapan yang lebih lengkap dan pelatihan mendalam, kamu akan siap bersinar dalam bisnis jasa cuci sepatu.</div>
                    <div className="mt-28 text-4xl text-center font-bold">
                        <span className="relative align-top top-[-10px]">Rp </span>
                        200.000
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="flex items-center justify-between bg-costumBgCard text-white pl-4 mt-10 mb-10 rounded-full border border-gray-600 hover:bg-gray-700 transition">
                            <span className="mr-2">Konsultasi</span> 
                            <span className="px-5 bg-gray-700 rounded-full p-1 m-[3px]">
                                <LucideSend className="w-4 h-4"/>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="container bg-[#18181B] rounded-2xl border-gray-500 border w-full">
                    <LucideCrown className="my-5 ml-24 w-32 h-32"/>
                    <div className="text-2xl font-thin">Paket Supreme Trailblazer</div>
                    <div className="text-xs mt-2 opacity-50">Paket paling lengkap untuk kamu yang ingin menjadi pionir di industri ini. Dengan perlengkapan bisnis full-set, pelatihan eksklusif, dan strategi bisnis yang terbukti, paket ini adalah pilihan tepat bagi mereka yang ingin menciptakan jejak besar dalam dunia bisnis jasa cuci sepatu.</div>
                    <div className="mt-24 text-4xl text-center font-bold">
                        <span className="relative align-top top-[-10px]">Rp </span>
                        200.000
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="flex items-center justify-between bg-costumBgCard text-white pl-4 mt-10 mb-10 rounded-full border border-gray-600 hover:bg-gray-700 transition">
                            <span className="mr-2">Konsultasi</span> 
                            <span className="px-5 bg-gray-700 rounded-full p-1 m-[3px]">
                                <LucideSend className="w-4 h-4"/>
                            </span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PaketKemitraan;