export default function LogoCard({
  className,
  src,
  alt,
  href,
}: {
  className?: string;
  src?: string;
  alt?: string;
  href?: string;
}) {
  return (
    <div className={className}>
      <a href={href}>
        <img src={src} alt={alt} />
      </a>
    </div>
  );
}
