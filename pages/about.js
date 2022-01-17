import Header from "../components/header";

export async function getServerSideProps(context) {
  const res = await fetch("https://onesongaday.herokuapp.com/onesongaday");
  let song = await res.json();
  song = song.data;

  console.log(context);

  return {
    props: { song }, // will be passed to the page component as props
  };
}

// export async function getStaticProps() {
//   console.log("NEW CALL DONE");
//   const res = await fetch("https://onesongaday.herokuapp.com/onesongaday");
//   let song = await res.json();
//   song = song.data;

//   return {
//     props: {
//       song,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 86400, // In seconds
//   };
// }

const About = ({ song }) => {
  console.log("rendering song: " + song);
  return (
    <>
      <Header />
      <h1>Song of the day</h1>
      <h2>
        {song.title} - {song.author}
      </h2>
    </>
  );
};

export default About;
