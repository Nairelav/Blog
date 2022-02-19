import Layout from "@components/ui/Layout";

const about = () => {
  return (
    <div>
      <h2>About page</h2>
      <p>App to find out Chinchilla News, their nutrition, their habits</p>
    </div>
  );
};

export default about;

Layout.defaultProps = {
  title: "All you need to know about chinchillas",
};
