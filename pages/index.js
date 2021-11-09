import Head from "next/head";

const Quote = ({ quote }) => {
  let quotecontent = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "0 2rem",
        backgroundColor: "#100D31",
        color: "#fff !important",
      }}
    >
      <div
        style={{
          boxShadow: "0px 0px 10px rgba(200,129,218,0.5)",
          backgroundColor: "#5442BC",
          borderRadius: "20px",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "40px",
            padding: "0",
            textAlign: "center",
          }}
        >
          {quote.anime}
        </h1>
        <p
          style={{
            fontSize: "17px",
            fontWeight: "bold",
            margin: "0",
            padding: "0",
          }}
        >
          &quot;{quote.quote}&quot;
        </p>
        <p
          style={{
            marginTop: "60px",
            fontSize: "15px",
            fontWeight: "bold",
            float: "right",
          }}
        >
          - By &quot;{quote.character}&quot;
        </p>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>{quote.anime} - AnimeQuotes</title>
        <meta name="description" content={quote.quote} />
        <meta property="og:title" content={quote.anime} />
        <meta property="og:description" content={quote.quote} />
      </Head>
      <div>{quotecontent}</div>
    </>
  );
};

export default Quote;

export async function getServerSideProps() {
  let quote = await fetch("https://animechan.vercel.app/api/random");
  quote = await quote.json();
  return {
    props: {
      quote,
    },
  };
}
