import Head from "next/head";
import classes from "@styles/components/ui/layout.module.scss";
import Header from "@components/Header";

const index = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <Header />
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default index;

index.defaultProps = {
  title: "Chinchilla news | Find latest Chichi news",
  keywords: "animal, little, chinchilla, lanigera, mammalia, chinchillidae, rodentia",
  description:
    "Chinchillas are either of two species of crepuscular rodents of the parvorder Caviomorpha. They are slightly larger and more robust than ground squirrels, and are native to the Andes mountains in South America.",
};
