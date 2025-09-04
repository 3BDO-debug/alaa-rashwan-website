import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Coach Alaa Rashwan Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-lg">Coach Alaa Rashwan</span>
            </div>
            <p className="text-muted-foreground">{t("footer.description")}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.linksTitle")}</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t("footer.link1")}
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t("footer.link2")}
              </Link>
              <Link
                href="/pricing"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t("footer.link3")}
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t("footer.link4")}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.programsTitle")}</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">{t("footer.program1")}</p>
              <p className="text-muted-foreground">{t("footer.program2")}</p>
              <p className="text-muted-foreground">{t("footer.program3")}</p>
              <p className="text-muted-foreground">{t("footer.program4")}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.followUs")}</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1D1jzJvk3z/?mibextid=wwXIfr"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/coach_alaa_rashwan?igsh=MTc1MnhwdWV6ZmttZA%3D%3D&utm_source=qr"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/message/SEW67QI5YTWBH1"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@alaarashwan28?_t=ZS-8zQu19t9E2L&_r=1"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaTiktok size={18} />
              </a>
              <a
                href="https://youtube.com/@rashwanfit?si=nPw2Z80v4QrLaYRw"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Coach Alaa Rashwan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
