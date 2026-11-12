import QRCode from "qrcode";

export async function QrCode({
  value,
  alt,
}: {
  value: string;
  alt: string;
}) {
  const svg = await QRCode.toString(value, {
    type: "svg",
    margin: 1,
    color: {
      dark: "#1a231c",
      light: "#f3eee4",
    },
  });

  return (
    <figure className="max-w-56">
      <div
        className="border border-stone bg-fg p-3"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}
