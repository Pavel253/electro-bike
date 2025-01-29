import "./body.scss";
import Footer from "./footer/Footer";

import Header from "./header/Header";
import Batarea from "./section/section-1/Batarea";
import Speed from "./section/section-2/Speed";
import Desing from "./section/section-3/Desing";
import Security from "./section/section-4/Security";
import MobileMi from "./section/section-5/MobileMi";
import Review from "./section/section-6/Review";
import Questions from "./section/section-7/Questions";
import CardBuy from "./section/section-8/CardBuy";

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="body">
        <Header />
        <Batarea />
        <Speed />
        <Desing />
        <Security />
        <MobileMi />
        <Review />
        <Questions />
        <CardBuy />
        <Footer />
      </body>
    </html>
  );
}
