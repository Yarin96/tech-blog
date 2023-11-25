import Footer from "./footer";
import MainNavigation from "./main-navigation";

export function Layout(props: any) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
