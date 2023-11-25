import classes from "./footer.module.css";

export default function Footer(props: any) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <p>Copyright © {currentYear} - Yarin Bar </p>
    </div>
  );
}
