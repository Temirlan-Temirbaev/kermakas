import { Footer } from "@/shared/ui/layout/Footer";
import { Banner, BannerProps } from "./Banner";
import { Contacts } from "./Contacts";
const withLayout = (Page: React.ComponentType, BannerOptions: BannerProps) => {
  const bgStyles = {
    background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\'/images/contact-bg.jpg\')',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const WithLayout: React.FC = pageProps => (
    <div className={"flex w-full"}>
      <div className={"flex flex-col w-full"}>
        <Banner {...BannerOptions}/>
        <Page {...pageProps} />
        <div style={bgStyles}>
          <Contacts />
          <Footer />
        </div>
      </div>
    </div>
  );

  return WithLayout;
};

export default withLayout;
