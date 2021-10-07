import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <Link href={"/"} passHref>
      <div className='header'>Volvo Cars</div>
    </Link>
  );
}
