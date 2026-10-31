import type { ProductCategory } from "./content";

export default function ProductCategories({ categories }: { categories: ProductCategory[] }) {
  return (
    <div style={{ marginTop: 24 }}>
      {categories.map((category) => (
        <div key={category.name} style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>
            {category.name}
          </h3>
          <div className="grid grid-2">
            {category.products.map((product) => (
              <div className="panel domain-card" key={product.name}>
                <h3>
                  <span className="dot" />
                  {product.name}
                </h3>
                <p style={{ fontSize: 13, fontWeight: 600, margin: "4px 0 8px" }}>{product.tagline}</p>
                <p style={{ fontSize: 13.5, margin: 0 }}>{product.description}</p>
                {product.url && (
                  <a
                    className="btn btn-ghost"
                    style={{ marginTop: 12, display: "inline-block" }}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kunjungi {product.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
