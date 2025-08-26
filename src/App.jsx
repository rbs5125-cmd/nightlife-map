// src/App.jsx
import React from "react";
import heroBg from "./assets/hero-bg.gif";
import roomImg from "./assets/room.gif";
import poolImg from "./assets/pool.gif";

/** ====== 페이지 기본 정보만 여기서 수정하면 전체 반영됩니다 ====== */
const SITE = {
  brand: "대전룸싸롱", // 좌상단 로고 텍스트
  year: "",
  h1Line1: "",
  h1Line2: "",
  phone: "010-2174-7954",
  addressLine: "대전 유성구 봉명동",
  // 지도 검색어(또는 좌표 문자열), 길찾기 링크
  mapQuery: "대전광역시 유성구 온천로 9",
  directionsUrl:
    "https://maps.google.com/?q=%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C+%EB%B6%80%EC%82%B0%EC%A7%84%EA%B5%AC+%EB%B6%80%EC%A0%84%EB%A1%9C+28",
  telegramHandle: "TENPRO_K", // @ 없이
  telegramUrl: "https://t.me/TENPRO_K", // 웹/앱 자동 열림
};
/** =============================================================== */

// 17장 GIF 자동 수집 (001.gif ~ 017.gif, 이름순 정렬)
const gallery = Object.entries(
  import.meta.glob("./assets/gallery/*.gif", {
    eager: true,
    query: "?url", // Vite 경고 대체: as:'url' → query:'?url'
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b)) // 001 → 017
  .map(([, url]) => url);

const telHref = `tel:${SITE.phone.replaceAll("-", "")}`;
const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.mapQuery
)}&output=embed`;

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/85 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="text-2xl font-extrabold tracking-tight text-red-500">
            {SITE.brand}
          </div>
          <nav className="ml-auto hidden sm:flex items-center gap-4 text-sm">
            <a href="#gallery" className="hover:text-fuchsia-400">
              소개
            </a>
            <a href="#howto" className="hover:text-fuchsia-400">
              이용 방법
            </a>
            <a href="#rooms" className="hover:text-fuchsia-400">
              서비스
            </a>
            <a href="#map" className="hover:text-fuchsia-400">
              오시는 길
            </a>
          </nav>

          <a
            href={telHref}
            className="ml-3 px-3 py-1.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-sm"
          >
            예약하기
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden min-h-[520px]">
        {/* 배경 이미지 */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-center" // bg-cover 제거
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "contain",      // 전체가 다 보이도록
            backgroundRepeat: "no-repeat",  // 반복 금지
            backgroundPosition: "center top",
            backgroundColor: "#0a0a0a",     // 여백 생길 때 배경색
          }}
        />
        {/* 어둡게 오버레이 */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-16 pb-24 text-center">
          <div className="text-5xl md:text-6xl font-extrabold leading-tight">
            <div className="text-neutral-200">{SITE.year}</div>
            <div>{SITE.h1Line1}</div>
            <div>{SITE.h1Line2}</div>
          </div>

          <p className="mt-6 text-neutral-200 text-lg max-w-3xl mx-auto leading-relaxed">

          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={telHref}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold"
            >
              📞 바로 연결하기 · {SITE.phone}
            </a>
            <a
              href="#map"
              className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700"
            >
              위치 확인
            </a>
          </div>
        </div>

        {/* 보라색 띠 배너 */}
        <div className="relative z-10 bg-fuchsia-700 border-y-8 border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center">
            <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
              ❤️대전 유성구 봉명동❤️
              <br />
              정직한 가격과 믿을 수 있는 서비스, 24시간 문의 환영
              <br className="hidden md:block" />
              ❤️문의 {SITE.phone}❤️
            </p>
          </div>
        </div>
      </section>

      {/* INTRO 텍스트 블록 */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-4 text-center text-neutral-100">
          <p className="text-[18px] md:text-[28px] leading-relaxed font-bold">
            단순한 유흥이 아닌, 고객이 품격 있는 휴식과 의미있는 <br />
            시간을 보낼 수 있는 프리미엄 공간입니다.
          </p>
          <ul className="space-y-2 text-neutral-300 text-[18px] md:text-[20px] leading-relaxed">
            <li>• 세련된 분위기 연출</li>
            <li>• 추억을 위한 캐주얼한 분위기</li>
            <li>• 비즈니스 모임을 위한 프라이빗한 공간</li>
          </ul>
        </div>

        {/* 중앙 큰 CTA들 */}
        <div className="mt-12 grid gap-5 max-w-xl mx-auto">
          <a
            href={telHref}
            className="block text-center rounded-2xl bg-green-500 hover:bg-green-400 text-neutral-900 font-extrabold text-2xl py-6"
          >
            📞{SITE.phone}
          </a>

          {/* 텔레그램: 필요시 앱 URL로 교체 가능 */}
          {/* 예: telegramAppUrl = "tg://resolve?domain=TENPRO_K" */}
          <a
            href={SITE.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center rounded-2xl bg-neutral-900 hover:bg-neutral-800
             border-2 border-white font-semibold text-xl py-5"
          >
            ✈️ 텔레그램 문의 @{SITE.telegramHandle}
          </a>

          {/* 카톡 채널 URL은 필요 시 교체 */}
          <a
            href="https://open.kakao.com/o/sMF2iuOh"
            target="_blank"
            rel="noreferrer"
            className="block text-center rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-neutral-900 font-extrabold text-xl py-5"
          >
            카톡 문의
          </a>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          다양한 초이스 가능!
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* 왼쪽: 룸싸롱 */}
          <article>
            <div
              className="relative h-[320px] w-full rounded-3xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${roomImg})` }}
              role="img"
              aria-label="대전 룸싸롱"
            >
              {/* 살짝 어둡게(텍스트 가독성) */}
              <div className="absolute inset-0 bg-black/0" />
            </div>

            <div className="mt-6 text-center">
              <div className="flex justify-center items-center gap-2 text-pink-400 font-extrabold text-2xl">
                <span className="inline-block w-3 h-3 rounded-full bg-pink-500" />
                대전 룸싸롱
              </div>
              <p className="mt-4 text-neutral-300">
                기본적인 룸살롱 서비스를 넘어, 고객님의 취향과 기대에 맞춘 맞춤형
                엔터테인먼트를 제공합니다. 품격 있는 순간을 경험해 보세요.
              </p>
              <a
                href="#rooms" // 필요시 버튼 링크 변경
                className="inline-block mt-6 rounded-xl border border-neutral-700 px-5 py-3 text-neutral-200 hover:bg-neutral-800"
              >
                대전 룸싸롱
              </a>
            </div>
          </article>

          {/* 오른쪽: 풀싸롱 */}
          <article>
            <div
              className="relative h-[320px] w-full rounded-3xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${poolImg})` }}
              role="img"
              aria-label="대전 풀싸롱"
            >
              <div className="absolute inset-0 bg-black/0" />
            </div>

            <div className="mt-6 text-center">
              <div className="flex justify-center items-center gap-2 text-pink-400 font-extrabold text-2xl">
                <span className="inline-block w-3 h-3 rounded-full bg-pink-500" />
                대전 풀싸롱
              </div>
              <p className="mt-4 text-neutral-300">
                세련된 인테리어가 조화를 이루는 프리미엄 라운지. 깊이 있는 대화와
                각종 모임까지 품격 있게 즐길 수 있습니다.
              </p>
              <a
                href="#rooms"
                className="inline-block mt-6 rounded-xl border border-neutral-700 px-5 py-3 text-neutral-200 hover:bg-neutral-800"
              >
                대전 풀싸롱
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* GIF 갤러리: 세로 정렬(원본 크기, 화면 넘치면 줄이기) */}
      <section id="gallery" className="anchor-target bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
            소개
          </h2>

          {/* 세로 스택 */}
          <div className="flex flex-col items-center gap-6">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`갤러리 ${String(i + 1).padStart(3, "0")}`}
                className="w-auto h-auto max-w-full rounded-xl border border-neutral-800 bg-neutral-900 select-none"
                loading="lazy"
                draggable="false"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 이용 방법 (아이콘은 이모지로 간단히) */}
      <section
        id="howto"
        className="anchor-target bg-neutral-950 border-t border-neutral-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
            이용 방법
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
              <div className="text-5xl mb-3">📞</div>
              <h3 className="font-bold mb-2">전화 예약</h3>
              <p className="text-neutral-300">
                언제나 대기 중이며 빠른 예약을 <br />
                도와드립니다.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
              <div className="text-5xl mb-3">🚗</div>
              <h3 className="font-bold mb-2">픽업</h3>
              <p className="text-neutral-300">
                대전 각 지역 픽업 서비스 제공
                <br />
                (사전 문의).
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
              <div className="text-5xl mb-3">🕰️</div>
              <h3 className="font-bold mb-2">이용하기</h3>
              <p className="text-neutral-300">
                편안하고 품격 있는 환경에서
                <br /> 시간 보내기.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 지도 섹션 */}
      <section id="map" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow">
              <div className="aspect-[16/10] bg-neutral-900">
                <iframe
                  title="오시는 길"
                  src={mapEmbedSrc}
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-400">
              지도 임베드는 Google Maps를 사용합니다. 위치 수정은 파일 상단의{" "}
              <code>mapQuery</code>를 변경하세요.
            </p>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-extrabold">오시는 길</h3>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <div className="text-neutral-400 text-sm">주소/영업 안내</div>
              <div className="font-medium mt-1">{SITE.addressLine}</div>
              <div className="mt-1 text-neutral-300">매일 18:00 – 05:00 (유동적)</div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={telHref}
                  className="px-4 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white"
                >
                  전화 {SITE.phone}
                </a>
                <a
                  href={SITE.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700"
                >
                  길찾기 열기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 고정 콜바 (모바일 노출) */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden">
        <div className="mx-3 mb-3 rounded-xl bg-fuchsia-600 text-white shadow-lg">
          <a href={telHref} className="flex items-center justify-center py-3 font-semibold">
            📞 지금 전화하기 · {SITE.phone}
          </a>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="border-t border-neutral-800 text-neutral-400 text-xs py-6 px-4 text-center">
        © {new Date().getFullYear()} {SITE.brand}. 모든 권리 보유.
      </footer>

      {/* 맨위로 버튼 */}
      <a
        href="#"
        className="fixed bottom-5 right-5 w-10 h-10 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 flex items-center justify-center text-white"
        aria-label="맨 위로"
      >
        ↑
      </a>
    </div>
  );
}
