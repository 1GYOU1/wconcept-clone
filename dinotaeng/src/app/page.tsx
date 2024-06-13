'use client'

import Link from "next/link"
import Header from "./header"
import Footer from "./footer"
import { useEffect, useState } from 'react';
import styled from "./page.module.scss"
import { fetchGallery } from "@/fetch/fetchGallery";

// aos
import 'aos/dist/aos.css'
import AOS from 'aos';

import { StoriesSwiperList } from "@/components/stories/Stories";

// 메인 페이지
function Page() {
  const [galleryList, setGalleryList] = useState<any[]>()

    useEffect(() => {
      // useEffect를 이용하여 데이터를 1회 호출한다
      const init = async () => {
          const { data } = await fetchGallery()
          setGalleryList(data)
          console.log(data)
      }
      init()
    }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full bg-[#EFEDE6]">

      <Header/>

      <div className="main_area pb-[5vw]">

        <div className="main_1 bg-[url('/images/main_bg.png')] bg-top bg-[length:100%_auto]">
          <img src="/images/main_img.gif"/>
        </div>

        <div className="main_2 my-28">
          <h3 className="text-[65px] text-center font-['AmericusSansAged'] text-[#B13F35] font-bold" 
          data-aos="fade-up" data-aos-once="true">Life in Marshville</h3>
          <div className="movie_box w-[35%] my-8 mx-auto">
            <video src="https://player.vimeo.com/progressive_redirect/playback/913155636/rendition/1080p/file.mp4?loc=external&amp;signature=4fde946188b7e20322b8159688bffb0ed6f3087b429b0132d988b1ff22b8ba4f" autoPlay={true} loop={true} muted={true} playsInline={true}></video>
          </div>
          <div className="small_txt text-[18px] text-center text-[#B13F35]">Dinotaeng ® Since 2018</div>
        </div>

        <div className="main_3 py-44">
          <h3 className="text-[65px] text-center font-['AmericusSansAged'] text-[#B13F35] font-bold" 
          data-aos="fade-up" data-aos-once="true">Meet our villagers</h3>
          <div className="img_box w-[55%] max-w-[900px] my-24 mx-auto">
            <Link href={'/'}>
              <img src="/images/main_3.png" alt="메인 이미지 2"/>
            </Link>
          </div>
        </div>

        <div className="main_4 my-44">
            <StoriesSwiperList />
        </div>

        <div className="main_5">
            <ul className={styled.mainGallery}>
              {galleryList && galleryList.map((item:any) => (
                  <li key={`stories${item._id}`}>
                      <Link href={'/'}>
                      <img src={item.thumbnail} />
                      </Link>
                  </li>
              ))}
            </ul>
        </div>

        <div className="main_6 mt-40">
          <ul className="flex flex-wrap w-[95%] mx-auto">
            <li className="w-1/4">
              <Link href={'/'} className="block mx-10 mb-10">
                <span className="relative">
                  <img src="/images/main_product_1_hover.png" alt="메인 제품 이미지 1-1" />
                  <img className="absolute top-0 left-0 transition ease-in-out hover:opacity-20 duration-300" src="/images/main_product_1.png" alt="메인 제품 이미지 1" />
                </span>
                <p className="name pt-4 text-center text-[16px]">Oreo BOBO PLUSH TAG</p>
                <p className="price text-center text-[14px]">₩16,000</p>
              </Link>
            </li>
            <li className="w-1/4">
              <Link href={'/'} className="block mx-10 mb-10">
                <span className="relative">
                  <img src="/images/main_product_1_hover.png" alt="메인 제품 이미지 1-1" />
                 <img className="absolute top-0 left-0 transition ease-in-out hover:opacity-20 duration-300" src="/images/main_product_1.png" alt="메인 제품 이미지 1" />
                </span>
                <p className="name pt-4 text-center text-[16px]">Oreo BOBO PLUSH TAG</p>
                <p className="price text-center text-[14px]">₩16,000</p>
              </Link>
            </li>
            <li className="w-1/4">
              <Link href={'/'} className="block mx-10 mb-10">
                <span className="relative">
                  <img src="/images/main_product_1_hover.png" alt="메인 제품 이미지 1-1" />
                 <img className="absolute top-0 left-0 transition ease-in-out hover:opacity-20 duration-300" src="/images/main_product_1.png" alt="메인 제품 이미지 1" />
                </span>
                <p className="name pt-4 text-center text-[16px]">Oreo BOBO PLUSH TAG</p>
                <p className="price text-center text-[14px]">₩16,000</p>
              </Link>
            </li>
            <li className="w-1/4">
              <Link href={'/'} className="block mx-10 mb-10">
                <span className="relative">
                  <img src="/images/main_product_1_hover.png" alt="메인 제품 이미지 1-1" />
                 <img className="absolute top-0 left-0 transition ease-in-out hover:opacity-20 duration-300" src="/images/main_product_1.png" alt="메인 제품 이미지 1" />
                </span>
                <p className="name pt-4 text-center text-[16px]">Oreo BOBO PLUSH TAG</p>
                <p className="price text-center text-[14px]">₩16,000</p>
              </Link>
            </li>
            <li className="w-1/4">
              <Link href={'/'} className="block mx-10 mb-10">
                <span className="relative">
                  <img src="/images/main_product_1_hover.png" alt="메인 제품 이미지 1-1" />
                 <img className="absolute top-0 left-0 transition ease-in-out hover:opacity-20 duration-300" src="/images/main_product_1.png" alt="메인 제품 이미지 1" />
                </span>
                <p className="name pt-4 text-center text-[16px]">Oreo BOBO PLUSH TAG</p>
                <p className="price text-center text-[14px]">₩16,000</p>
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <Footer/>

    </div>
  )
}

export default Page