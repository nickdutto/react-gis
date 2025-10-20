import styles from "./external-links.module.css";

type ExternalLinksProps = {
  links: {
    title: string;
    href: string;
  }[];
};

export const ExternalLinks = ({ links }: ExternalLinksProps) => {
  return (
    <div className={styles.container}>
      {links.map((link) => (
        <a key={link.title} href={link.href} target="_blank" className={styles.link}>
          {link.title}
        </a>
      ))}
    </div>
  );
};
