const ROWS = [
  { initials: "DP", name: "Dewi Pramesti", subject: "12 box kopi sachet", status: "Dibayar", age: "2m", state: "done" },
  { initials: "BS", name: "Bagas Setiawan", subject: "Seragam 24 pcs", status: "Diproses", age: "6m", state: "work" },
  { initials: "NH", name: "Nadia Hartono", subject: "Paket hampers Natal", status: "Baru", age: "11m", state: "open" },
  { initials: "RK", name: "Rizal Kurniawan", subject: "Stok kurang, perlu cek", status: "Perlu staf", age: "18m", state: "you" },
  { initials: "AM", name: "Anindya Mahardika", subject: "Pesanan reseller", status: "Dikirim", age: "24m", state: "done" },
] as const;

const SIDE = [
  { label: "Masuk", count: "24", on: true },
  { label: "Diproses", count: "9" },
  { label: "Dikirim", count: "12" },
  { label: "Selesai" },
];

export default function AppWindow() {
  return (
    <div className="ui-win" role="img" aria-label="Contoh antrean pesanan di sistem order">
      <div className="ui-win-bar">
        <span className="ui-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ui-crumb">
          Order <i>/</i> <b>Masuk</b>
        </span>
      </div>
      <div className="ui-win-body">
        <ul className="ui-win-side" aria-hidden="true">
          {SIDE.map((item) => (
            <li key={item.label} className={item.on ? "is-on" : undefined}>
              {item.label}
              {item.count ? <em>{item.count}</em> : null}
            </li>
          ))}
        </ul>
        <ul className="ui-win-rows" aria-hidden="true">
          {ROWS.map((row) => (
            <li key={row.name}>
              <span className="ui-avatar">{row.initials}</span>
              <span className="ui-who">{row.name}</span>
              <span className="ui-sub">{row.subject}</span>
              <span className={`ui-st ui-st-${row.state}`}>{row.status}</span>
              <span className="ui-age">{row.age}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
