"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import type { ColumnsType } from "antd/es/table";
import {
  BankOutlined,
  BulbOutlined,
  CalendarOutlined,
  CameraOutlined,
  CheckCircleOutlined,
  CloseOutlined,
  CopyOutlined,
  CrownOutlined,
  EnvironmentOutlined,
  GiftOutlined,
  HeartOutlined,
  HomeOutlined,
  InstagramOutlined,
  MailOutlined,
  MenuOutlined,
  PhoneOutlined,
  ShopOutlined,
  SoundOutlined,
  TeamOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import {
  App as AntdApp,
  Button,
  Card,
  Carousel,
  Modal,
  Table,
  Tag,
  Tooltip,
} from "antd";

const ASSET_BASE =
  "https://qctxfsjabmqnnkzsfcrx.supabase.co/storage/v1/object/public/Ganesh%20Images";

const logoUrl = `${ASSET_BASE}/QRCode/Logo.png`;
const upiId = "9059307481-3@ybl";
const instagramUrl = "https://www.instagram.com/software_bois";

const navItems = [
  { href: "#idols", label: "Idols" },
  { href: "#nimarjanam", label: "Nimarjanam" },
  { href: "#winners", label: "Winners" },
  { href: "#laddu-auction", label: "Laddu Auction" },
  { href: "#gang", label: "The Gang" },
  { href: "#members", label: "Members" },
  { href: "#donate", label: "Donate" },
  { href: "#find-us", label: "Find Us" },
];

const idols = [
  {
    year: "2026",
    date: "14 Sep 2026",
    sponsor: "Akhil",
    image: `${ASSET_BASE}/2026%20blur/2026%20muragan.png`,
    alt: "Softwarebois 2026 Ganesha idol",
  },
  {
    year: "2025",
    date: "27 Aug 2025",
    sponsor: "Choppa Ravi",
    image: `${ASSET_BASE}/2025/Lord%20ganesh_2025.jpg`,
    alt: "Softwarebois 2025 Ganesha idol",
    album: "https://photos.app.goo.gl/R85nDbXAaZJMZVMs9",
  },
  {
    year: "2024",
    date: "7 Sep 2024",
    sponsor: "Kranti Kiran",
    image: `${ASSET_BASE}/2024/LordGanesh_2024.JPG`,
    alt: "Softwarebois 2024 Ganesha idol",
    album: "https://photos.app.goo.gl/R85nDbXAaZJMZVMs9",
  },
  {
    year: "2023",
    date: "19 Sep 2023",
    sponsor: "Annamreddi Venu",
    image: `${ASSET_BASE}/2023/lord%20ganesh_2023.png`,
    alt: "Softwarebois 2023 Ganesha idol",
    album: "https://photos.app.goo.gl/R85nDbXAaZJMZVMs9",
  },
  {
    year: "2022",
    date: "31 Aug 2022",
    sponsor: "Senior Team",
    image: `${ASSET_BASE}/2022/lord%20ganesh_2022.png`,
    alt: "Softwarebois 2022 Ganesha idol",
    album: "https://photos.app.goo.gl/9HiCBBxJBaT9d7JE8",
  },
  {
    year: "2021",
    date: "10 Sep 2021",
    sponsor: "Lagudu Naveen",
    image: `${ASSET_BASE}/2021/lordganesh_2021.jpeg`,
    alt: "Softwarebois 2021 Ganesha idol",
    album: "https://photos.app.goo.gl/9HiCBBxJBaT9d7JE8"
  },
  {
    year: "2019",
    date: "2 Sep 2019",
    sponsor: "Softwarebois",
    image: `${ASSET_BASE}/2019/lordganesh_2019.jpeg`,
    alt: "Softwarebois 2019 Ganesha idol",
    album: "https://photos.app.goo.gl/9HiCBBxJBaT9d7JE8"
  },
];

const nimarjanam = [
  {
    year: "2025",
    meta: "Immersion album",
    image: `${ASSET_BASE}/2025/Lord%20ganesh_2025.jpg`,
    alt: "Softwarebois 2025 Nimarjanam immersion",
    album: "https://photos.app.goo.gl/hHdzkdNEknZYwUfs5",
  },
  {
    year: "2024",
    meta: "Immersion album",
    image: `${ASSET_BASE}/2024/LordGanesh_2024.JPG`,
    alt: "Softwarebois 2024 Nimarjanam immersion",
    album: "https://photos.app.goo.gl/hHdzkdNEknZYwUfs5",
  },
  {
    year: "2023",
    meta: "Immersion album",
    image: `${ASSET_BASE}/2023/lord%20ganesh_2023.png`,
    alt: "Softwarebois 2023 Nimarjanam immersion",
    album: "https://photos.app.goo.gl/hHdzkdNEknZYwUfs5",
  },
  {
    year: "2022",
    meta: "165 photos",
    image: `${ASSET_BASE}/2022/lord%20ganesh_2022.png`,
    alt: "Softwarebois 2022 Nimarjanam immersion",
    album: "https://photos.app.goo.gl/hHdzkdNEknZYwUfs5",
  }
];

type WinnerRow = {
  key: string;
  prize: string;
  winner: string;
  item: string;
};

const winners: Array<{ year: string; rows: WinnerRow[] }> = [
  {
    year: "2025",
    rows: [
      {
        key: "2025-1",
        prize: "1st Prize",
        winner: "Sai Ganesh",
        item: "5 kg Ganesha laddu",
      },
      {
        key: "2025-2",
        prize: "2nd Prize",
        winner: "Akhil",
        item: "4 kg Ganesha laddu",
      },
      {
        key: "2025-3",
        prize: "3rd Prize",
        winner: "Uday",
        item: "3 kg Ganesha laddu",
      },
    ],
  },
  {
    year: "2024",
    rows: [
      {
        key: "2024-1",
        prize: "1st Prize",
        winner: "Allu Shanmukh",
        item: "5 kg laddu",
      },
      {
        key: "2024-2",
        prize: "2nd Prize",
        winner: "Vinay A",
        item: "4 kg laddu",
      },
      {
        key: "2024-3",
        prize: "3rd Prize",
        winner: "Ramesh",
        item: "3 kg laddu",
      },
    ],
  },
  {
    year: "2023",
    rows: [
      {
        key: "2023-1",
        prize: "1st Prize",
        winner: "Ganesh",
        item: "3 kg Ganesha laddu",
      },
      {
        key: "2023-2",
        prize: "2nd Prize",
        winner: "Renuka",
        item: "4 kg Ganesha laddu",
      },
      {
        key: "2023-3",
        prize: "3rd Prize",
        winner: "Sai Kiran",
        item: "3 kg Ganesha laddu",
      },
    ],
  },
];

const gangImages = [
  {
    src: `${ASSET_BASE}/Gang%20Pics/Gang1.jpg`,
    alt: "Softwarebois group photo one",
  },
  {
    src: `${ASSET_BASE}/Gang%20Pics/Gang2.JPG`,
    alt: "Softwarebois group photo two",
  },
  {
    src: `${ASSET_BASE}/Gang%20Pics/Gang3.jpg`,
    alt: "Softwarebois group photo three",
  },
  {
    src: `${ASSET_BASE}/Gang%20Pics/Gang4.jpeg`,
    alt: "Softwarebois group photo four",
  },
];

type Member = {
  name: string;
  role: string;
  image: string;
};

const members: Member[] = [
  {
    name: "Tarun Teja",
    role: "Founder",
    image: `${ASSET_BASE}/Members/Tharuntej.jpeg`,
  },
  {
    name: "Pavan",
    role: "Treasurer",
    image: `${ASSET_BASE}/Members/Pavan.png`,
  },
  {
    name: "Akhil Hari",
    role: "Event Organizer",
    image: `${ASSET_BASE}/Members/Akhilhari.jpeg`,
  },
  {
    name: "Balu",
    role: "Creative Director",
    image: `${ASSET_BASE}/Members/Balu.JPG`,
  },
  {
    name: "Chaitu",
    role: "Event Coordinator",
    image: `${ASSET_BASE}/Members/chaitu.jpg`,
  },
  {
    name: "Manu",
    role: "Media Organizer",
    image: `${ASSET_BASE}/Members/Manohar.jpeg`,
  },
  {
    name: "Adithya",
    role: "Logistics Head",
    image: `${ASSET_BASE}/Members/adithya.jpeg`,
  },
  {
    name: "Akhil",
    role: "Community Head",
    image: `${ASSET_BASE}/Members/Akhil.PNG`,
  },
  {
    name: "Barath",
    role: "Activities Lead",
    image: `${ASSET_BASE}/Members/barath.jpg`,
  },
  {
    name: "Divakar",
    role: "Sponsorship Lead",
    image: `${ASSET_BASE}/Members/diva.jpg`,
  },
  {
    name: "Rohit DJ",
    role: "Support Champion",
    image: `${ASSET_BASE}/Members/DJ.jpg`,
  },
  {
    name: "Harsha",
    role: "President",
    image: `${ASSET_BASE}/Members/harsha.png`,
  },
  {
    name: "Jayanth",
    role: "Pooja Coordinator",
    image: `${ASSET_BASE}/Members/jayanth.jpg`,
  },
  {
    name: "Karthik",
    role: "Art Member",
    image: `${ASSET_BASE}/Members/Karthik.jpg`,
  },
  {
    name: "Kiran",
    role: "Volunteer Captain",
    image: `${ASSET_BASE}/Members/kiran.JPG`,
  },
  {
    name: "Nithu",
    role: "Event Organizer",
    image: `${ASSET_BASE}/Members/nithu.jpg`,
  },
  {
    name: "Praveen",
    role: "Art Manager",
    image: `${ASSET_BASE}/Members/Praveen.jpeg`,
  },
  {
    name: "Ravi",
    role: "Art Member",
    image: `${ASSET_BASE}/Members/ravi.jpg`,
  },
  {
    name: "Sravan",
    role: "Website Administrator",
    image: `${ASSET_BASE}/Members/Sravan.jpeg`,
  },
  {
    name: "Krishna",
    role: "Visarjan Head",
    image: `${ASSET_BASE}/Members/krishna.jpeg`,
  },
];

const donationUses = [
  { label: "Ganesh Idol", icon: <CrownOutlined /> },
  { label: "Pandal", icon: <ShopOutlined /> },
  { label: "Decorations", icon: <BulbOutlined /> },
  { label: "Sound System", icon: <SoundOutlined /> },
  { label: "Prasadam", icon: <HeartOutlined /> },
  { label: "Lucky Draw Gifts", icon: <GiftOutlined /> },
];

const winnerColumns: ColumnsType<WinnerRow> = [
  {
    title: "Prize",
    dataIndex: "prize",
    key: "prize",
    render: (value: string) => <span className="font-bold text-[#9b481f]">{value}</span>,
  },
  {
    title: "Winner",
    dataIndex: "winner",
    key: "winner",
  },
  {
    title: "Prize Item",
    dataIndex: "item",
    key: "item",
  },
];

function getCountdown() {
  const eventDate = new Date("2026-09-14T00:00:00");
  const diff = eventDate.getTime() - Date.now();

  if (diff <= 0) {
    return {
      complete: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    complete: false,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function SectionHeader({
  icon,
  eyebrow,
  title,
  children,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8 flex max-w-3xl flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f766e] text-white">
          {icon}
        </span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-black text-[#241a16] sm:text-4xl">
        {title}
      </h2>
      {children ? <p className="text-base leading-7 text-[#69584a]">{children}</p> : null}
    </div>
  );
}

function FramedImage({
  src,
  alt,
  frameClassName,
  imageClassName = "object-cover",
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  frameClassName: string;
  imageClassName?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className={frameClassName}>
      <Image
        alt={alt}
        className={imageClassName}
        fill
        loading={priority ? "eager" : "lazy"}
        preload={priority}
        sizes={sizes}
        src={src}
      />
    </div>
  );
}

function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getCountdown> | null>(null);

  useEffect(() => {
    const update = () => setTime(getCountdown());
    const timeoutId = window.setTimeout(update, 0);
    const intervalId = window.setInterval(update, 1000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  const displayTime = time ?? {
    complete: false,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const tiles = [
    { label: "Days", value: displayTime.days },
    { label: "Hours", value: displayTime.hours },
    { label: "Minutes", value: displayTime.minutes },
    { label: "Seconds", value: displayTime.seconds },
  ];

  if (displayTime.complete) {
    return (
      <div className="stat-tile mt-8 inline-flex px-5 py-4 text-lg font-extrabold text-white">
        Happy Ganesh Chaturthi
      </div>
    );
  }

  return (
    <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
      {tiles.map((tile) => (
        <div className="stat-tile px-4 py-4 text-center text-white" key={tile.label}>
          <div className="font-display text-3xl font-black sm:text-4xl">
            {String(tile.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-xs font-bold uppercase text-[#ffe4b9]">
            {tile.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState("idols");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!drawerOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawerOpen]);

  const links = (
    <>
      {navItems.map((item) => (
        <a
          className={`nav-pill ${active === item.href.slice(1) ? "active" : ""}`}
          href={item.href}
          key={item.href}
          onClick={() => setDrawerOpen(false)}
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#ead8bd] bg-[#fff8ed]/92 backdrop-blur-xl">
        <div className="container-page flex min-h-[74px] items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="#top" aria-label="Softwarebois home">
            <Image
              alt="Softwarebois logo"
              className="h-11 w-11 rounded-full border border-[#ead8bd] object-cover"
              height={44}
              loading="eager"
              src={logoUrl}
              width={44}
            />
            <span className="font-display text-xl font-black italic leading-none tracking-normal text-[#9b481f] [text-shadow:0_1px_0_rgba(255,240,215,0.95)]">
              Softwarebois
            </span>
          </a>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
            {links}
          </nav>

          <div className="hidden items-center gap-2 lg:flex xl:hidden">
            <a className="nav-pill" href="#donate">
              Donate
            </a>
            <a
              className="instagram-action inline-flex"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramOutlined />
              <span className="ml-2">Instagram</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex">
              <Button
                className="instagram-action"
                href={instagramUrl}
                icon={<InstagramOutlined />}
                target="_blank"
                rel="noreferrer"
              >
                Follow
              </Button>
            </span>
            <button
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-menu-drawer"
              className="mobile-menu-trigger xl:hidden"
              onClick={() => setDrawerOpen(true)}
              type="button"
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </header>

      {drawerOpen && typeof document !== "undefined"
        ? createPortal(
            <div className="mobile-drawer-shell xl:hidden">
              <button
                aria-label="Close navigation menu"
                className="mobile-drawer-backdrop"
                onClick={() => setDrawerOpen(false)}
                type="button"
              />
              <aside
                aria-label="Softwarebois navigation"
                aria-modal="true"
                className="mobile-drawer-panel"
                id="mobile-menu-drawer"
                role="dialog"
              >
                <div className="mobile-drawer-head">
                  <span className="font-display text-lg font-black italic leading-none tracking-normal text-[#9b481f] [text-shadow:0_1px_0_rgba(255,240,215,0.95)]">
                    Softwarebois
                  </span>
                  <button
                    aria-label="Close navigation menu"
                    className="mobile-drawer-close"
                    onClick={() => setDrawerOpen(false)}
                    type="button"
                  >
                    <CloseOutlined />
                  </button>
                </div>

                <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                  {links}
                  <a
                    className="instagram-action inline-flex"
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramOutlined />
                    <span>Follow on Instagram</span>
                  </a>
                </nav>
              </aside>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[78vh] overflow-hidden bg-[#21150f] text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        style={{
          backgroundImage: `url("${ASSET_BASE}/2025/Lord%20ganesh_2025.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="hero-overlay absolute inset-0 -z-10" />

      <div className="container-page flex min-h-[78vh] items-center py-14">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <Image
              alt="Softwarebois Rampuram emblem"
              className="h-16 w-16 rounded-full border border-white/30 object-cover shadow-lg"
              height={64}
              loading="eager"
              src={logoUrl}
              width={64}
            />
            <div>
              <p className="text-sm font-extrabold uppercase text-[#f6c453]">
                Rampuram, Pendurthi, 531173
              </p>
              <p className="text-sm font-semibold text-white/78">
                Ganesh Chaturthi community archive
              </p>
            </div>
          </div>

          <h1 className="font-display text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
            Softwarebois
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/86">
            A youth group from Rampuram village celebrating Ganesh Chaturthi
            every year with idols, immersion, lucky draws, laddu auctions, and
            community memories.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              type="primary"
              size="large"
              href="#idols"
              icon={<CameraOutlined />}
            >
              View Gallery
            </Button>
            <Button
              size="large"
              href="#donate"
              icon={<HeartOutlined />}
            >
              Support Next Year
            </Button>
          </div>

          <Countdown />
        </div>
      </div>
    </section>
  );
}

function MediaCard({
  item,
  actionLabel,
}: {
  item: {
    year: string;
    date?: string;
    meta?: string;
    sponsor?: string;
    image: string;
    alt: string;
    album?: string;
  };
  actionLabel: string;
}) {
  return (
    <Card
      className="flex h-full flex-col overflow-hidden border-[#ead8bd] [&_.ant-card-body]:flex [&_.ant-card-body]:flex-1 [&_.ant-card-body]:flex-col"
      cover={
        <FramedImage
          alt={item.alt}
          frameClassName="media-image"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={item.image}
        />
      }
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl font-black text-[#9b481f]">{item.year}</h3>
          <p className="mt-1 text-sm font-semibold text-[#69584a]">
            {item.date ?? item.meta}
          </p>
        </div>
        <Tag color="volcano">{item.album ? "Album" : "Soon"}</Tag>
      </div>

      {item.sponsor ? (
        <p className="mt-4 min-h-6 text-sm font-semibold text-[#69584a]">
          Idol sponsored by {item.sponsor}
        </p>
      ) : (
        <p className="mt-4 min-h-6 text-sm font-semibold text-[#69584a]">
          Photos and videos from the send-off.
        </p>
      )}

      <div className="mt-auto pt-5">
        <Button
          block
          href={item.album}
          target={item.album ? "_blank" : undefined}
          rel={item.album ? "noreferrer" : undefined}
          disabled={!item.album}
          type={item.album ? "primary" : "default"}
        >
          {item.album ? actionLabel : "Gallery Coming Soon"}
        </Button>
      </div>
    </Card>
  );
}

function GallerySection() {
  return (
    <section className="section-shell section-band" id="idols">
      <div className="container-page">
        <SectionHeader
          icon={<CameraOutlined />}
          eyebrow="Gallery"
          title="Our idols, year by year"
        >
          A living archive of the Ganesha idols welcomed home by Softwarebois,
          with sponsor notes and albums collected in one place.
        </SectionHeader>

        <div className="sm:hidden">
          <Carousel
            autoplay={{ dotDuration: true }}
            autoplaySpeed={3200}
            className="mobile-card-carousel"
            dots
            draggable
            infinite
            pauseOnDotsHover={false}
            pauseOnFocus={false}
            pauseOnHover={false}
            speed={450}
            swipe
            swipeToSlide
            touchMove
            waitForAnimate={false}
          >
            {idols.map((idol) => (
              <div className="pb-10" key={idol.year}>
                <MediaCard actionLabel="View Full Gallery" item={idol} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {idols.map((idol) => (
            <MediaCard actionLabel="View Full Gallery" item={idol} key={idol.year} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NimarjanamSection() {
  return (
    <section className="section-shell" id="nimarjanam">
      <div className="container-page">
        <SectionHeader
          icon={<CalendarOutlined />}
          eyebrow="Immersion"
          title="Nimarjanam memories"
        >
          The final send-off each year, with colors, water, drums, and the walk
          that closes the celebration.
        </SectionHeader>

        <div className="sm:hidden">
          <Carousel
            autoplay={{ dotDuration: true }}
            autoplaySpeed={3200}
            className="mobile-card-carousel"
            dots
            draggable
            infinite
            pauseOnDotsHover={false}
            pauseOnFocus={false}
            pauseOnHover={false}
            speed={450}
            swipe
            swipeToSlide
            touchMove
            waitForAnimate={false}
          >
            {nimarjanam.map((item) => (
              <div className="pb-10" key={item.year}>
                <MediaCard actionLabel="View Immersion Album" item={item} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {nimarjanam.map((item) => (
            <MediaCard actionLabel="View Immersion Album" item={item} key={item.year} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WinnersSection() {
  return (
    <section className="section-shell section-band" id="winners">
      <div className="container-page">
        <SectionHeader
          icon={<TrophyOutlined />}
          eyebrow="Lucky Draw"
          title="Winners each year"
        >
          Names pulled from the box, prizes handed over, and cheers earned fair
          and square.
        </SectionHeader>

        <div className="grid gap-5 xl:grid-cols-3">
          {winners.map((year) => (
            <Card
              className="border-[#ead8bd]"
              key={year.year}
              title={
                <div className="flex items-center gap-2 text-[#241a16]">
                  <TrophyOutlined className="text-[#be5b2e]" />
                  <span>Lucky Draw Winners, {year.year}</span>
                </div>
              }
            >
              <Table
                columns={winnerColumns}
                dataSource={year.rows}
                pagination={false}
                size="middle"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function LadduAuctionSection() {
  return (
    <section className="section-shell" id="laddu-auction">
      <div className="container-page">
        <SectionHeader
          icon={<CrownOutlined />}
          eyebrow="Auction"
          title="Laddu Auction"
        >
          The first laddu auction is highlighted as its own story, with the
          winning bid and winner details easy to scan.
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,0.55fr)] lg:items-center">
          <FramedImage
            alt="Laddu auction winners Kiran and Sravan in 2025"
            frameClassName="square-image rounded-lg border border-[#ead8bd]"
            sizes="(max-width: 1024px) 100vw, 60vw"
            src={`${ASSET_BASE}/2025/Laddu%20Auction_2025.jpg`}
          />
          <div className="rounded-lg border border-[#ead8bd] bg-[#fffdf8] p-6">
            <Tag color="gold">2025</Tag>
            <h3 className="font-display mt-5 text-4xl font-black text-[#9b481f]">
              Rs. 16,000
            </h3>
            <p className="mt-3 text-lg font-bold text-[#241a16]">Won by Kiran and Sravan</p>
            <p className="mt-3 leading-7 text-[#69584a]">
              The auction contribution helps carry the celebration forward into
              next year, supporting setup, decorations, prizes, and prasadam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GangSection() {
  const [preview, setPreview] = useState<(typeof gangImages)[number] | null>(null);

  return (
    <section className="section-shell section-band" id="gang">
      <div className="container-page">
        <SectionHeader
          icon={<TeamOutlined />}
          eyebrow="The Gang"
          title="Softwarebois, together"
        >
          The friends and volunteers who show up every year and make the
          celebration feel like home.
        </SectionHeader>

        <Carousel autoplay adaptiveHeight arrows>
          {gangImages.map((image) => (
            <button
              aria-label={`Open ${image.alt}`}
              className="block w-full cursor-pointer overflow-hidden rounded-lg border border-[#ead8bd] bg-[#241a16]"
              key={image.src}
              onClick={() => setPreview(image)}
              type="button"
            >
              <FramedImage
                alt={image.alt}
                frameClassName="relative h-[320px] w-full overflow-hidden sm:h-[520px] lg:h-[660px]"
                sizes="(max-width: 1024px) 100vw, 1180px"
                src={image.src}
              />
            </button>
          ))}
        </Carousel>

        <Modal
          centered
          footer={null}
          open={Boolean(preview)}
          onCancel={() => setPreview(null)}
          width="min(1040px, 94vw)"
        >
          {preview ? (
            <FramedImage
              alt={preview.alt}
              frameClassName="relative h-[82vh] w-full overflow-hidden rounded-lg"
              imageClassName="object-contain"
              sizes="94vw"
              src={preview.src}
            />
          ) : null}
        </Modal>
      </div>
    </section>
  );
}

function MembersSection() {
  return (
    <section className="section-shell" id="members">
      <div className="container-page">
        <SectionHeader
          icon={<TeamOutlined />}
          eyebrow="Softwarebois"
          title="Meet our members"
        >
          The dedicated members who work together every year to make the Ganesh
          Chaturthi celebrations successful.
        </SectionHeader>

        <div className="members-scroll" aria-label="Softwarebois members list">
          {members.map((member) => (
            <Card className="member-card border-[#ead8bd] text-center" key={member.name}>
              <Image
                alt={`${member.name}, ${member.role}`}
                className="member-avatar mx-auto rounded-full border-4 border-[#fff0d7] object-cover"
                height={112}
                loading="lazy"
                src={member.image}
                width={112}
              />
              <h3 className="font-display member-name mt-5 font-black text-[#9b481f]">
                {member.name}
              </h3>
              <p className="mt-1 font-bold text-[#69584a]">{member.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DonateSection() {
  const { message } = AntdApp.useApp();

  async function copyUpi() {
    try {
      await navigator.clipboard.writeText(upiId);
      message.success("UPI ID copied");
    } catch {
      message.error("Could not copy the UPI ID");
    }
  }

  return (
    <section className="section-shell section-band" id="donate">
      <div className="container-page">
        <SectionHeader icon={<HeartOutlined />} eyebrow="Support" title="Chip in for next year">
          Contributions support the pandal, decorations, prasadam, sound system,
          idol, and lucky draw gifts.
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-[minmax(280px,0.7fr)_minmax(0,1fr)] lg:items-start">
          <div className="rounded-lg border border-[#ead8bd] bg-[#fffdf8] p-5">
            <FramedImage
              alt="Softwarebois UPI QR code"
              frameClassName="relative mx-auto aspect-square w-full max-w-sm overflow-hidden"
              imageClassName="object-contain"
              sizes="(max-width: 1024px) 100vw, 380px"
              src={`${ASSET_BASE}/QRCode/QRCode.jpeg`}
            />
          </div>

          <div className="rounded-lg border border-[#ead8bd] bg-[#fffdf8] p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Tag color="green">PhonePe</Tag>
              <Tag color="green">Google Pay</Tag>
              <Tag color="blue">Paytm</Tag>
              <Tag color="cyan">BHIM</Tag>
            </div>

            <h3 className="mt-6 text-3xl font-extrabold tracking-normal text-[#9b481f]">
              Support Softwarebois
            </h3>
            <p className="mt-3 leading-7 text-[#69584a]">
              Scan the QR code or use the UPI ID below from any UPI app.
            </p>

            <div className="mt-5 flex flex-col gap-3 rounded-lg border border-[#ead8bd] bg-[#fff8ed] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-[#69584a]">UPI ID</p>
                <p className="break-all text-lg font-black text-[#241a16]">{upiId}</p>
              </div>
              <Tooltip title="Copy UPI ID">
                <Button icon={<CopyOutlined />} onClick={copyUpi}>
                  Copy
                </Button>
              </Tooltip>
            </div>

            <Button
              className="mt-5"
              href={`upi://pay?pa=${upiId}&pn=Softwarebois&tn=Ganesh Donation&cu=INR`}
              icon={<HeartOutlined />}
              size="large"
              type="primary"
            >
              Donate via UPI
            </Button>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {donationUses.map((use) => (
                <div
                  className="flex min-h-12 items-center gap-3 rounded-lg border border-[#ead8bd] bg-[#fff8ed] px-4 py-3 font-bold text-[#4a3729]"
                  key={use.label}
                >
                  <span className="text-[#0f766e]">{use.icon}</span>
                  {use.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FindUsSection() {
  const contactRows = [
    { icon: <PhoneOutlined />, label: "9059307481", href: "tel:9059307481" },
    { icon: <PhoneOutlined />, label: "9391277632", href: "tel:9391277632" },
    { icon: <PhoneOutlined />, label: "7386616435", href: "tel:7386616435" },
    {
      icon: <MailOutlined />,
      label: "softwarebois30@gmail.com",
      href: "mailto:softwarebois30@gmail.com",
    },
  ];

  return (
    <section className="section-shell" id="find-us">
      <div className="container-page">
        <SectionHeader
          icon={<EnvironmentOutlined />}
          eyebrow="Find Us"
          title="Rampuram, 531173"
        >
          Visit the pandal in Rampuram or reach out to the team for celebration
          updates and contributions.
        </SectionHeader>

        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="border-[#ead8bd]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0f766e] text-xl text-white">
              <HomeOutlined />
            </div>
            <h3 className="font-display text-2xl font-black text-[#241a16]">Softwarebois</h3>
            <address className="mt-3 not-italic leading-7 text-[#69584a]">
              Rampuram Village
              <br />
              Pendurthi Mandal, Visakhapatnam
              <br />
              Andhra Pradesh, 531173
            </address>
            <Button
              className="mt-5"
              href="https://maps.app.goo.gl/d3GkymQEe9AteNZs6"
              icon={<EnvironmentOutlined />}
              target="_blank"
              rel="noreferrer"
              type="primary"
            >
              Open in Google Maps
            </Button>
          </Card>

          <Card className="border-[#ead8bd]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#be5b2e] text-xl text-white">
              <CheckCircleOutlined />
            </div>
            <h3 className="font-display text-2xl font-black text-[#241a16]">Contact Us</h3>
            <div className="mt-5 grid gap-3">
              {contactRows.map((row) => (
                <a
                  className="flex min-h-12 items-center gap-3 rounded-lg border border-[#ead8bd] bg-[#fff8ed] px-4 py-3 font-bold text-[#4a3729] transition hover:border-[#be5b2e] hover:text-[#8f4423]"
                  href={row.href}
                  key={row.label}
                >
                  <span className="text-[#be5b2e]">{row.icon}</span>
                  <span className="break-all">{row.label}</span>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[#ead8bd] bg-[#241a16] py-8 text-center text-sm font-semibold text-white/78">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span>2026 Softwarebois, Rampuram, Visakhapatnam</span>
        <a
          className="instagram-action inline-flex"
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          <InstagramOutlined />
          @software_bois
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <main>
      <SiteHeader />
      <Hero />
      <div className="border-y border-[#ead8bd] bg-[#fffdf8] py-4">
        <div className="container-page grid gap-3 text-sm font-bold text-[#4a3729] sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <CalendarOutlined className="text-[#be5b2e]" />
            Ganesh Chaturthi {currentYear}
          </div>
          <div className="flex items-center gap-2">
            <TeamOutlined className="text-[#0f766e]" />
            Rampuram youth group
          </div>
          <div className="flex items-center gap-2">
            <BankOutlined className="text-[#be5b2e]" />
            Donations through UPI
          </div>
        </div>
      </div>
      <GallerySection />
      <NimarjanamSection />
      <WinnersSection />
      <LadduAuctionSection />
      <GangSection />
      <MembersSection />
      <DonateSection />
      <FindUsSection />
      <SiteFooter />
    </main>
  );
}
