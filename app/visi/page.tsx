import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import Header from "../Header";
import Footer from "../Footer";
import { withBasePath } from "../base-path";
import { SubBack, SubHero, SubSec, Tag } from "../Sub";
import {
  identity,
  missionPillars,
  techDomains,
  journey,
  visionPoints,
  positioningFlow,
  llmStages,
  llmReasons,
  securityAreas,
  values,
  roadmapPhases,
  positioningCards,
} from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Filosofi, Visi, dan Roadmap — N⁻¹ Labs (N-1 Labs)",
  description:
    "Filosofi N⁻¹, visi, misi, fokus teknologi, dan roadmap N⁻¹ Labs (N-1 Labs): dari sistem bisnis dan AI Agent menuju teknologi AI Indonesia yang mandiri.",
  path: "/visi",
});

const ROADMAP_SUMMARY = roadmapPhases
  .map((phase) => `${phase.phase.replace(/^Phase \d+ — /, "")} (${phase.year})`)
  .join(" → ");

const SECTIONS = [
  ["about", "Tentang"],
  ["philosophy", "Filosofi"],
  ["mission", "Misi"],
  ["technology", "Teknologi"],
  ["journey", "Perjalanan"],
  ["vision", "Visi"],
  ["llm", "LLM Indonesia"],
  ["national-security", "Keamanan nasional"],
  ["values", "Nilai"],
  ["roadmap", "Roadmap"],
  ["positioning", "Positioning"],
];

export default function VisiPage() {
  return (
    <>
      <Header />

      <main className="sub" id="top">
        <div className="wrap">
          <SubBack />
          <SubHero
            tall
            label="Tentang kami"
            title="Selalu satu langkah sebelum selesai"
            lead="N⁻¹ Labs adalah perusahaan teknologi asal Semarang, Jawa Tengah, yang berfokus pada Artificial Intelligence, AI Agent, software systems, automation, digital products, dan teknologi komputasi."
          />

          <nav className="sub-toc" aria-label="Isi halaman">
            {SECTIONS.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <SubSec id="about" label="Tentang" title="Perusahaan yang membangun bertahap">
            <p>
              Didirikan pada 2 September 2026, N⁻¹ Labs hadir bukan sebagai software house biasa, melainkan
              sebagai perusahaan yang membangun kapabilitasnya secara bertahap: dimulai dari software
              engineering, menuju sistem bisnis dan automation, hingga akhirnya pada pengembangan AI Agent
              dan AI Infrastructure. Setiap proyek dirancang untuk memperkuat fondasi teknis menuju arah
              tersebut.
            </p>
            <p>
              Dalam jangka panjang, N⁻¹ Labs bertujuan menjadi <b>AI technology company</b> yang mampu
              membangun teknologi AI-nya sendiri, termasuk kontribusi terhadap kemampuan Indonesia
              mengembangkan Large Language Model (LLM) secara mandiri.
            </p>
            <dl className="sub-dl">
              {identity.map((row) => (
                <div key={row.label} style={{ display: "contents" }}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <ul className="sub-rows sub-rows--plain">
              <li>
                <h3>Filosofi</h3>
                <p>N⁻¹: selalu satu langkah sebelum selesai. Terus bergerak, tidak berhenti di versi sempurna.</p>
                <a className="sub-link" href="#philosophy">Baca selengkapnya</a>
              </li>
              <li>
                <h3>Visi</h3>
                <p>Building Indonesia&apos;s Own AI Technology Capability.</p>
                <a className="sub-link" href="#vision">Baca selengkapnya</a>
              </li>
              <li>
                <h3>Roadmap</h3>
                <p>{ROADMAP_SUMMARY}</p>
                <a className="sub-link" href="#roadmap">Baca selengkapnya</a>
              </li>
            </ul>
          </SubSec>

          <SubSec id="philosophy" label="Filosofi" title="N⁻¹: selalu satu langkah sebelum selesai">
            <p className="sub-lead">
              Nama kami bukan kebetulan. Dalam matematika, N melambangkan bilangan penuh: hasil akhir,
              versi sempurna, titik selesai. Kami menamai diri <b>N⁻¹</b> karena percaya titik itu tidak
              pernah benar-benar sampai. Selalu ada satu hal yang kurang, satu hal yang bisa dibangun,
              diperbaiki, atau dikembangkan lagi.
            </p>
            <p className="sub-eq">
              <span className="no">N⁻¹ = Selesai.</span>
              <span className="yes">N⁻¹ = Terus Bergerak.</span>
            </p>
            <p>Dua penanda muncul berulang di sepanjang halaman ini:</p>
            <div className="sub-tags">
              <div>
                <Tag kind="existing" />
                <span className="sub-note">apa yang sudah kami bangun dan pakai secara nyata</span>
              </div>
              <div>
                <Tag kind="vision" />
                <span className="sub-note">satu langkah yang selalu menunggu di depan</span>
              </div>
            </div>
            <p>
              Bagi kami, kedua penanda itu bukan sekadar label kategori. Itu adalah N dan N⁻¹: apa yang
              telah tercapai, dan satu hal yang sengaja kami biarkan belum selesai, karena di situlah kerja
              berikutnya dimulai.
            </p>
            <h3 className="sub-h3">Bukti, bukan sekadar klaim</h3>
            <ul className="sub-rows">
              <li>
                <span className="n">01</span>
                <div>
                  <h3>Journey yang berhenti di &ldquo;Vision&rdquo;</h3>
                  <p>
                    Technology Journey sengaja berakhir di tahap yang masih berlabel Vision, bukan karena
                    belum selesai ditulis, tapi karena memang belum tercapai.{" "}
                    <a href="#journey">Lihat perjalanan teknologi</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="n">02</span>
                <div>
                  <h3>Roadmap menuju horizon, bukan garis akhir</h3>
                  <p>
                    Development Roadmap berakhir di &ldquo;2030+&rdquo;, sebuah horizon terbuka, bukan
                    tenggat yang bisa dicoret selesai. <a href="#roadmap">Lihat roadmap</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="n">03</span>
                <div>
                  <h3>Enam proyek, enam fondasi</h3>
                  <p>
                    Setiap proyek yang telah dibangun bukan tujuan akhir, melainkan satu lapisan fondasi
                    menuju kapabilitas berikutnya. <a href={withBasePath("/portofolio")}>Lihat portofolio</a>
                  </p>
                </div>
              </li>
            </ul>
            <p className="sub-note">
              Begitulah cara kami bekerja: N⁻¹ hari ini, mendekati N esok, tanpa pernah benar-benar sampai.
            </p>
          </SubSec>

          <SubSec id="mission" label="Cara kami mewujudkannya" title="Misi">
            <p className="sub-lead">
              Misi N⁻¹ Labs disusun berdasarkan tujuh prinsip kerja: Develop, Integrate, Automate,
              Research, Build, Scale, dan Protect.
            </p>
            <ol className="sub-rows">
              {missionPillars.map((pillar) => {
                const [num, ...rest] = pillar.title.split(". ");
                return (
                  <li key={pillar.title}>
                    <span className="n">{num.padStart(2, "0")}</span>
                    <div>
                      <h3>{rest.join(". ")}</h3>
                      <p>{pillar.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </SubSec>

          <SubSec id="technology" label="Kapabilitas teknologi" title="Fokus teknologi">
            <p className="sub-lead">
              Kapabilitas N⁻¹ Labs dikelompokkan ke dalam enam domain teknologi, dari sistem yang telah
              dibangun hingga arah riset masa depan.
            </p>
            <div className="sub-cols">
              {techDomains.map((domain) => (
                <div key={domain.name}>
                  <h3>{domain.name}</h3>
                  {domain.vision && <Tag kind="vision" />}
                  <ul>
                    {domain.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SubSec>

          <SubSec id="journey" label="Perjalanan kapabilitas" title="Perjalanan teknologi">
            <p className="sub-lead">
              Proyek-proyek yang telah dikerjakan N⁻¹ Labs bukan kumpulan proyek yang berdiri sendiri,
              melainkan tahapan yang membangun kapabilitas perusahaan menuju teknologi AI berskala
              nasional.
            </p>
            <ol className="sub-rows">
              {journey.map((step, index) => (
                <li key={step.title}>
                  <span className="n">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>
                      {step.title} {step.vision ? <Tag kind="vision" /> : null}
                    </h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="sub-note">
              Delapan tahap ini sengaja berhenti di sebuah Vision, bukan garis akhir, karena bagi N⁻¹ tidak
              ada garis akhir.
            </p>
          </SubSec>

          <SubSec id="vision" label="Arah perusahaan" title="Visi">
            <p className="sub-quote">
              &ldquo;Membangun teknologi Artificial Intelligence Indonesia yang mandiri, berdaulat, dan
              mampu digunakan untuk kebutuhan masyarakat, industri, serta kepentingan strategis
              nasional.&rdquo;
            </p>
            <p>
              Visi ini menjadi arah jangka panjang N⁻¹ Labs, yang secara bertahap dijabarkan ke dalam
              beberapa fokus pengembangan:
            </p>
            <ul className="sub-rows sub-rows--plain">
              {visionPoints.map((point) => (
                <li key={point}>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
            <h3 className="sub-h3">Positioning arah perusahaan</h3>
            <div className="sub-chain">
              {positioningFlow.map((step, index) => (
                <span key={step} style={{ display: "contents" }}>
                  <span>{step}</span>
                  {index < positioningFlow.length - 1 && <span className="arrow">→</span>}
                </span>
              ))}
            </div>
            <p className="sub-note">
              N⁻¹ Labs tidak memposisikan dirinya sebagai penyedia chatbot maupun software development
              semata, melainkan sebagai perusahaan yang membangun jenjang kapabilitas menuju teknologi AI
              berskala nasional.
            </p>
            <h3 className="sub-h3">Visi jangka panjang</h3>
            <Tag kind="vision" />
            <p className="sub-quote" style={{ marginTop: "var(--s-5)" }}>
              &ldquo;Today we build AI applications. Tomorrow we build AI infrastructure. Eventually, we
              aim to contribute to Indonesia&apos;s own AI foundation models.&rdquo;
            </p>
            <p>
              N⁻¹ Labs saat ini fokus membangun AI Agent dan sistem berbasis AI untuk kebutuhan bisnis.
              Arah jangka panjang perusahaan mengarah pada kontribusi terhadap kapabilitas Indonesia dalam
              membangun teknologi AI-nya sendiri, termasuk Large Language Model (LLM).
            </p>
          </SubSec>

          <SubSec id="llm" label="Kedaulatan teknologi" title="Membangun LLM Indonesia">
            <Tag kind="vision" />
            <p>
              Salah satu tujuan jangka panjang N⁻¹ Labs adalah berkontribusi terhadap kemampuan Indonesia
              dalam membangun Large Language Model (LLM) sendiri, sebagai bagian dari kedaulatan teknologi
              bangsa di bidang kecerdasan buatan.
            </p>
            <p className="sub-callout">
              <b>N⁻¹ Labs saat ini belum memiliki LLM sendiri.</b> Kapabilitas yang dimiliki saat ini
              berada pada tahap membangun AI Agent dan aplikasi berbasis AI. Pengembangan menuju model
              engineering dan foundation model merupakan arah jangka panjang yang akan dibangun secara
              bertahap.
            </p>
            <h3 className="sub-h3">Mengapa ini penting</h3>
            <ul className="sub-rows sub-rows--plain">
              {llmReasons.map((reason) => (
                <li key={reason}>
                  <p>{reason}</p>
                </li>
              ))}
            </ul>
            <h3 className="sub-h3">Tahapan menuju kemampuan LLM</h3>
            <ol className="sub-rows">
              {llmStages.map((stage, index) => (
                <li key={stage.title}>
                  <span className="n">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{stage.title.replace(/^\d+\.\s*/, "")}</h3>
                    <p>{stage.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </SubSec>

          <SubSec
            id="national-security"
            label="Kontribusi strategis"
            title="Keamanan nasional dan teknologi pertahanan"
          >
            <Tag kind="vision" />
            <p>
              N⁻¹ Labs memiliki aspirasi jangka panjang untuk bekerja sama dengan institusi pemerintah,
              pertahanan, dan militer Indonesia dalam mengembangkan teknologi AI yang dapat mendukung
              kebutuhan strategis nasional, di antaranya:
            </p>
            <ul className="sub-cols" style={{ listStyle: "none", padding: 0 }}>
              {securityAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <p className="sub-quote">
              &ldquo;Mengembangkan teknologi AI yang dapat menjadi bagian dari technological capability
              Indonesia dalam menjaga keamanan dan kedaulatan negara.&rdquo;
            </p>
            <p className="sub-callout">
              <b>Catatan penting:</b> N⁻¹ Labs bukan perusahaan militer, dan saat ini belum memiliki kerja
              sama resmi dengan institusi pertahanan atau militer mana pun. Bagian ini menggambarkan arah
              dan aspirasi jangka panjang perusahaan, bukan kemitraan yang sudah berjalan.
            </p>
          </SubSec>

          <SubSec id="values" label="Prinsip kerja" title="Nilai perusahaan">
            <p className="sub-lead">
              Ketujuh prinsip ini adalah cara kami menjaga filosofi N⁻¹ tetap hidup dalam setiap
              keputusan, termasuk keputusan untuk tidak pernah menyebut sebuah sistem sebagai
              &ldquo;selesai&rdquo;.
            </p>
            <ol className="sub-rows">
              {values.map((value, index) => (
                <li key={value.title}>
                  <span className="n">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </SubSec>

          <SubSec id="roadmap" label="Jalan ke depan" title="Roadmap pengembangan">
            <p className="sub-note">
              Roadmap berikut bersifat aspirasional: menggambarkan arah pengembangan, bukan janji atau
              kepastian waktu.
            </p>
            <div>
              {roadmapPhases.map((phase) => (
                <div className="sub-phase" key={phase.phase}>
                  <span className="yr">{phase.year}</span>
                  <div>
                    <h3>{phase.phase}</h3>
                    <ul>
                      {phase.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Fase terakhir berhenti di &ldquo;2030+&rdquo;, bukan tanggal: sebuah horizon yang terus
              bergerak seiring kami terus membangun.
            </p>
          </SubSec>

          <SubSec id="positioning" label="Cara kami diposisikan" title="Positioning perusahaan">
            <p className="sub-quote">
              &ldquo;An Indonesian AI Technology Company Building Intelligent Systems for Business,
              Industry, and the Future of National Technology.&rdquo;
            </p>
            <p>
              Positioning inti ini konsisten di seluruh konteks komunikasi, dengan penekanan yang
              disesuaikan menurut audiens:
            </p>
            <div className="sub-cols">
              {positioningCards.map((card, index) => (
                <div key={card.title} className={index === positioningCards.length - 1 ? "wide" : undefined}>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </SubSec>
        </div>
      </main>

      <Footer />
    </>
  );
}
