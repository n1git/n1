import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import Header from "../Header";
import Footer from "../Footer";
import { identity, missionPillars, techDomains, journey, visionPoints, positioningFlow, llmStages, llmReasons, securityAreas, values, roadmapPhases, positioningCards } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Filosofi, Visi, dan Roadmap — N⁻¹ Labs (N-1 Labs)",
  description:
    "Filosofi N⁻¹, visi, misi, fokus teknologi, dan roadmap N⁻¹ Labs (N-1 Labs): dari sistem bisnis dan AI Agent menuju teknologi AI Indonesia yang mandiri.",
  path: "/visi",
});

const ROADMAP_SUMMARY = roadmapPhases
  .map((phase) => `${phase.phase.replace(/^Phase \d+ — /, "")} (${phase.year})`)
  .join(" → ");

export default function VisiPage() {
  return (
    <>
      <div id="top" />
      <Header />

      <section id="about">
        <div className="container">
          <div className="kicker">Tentang Kami</div>
          <h1 className="section-title">About N⁻¹ Labs</h1>
          <div className="divider" />

          <p className="section-lead" style={{ maxWidth: 720 }}>
            N⁻¹ Labs adalah perusahaan teknologi asal Semarang, Jawa Tengah, yang berfokus pada
            pengembangan Artificial Intelligence, AI Agent, software systems, automation, digital
            products, dan teknologi komputasi.
          </p>
          <p style={{ maxWidth: 720 }}>
            Didirikan pada 2 September 2026, N⁻¹ Labs hadir bukan sebagai software house biasa,
            melainkan sebagai perusahaan yang membangun kapabilitasnya secara bertahap — dimulai dari
            software engineering, menuju sistem bisnis dan automation, hingga akhirnya pada pengembangan
            AI Agent dan AI Infrastructure. Setiap proyek yang dikerjakan N⁻¹ Labs dirancang untuk
            memperkuat fondasi teknis menuju arah tersebut.
          </p>
          <p style={{ maxWidth: 720 }}>
            Dalam jangka panjang, N⁻¹ Labs memiliki tujuan untuk berkembang menjadi{" "}
            <b>AI technology company</b> yang mampu membangun teknologi AI-nya sendiri — termasuk
            kontribusi terhadap kemampuan Indonesia dalam mengembangkan Large Language Model (LLM)
            secara mandiri.
          </p>

          <div className="subhead" style={{ marginTop: 32 }}>
            Ringkasan Identitas
          </div>
          <div className="panel">
            <table className="identity-table">
              <tbody>
                {identity.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="direction">
        <div className="container">
          <div className="kicker">Arah Kami</div>
          <h2 className="section-title">Filosofi, Visi, dan Roadmap</h2>
          <div className="divider" />

          <div className="grid direction-grid" style={{ marginTop: 16 }}>
            <div className="panel">
              <h4 style={{ margin: "0 0 6px 0", fontSize: 15 }}>Filosofi</h4>
              <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)" }}>
                N⁻¹: selalu satu langkah sebelum selesai. Terus bergerak, tidak berhenti di versi sempurna.
              </p>
              <a className="direction-link" href="#philosophy">
                Baca selengkapnya
              </a>
            </div>
            <div className="panel">
              <h4 style={{ margin: "0 0 6px 0", fontSize: 15 }}>Visi</h4>
              <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)" }}>
                Building Indonesia&apos;s Own AI Technology Capability.
              </p>
              <a className="direction-link" href="#vision">
                Baca selengkapnya
              </a>
            </div>
            <div className="panel">
              <h4 style={{ margin: "0 0 6px 0", fontSize: 15 }}>Roadmap</h4>
              <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)" }}>{ROADMAP_SUMMARY}</p>
              <a className="direction-link" href="#roadmap">
                Baca selengkapnya
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy">
        <div className="container">
          <div className="kicker">Filosofi</div>
          <h2 className="section-title">N⁻¹: Selalu Satu Langkah Sebelum Selesai</h2>
          <div className="divider" />

          <p className="section-lead" style={{ maxWidth: 720 }}>
            Nama kami bukan kebetulan. Dalam matematika, N melambangkan bilangan penuh — hasil akhir,
            versi sempurna, titik selesai. Kami menamai diri <b>N⁻¹</b> karena percaya titik itu tidak
            pernah benar-benar sampai: selalu ada satu hal yang kurang, satu hal yang bisa dibangun,
            diperbaiki, atau dikembangkan lagi.
          </p>

          <div className="manifesto">
            <p className="eq">
              <span className="no">N⁻¹ = Selesai.</span>
              <br />
              <span className="yes">N⁻¹ = Terus Bergerak.</span>
            </p>
          </div>

          <p>
            Perhatikan dua penanda yang muncul berulang di sepanjang halaman ini:
          </p>
          <div className="legend-pair">
            <span className="tag existing">Existing Capability</span>
            <span className="arrow">— apa yang sudah kami bangun dan pakai secara nyata</span>
          </div>
          <div className="legend-pair">
            <span className="tag vision">Future Vision</span>
            <span className="arrow">— satu langkah yang selalu menunggu di depan</span>
          </div>
          <p>
            Bagi kami, kedua penanda itu bukan sekadar label kategori — itu adalah N dan N⁻¹: apa yang
            telah tercapai, dan satu hal yang sengaja kami biarkan belum selesai, karena di situlah kerja
            berikutnya dimulai.
          </p>

          <div className="subhead">Bukti, Bukan Sekadar Klaim</div>
          <div className="evidence-grid">
            <div className="evidence-card">
              <h4>Journey yang Berhenti di &ldquo;Vision&rdquo;</h4>
              <p>
                Technology Journey kami sengaja berakhir di tahap yang masih berlabel Vision — bukan
                karena belum selesai ditulis, tapi karena memang belum tercapai.
              </p>
              <a href="#journey">Lihat Technology Journey →</a>
            </div>
            <div className="evidence-card">
              <h4>Roadmap Menuju Horizon, Bukan Garis Akhir</h4>
              <p>
                Development Roadmap kami berakhir di &ldquo;2030+&rdquo; — sebuah horizon terbuka, bukan
                tenggat yang bisa dicoret selesai.
              </p>
              <a href="#roadmap">Lihat Roadmap →</a>
            </div>
            <div className="evidence-card">
              <h4>Enam Proyek, Enam Fondasi</h4>
              <p>
                Setiap proyek yang telah kami bangun bukan tujuan akhir, melainkan satu lapisan fondasi
                menuju kapabilitas berikutnya.
              </p>
              <a href="#portfolio">Lihat Project Portfolio →</a>
            </div>
          </div>

          <p className="philosophy-closing">
            Begitulah cara kami bekerja: N⁻¹ hari ini, mendekati N esok — tanpa pernah benar-benar
            sampai.
          </p>
        </div>
      </section>

      <section id="mission">
        <div className="container">
          <div className="kicker">Cara Kami Mewujudkannya</div>
          <h2 className="section-title">Mission</h2>
          <div className="divider" />
          <p className="section-lead">
            Misi N⁻¹ Labs disusun berdasarkan tujuh prinsip kerja: Develop, Integrate, Automate,
            Research, Build, Scale, dan Protect.
          </p>

          <div className="grid grid-2" style={{ marginTop: 16 }}>
            {missionPillars.map((pillar) => (
              <div
                className="panel"
                key={pillar.title}
                style={pillar.wide ? { gridColumn: "1 / -1" } : undefined}
              >
                <h4 style={{ margin: "0 0 8px 0", fontSize: 14.5 }}>{pillar.title}</h4>
                <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)" }}>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology">
        <div className="container">
          <div className="kicker">Kapabilitas Teknologi</div>
          <h2 className="section-title">Technology Focus</h2>
          <div className="divider" />
          <p className="section-lead">
            Kapabilitas N⁻¹ Labs dikelompokkan ke dalam enam domain teknologi, dari sistem yang telah
            dibangun hingga arah riset masa depan.
          </p>

          <div className="grid grid-2" style={{ marginTop: 16 }}>
            {techDomains.map((domain) => (
              <div className={`panel domain-card${domain.vision ? " vision" : ""}`} key={domain.name}>
                <h3>
                  <span className="dot" />
                  {domain.name}
                  {domain.vision && <span className="tag vision" style={{ marginLeft: 6 }}>Vision</span>}
                </h3>
                <ul>
                  {domain.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="journey">
        <div className="container">
          <div className="kicker">Perjalanan Kapabilitas</div>
          <h2 className="section-title">Technology Journey</h2>
          <div className="divider" />
          <p className="section-lead">
            Proyek-proyek yang telah dikerjakan N⁻¹ Labs bukan kumpulan proyek yang berdiri sendiri,
            melainkan tahapan yang membangun kapabilitas perusahaan secara bertahap menuju teknologi AI
            berskala nasional.
          </p>

          <div className="timeline">
            {journey.map((step, i) => (
              <div className="tstep" key={step.title}>
                <div className="tline">
                  <div className={`tdot${step.vision ? " vision" : ""}`} />
                  {i < journey.length - 1 && <div className="tbar" />}
                </div>
                <div className="tbody">
                  <h4>
                    {step.title}
                    {step.vision && <span className="tag vision">Vision</span>}
                  </h4>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="philosophy-closing">
            Delapan tahap ini sengaja berhenti di sebuah Vision, bukan garis akhir — karena bagi N⁻¹,
            tidak ada garis akhir.
          </p>
        </div>
      </section>

      <section id="vision">
        <div className="container">
          <div className="kicker">Arah Perusahaan</div>
          <h2 className="section-title">Vision</h2>
          <div className="divider" />

          <div className="quote-block">
            <p>
              &ldquo;Membangun teknologi Artificial Intelligence Indonesia yang mandiri, berdaulat, dan
              mampu digunakan untuk kebutuhan masyarakat, industri, serta kepentingan strategis
              nasional.&rdquo;
            </p>
          </div>

          <p>
            Visi ini menjadi arah jangka panjang N⁻¹ Labs, yang secara bertahap dijabarkan ke dalam
            beberapa fokus pengembangan:
          </p>
          <ul className="clean">
            {visionPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="subhead">Positioning Arah Perusahaan</div>
          <div className="panel flow-chain">
            {positioningFlow.map((step, i) => (
              <div className="step" key={step} style={{ display: "flex", alignItems: "center", gap: 10, flex: "1 1 auto" }}>
                <span>{step}</span>
                {i < positioningFlow.length - 1 && <span className="arrow">→</span>}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 12 }}>
            N⁻¹ Labs tidak memposisikan dirinya sebagai penyedia chatbot maupun software development
            semata, melainkan sebagai perusahaan yang membangun jenjang kapabilitas menuju teknologi AI
            berskala nasional.
          </p>
        </div>
      </section>

      <section id="long-term-vision">
        <div className="container">
          <div className="kicker">Masa Depan</div>
          <h2 className="section-title">Long-Term Vision</h2>
          <div className="divider" />
          <span className="tag vision">Future Vision / Aspiration</span>

          <div className="quote-block" style={{ marginTop: 16 }}>
            <p>
              &ldquo;Today we build AI applications. Tomorrow we build AI infrastructure. Eventually, we
              aim to contribute to Indonesia&apos;s own AI foundation models.&rdquo;
            </p>
          </div>

          <p>
            N⁻¹ Labs saat ini fokus membangun AI Agent dan sistem berbasis AI untuk kebutuhan bisnis.
            Namun, arah jangka panjang perusahaan mengarah pada kontribusi terhadap kapabilitas Indonesia
            dalam membangun teknologi AI-nya sendiri — termasuk Large Language Model (LLM). Tahapan
            konseptualnya dijelaskan lebih detail di bagian berikut.
          </p>
        </div>
      </section>

      <section id="llm">
        <div className="container">
          <div className="kicker">Kedaulatan Teknologi</div>
          <h2 className="section-title">Building Indonesia&apos;s Own LLM</h2>
          <div className="divider" />
          <span className="tag vision">Future Vision / Aspiration</span>

          <p style={{ marginTop: 16 }}>
            Salah satu tujuan jangka panjang N⁻¹ Labs adalah berkontribusi terhadap kemampuan Indonesia
            dalam membangun Large Language Model (LLM) sendiri — sebagai bagian dari kedaulatan teknologi
            bangsa di bidang kecerdasan buatan.
          </p>
          <p>
            <b>N⁻¹ Labs saat ini belum memiliki LLM sendiri.</b> Kapabilitas yang dimiliki saat ini
            berada pada tahap membangun AI Agent dan aplikasi berbasis AI. Pengembangan menuju model
            engineering dan foundation model merupakan arah jangka panjang yang akan dibangun secara
            bertahap.
          </p>

          <div className="subhead">Mengapa Ini Penting</div>
          <ul className="clean">
            {llmReasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>

          <div className="subhead">Tahapan Menuju Kemampuan LLM</div>
          <div className="grid grid-2">
            {llmStages.map((stage) => (
              <div className="panel" key={stage.title}>
                <h4 style={{ margin: "0 0 6px 0", fontSize: 13.5 }}>{stage.title}</h4>
                <p style={{ margin: 0, fontSize: 12.5, color: "var(--muted)" }}>{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="national-security">
        <div className="container">
          <div className="kicker">Kontribusi Strategis</div>
          <h2 className="section-title">National Security &amp; Defense Technology</h2>
          <div className="divider" />
          <span className="tag vision">Future Vision / Aspiration</span>

          <p style={{ marginTop: 16 }}>
            N⁻¹ Labs memiliki aspirasi jangka panjang untuk bekerja sama dengan institusi pemerintah,
            pertahanan, dan militer Indonesia dalam mengembangkan teknologi AI yang dapat mendukung
            kebutuhan strategis nasional, di antaranya:
          </p>

          <div className="grid grid-2">
            {securityAreas.map((area) => (
              <div className="panel" key={area}>
                <p style={{ margin: 0, fontSize: 13.5 }}>{area}</p>
              </div>
            ))}
          </div>

          <div className="quote-block" style={{ marginTop: 20 }}>
            <p>
              &ldquo;Mengembangkan teknologi AI yang dapat menjadi bagian dari technological capability
              Indonesia dalam menjaga keamanan dan kedaulatan negara.&rdquo;
            </p>
          </div>

          <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 12 }}>
            <b style={{ color: "var(--ink)" }}>Catatan penting:</b> N⁻¹ Labs bukan perusahaan militer, dan
            saat ini belum memiliki kerja sama resmi dengan institusi pertahanan atau militer mana pun.
            Bagian ini menggambarkan arah dan aspirasi jangka panjang perusahaan, bukan kemitraan yang
            sudah berjalan.
          </p>
        </div>
      </section>

      <section id="values">
        <div className="container">
          <div className="kicker">Prinsip Kerja</div>
          <h2 className="section-title">Company Values</h2>
          <div className="divider" />
          <p className="section-lead">
            Ketujuh prinsip ini adalah cara kami menjaga filosofi N⁻¹ tetap hidup dalam setiap keputusan
            — termasuk keputusan untuk tidak pernah menyebut sebuah sistem sebagai &ldquo;selesai&rdquo;.
          </p>

          <div className="panel">
            {values.map((value, i) => (
              <div className="value-row" key={value.title}>
                <div className="value-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="value-body">
                  <h4>{value.title}</h4>
                  <p>{value.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap">
        <div className="container">
          <div className="kicker">Jalan ke Depan</div>
          <h2 className="section-title">Development Roadmap</h2>
          <div className="divider" />
          <p style={{ fontSize: 12.5, color: "var(--muted)", marginBottom: 20 }}>
            Roadmap berikut bersifat aspirasional — menggambarkan arah pengembangan, bukan janji atau
            kepastian waktu.
          </p>

          {roadmapPhases.map((phase) => (
            <div className="phase" key={phase.phase}>
              <div className="phase-head">
                <h4>{phase.phase}</h4>
                <span className="yr">{phase.year}</span>
              </div>
              <div className="phase-body">
                <ul>
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <p className="philosophy-closing">
            Fase terakhir berhenti di &ldquo;2030+&rdquo;, bukan tanggal — sebuah horizon yang terus
            bergerak seiring kami terus membangun.
          </p>
        </div>
      </section>

      <section id="positioning">
        <div className="container">
          <div className="kicker">Cara Kami Diposisikan</div>
          <h2 className="section-title">Company Positioning</h2>
          <div className="divider" />

          <div className="quote-block">
            <p>
              &ldquo;An Indonesian AI Technology Company Building Intelligent Systems for Business,
              Industry, and the Future of National Technology.&rdquo;
            </p>
          </div>

          <p className="section-lead">
            Positioning inti ini konsisten di seluruh konteks komunikasi, dengan penekanan yang
            disesuaikan menurut audiens:
          </p>

          <div className="grid grid-2" style={{ marginTop: 8 }}>
            {positioningCards.map((card, i) => (
              <div
                className="pos-card"
                key={card.title}
                style={i === positioningCards.length - 1 ? { gridColumn: "1 / -1" } : undefined}
              >
                <h4>{card.title}</h4>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
