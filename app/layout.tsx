import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
/**
 * 这里是根布局(顶级组件)
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased类使字体平滑 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
