import Link from "next/link";
import classes from "@styles/components/ui/header.module.scss";
import Image from "next/image";

const index = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <Link href="/">
          <a>Chinchilla news</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default index;
