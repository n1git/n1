export default function ChatPreview() {
  return (
    <div className="ui-chat" role="img" aria-label="Contoh percakapan pelanggan dengan AI Agent">
      <div className="ui-chat-head">
        <span className="ui-agent" aria-hidden="true" />
        <b>Agen CS</b>
        <span className="ui-online">Aktif</span>
      </div>
      <div className="ui-chat-body" aria-hidden="true">
        <span className="ui-chat-day">Hari ini, 09.41</span>
        <p className="ui-msg ui-msg-me">Bisa ganti alamat pesanan #4821?</p>
        <p className="ui-msg ui-msg-bot">
          Bisa, pesanan belum dikirim. Alamat sudah diganti ke <b>Jl. Pandanaran, Semarang</b>.
        </p>
        <span className="ui-src">Pesanan #4821</span>
      </div>
      <div className="ui-chat-input" aria-hidden="true">
        <span>Tulis pesan</span>
        <i />
      </div>
    </div>
  );
}
