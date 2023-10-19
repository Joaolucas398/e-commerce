import CardRecentPosts from "@/components/card";

export default function Home() {
  return (
    <>
      <section>
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "1920px", height: "1080px" }}
            src="https://media.discordapp.net/attachments/992082604792750240/1160636182112243852/sala-de-streaming-vazia-com-computador-profissional-potente-teclado-e-mouse-rgb-fones-de-ouvido-e-microfone.jpg?ex=653561ad&is=6522ecad&hm=39daf72eeb185e8c90de541b231fc0cc3efe80daa7b425b41abd9484a76657e5&=&width=1029&height=579"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(192, 190, 190, 0.37)",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "80%",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          <p style={{ fontSize: "50px" }}>Bem-vindos</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            voluptatem voluptates fuga reiciendis placeat, nisi hic deserunt
            illo aliquam praesentium animi? Voluptatum reprehenderit animi sint
            placeat nemo enim, hic doloremque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aut, voluptatem voluptates fuga
            reiciendis placeat, nisi hic deserunt illo aliquam praesentium
            animi? Voluptatum reprehenderit animi sint placeat nemo enim, hic
            doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut, voluptatem voluptates fuga reiciendis placeat, nisi hic
            deserunt illo aliquam praesentium animi? Voluptatum reprehenderit
            animi sint placeat nemo enim, hic doloremque.
          </p>
        </div>
      </section>
      <section
        style={{ display: "flex", justifyContent: "center", margin: "8rem" }}
      >
        <div
          style={{
            display: "flex",
            bottom: 0,
            left: "50%",
            backgroundColor: "rgba(192, 190, 190, 0.37)",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "80%",
            textAlign: "center",
            fontSize: "18px",
            flexDirection: "column",
          }}
        >
          <p style={{ fontSize: "50px" }}>Bem-vindos</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            voluptatem voluptates fuga reiciendis placeat, nisi hic deserunt
            illo aliquam praesentium animi? Voluptatum reprehenderit animi sint
            placeat nemo enim, hic doloremque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aut, voluptatem voluptates fuga
            reiciendis placeat, nisi hic deserunt illo aliquam praesentium
            animi? Voluptatum reprehenderit animi sint placeat nemo enim, hic
            doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut, voluptatem voluptates fuga reiciendis placeat, nisi hic
            deserunt illo aliquam praesentium animi? Voluptatum reprehenderit
            animi sint placeat nemo enim, hic doloremque.
          </p>
        </div>
      </section>

      <section>
        <CardRecentPosts />
      </section>
    </>
  );
}
