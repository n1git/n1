type ChecklistPreviewProps = {
  title: string;
  items: string[];
  done: number;
  label: string;
};

export default function ChecklistPreview({ title, items, done, label }: ChecklistPreviewProps) {
  return (
    <div className="ui-checks" role="img" aria-label={label}>
      <div className="ui-checks-head">
        <b>{title}</b>
        <span>
          {done} dari {items.length}
        </span>
      </div>
      <div className="ui-checks-bar" aria-hidden="true">
        <i style={{ width: `${(done / items.length) * 100}%` }} />
      </div>
      <ul aria-hidden="true">
        {items.map((item, index) => (
          <li key={item} className={index < done ? "is-done" : undefined}>
            <span className="ui-check-box">
              <svg viewBox="0 0 16 16">
                <path d="m4.5 8.2 2.3 2.3 4.7-5" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
