import Link from "next/link";

const index = () => {
  return (
    <div>
      <h2>HOME PAGE</h2>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default index;
