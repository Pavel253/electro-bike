import "./body.scss";
import "./fon.scss";
import "./component/ui/Button/Button.scss";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
