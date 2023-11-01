import React from 'react'
import Title from './Title'

function Contents() {

  //자료는 무조건 return 위에
  const contentItem = [
    {
      img : "https://via.placeholder.com/200x200",
      title : "블러드시티7",
      desc : "스페셜 위크"
    },
    {
      img : "https://via.placeholder.com/200x200",
      title : "카카오 선물하기에",
      desc : "바오패밀리가 떴다!"
    },
    {
      img : "https://via.placeholder.com/200x200",
      title : "스마트예약",
      desc : "굿즈#"
    },
    {
      img : "https://via.placeholder.com/200x200",
      title : "푸바오의",
      desc : "뚠빵 마들렌"
    },
    {
      img : "https://via.placeholder.com/200x200",
      title : "SWEET CAFE OPEN",
      desc : "필굿 솜카페"
    },
    {
      img : "https://via.placeholder.com/200x200",
      title : "2023 호러메이즈 리턴즈",
      desc : "극강의 공포를 체험하라"
    },
    {
      img : "https://via.placeholder.com/200x200",
      title : "더헬스와 함께",
      desc : "땡스 기빙 파티"
    },
    {
      img : "https://via.placeholder.com/200x200",
      title : "감성 충만 콘서트",
      desc : "Fall in Garden Concert"
    }
  ]
  
  const cosmetic = [
    {
      img : "https://image.lgcare.com/vdlWebSrc/upload/site/product/thumbnail_20220623112595041.png",
      title : "VDL 아이파인 에센셜 아이래쉬 세럼",
      price : "23,000원"
    },
    {
      img : "https://image.lgcare.com/vdlWebSrc/upload/site/product/thumbnail_20220623112595041.png",
      title : "VDL 아이파인 브로우카라",
      price : "18,000원"
    },
    {
      img : "https://image.lgcare.com/vdlWebSrc/upload/product/image/KR52703014_color_img.png",
      title : "VDL 퍼펙팅 선 피니싱 팩트",
      price : "25,000원"
    },
    {
      img : "https://image.lgcare.com/vdlWebSrc/upload/site/product/thumbnail_20221228101410324.jpg",
      title : "VDL커버스테인 퍼펙팅 파운데이션",
      price : "30,000원"
    },
    {
      img : "https://image.lgcare.com/vdlWebSrc/upload/site/product/thumbnail_20221107103856447.jpg",
      title : "VDL 립스테인 멜티드 샤인",
      price : "23,000원"
    },
    {
      img : "https://image.lgcare.com/vdlWebSrc/upload/site/product/thumbnail_20220930103650221.jpg",
      title : "VDL 커버스테인 퍼펙팅 쿠션",
      price : "34,000원"
    },
    {
      img : "https://image.lgcare.com/vdlWebSrc/upload/product/attach_image/KR52703007_file_name_1680240327108.jpg",
      title : "VDL 퍼펙팅 선베이스 톤업 40ML",
      price : "34,000원"
    },
    {
      img : "https://image.lgcare.com/vdlWebSrc/upload/product/attach_image/KR52702999_file_name_1649637677538.png",
      title : "VDL 치크스테인 블러셔",
      price : "23,000원"
    },
  ]

  return (
    <>
      <div className='mx-auto max-w-7xl flex flex-wrap text-center'>
        {
          contentItem.map((e,i)=>{
            return(
              <div key={i} className='basis-[49%] md:basis-[23.5%]'>
                <img src={e.img} alt='연습' title={e.title} aria-label='설명' aria-hidden='true' className='w-full'/>
                <p>{e.title}</p>
                <span className=''>{e.desc}</span>
              </div>
            )
          })
        }
      </div>
      <Title />
      <div className='mx-auto max-w-7xl flex flex-wrap'>
        {
          cosmetic.map((e,i)=>{
            return(
              <div key={i} className='basis-[50%] md:basis-[23.5%] mb-10 text-center'>
                <img src={e.img} alt='연습' title={e.title} aria-label='cosmetic' aria-hidden='true' className='w-[235px] h-[235px] border' />
                <p>{e.title}</p>
                <span>{e.desc}</span>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Contents