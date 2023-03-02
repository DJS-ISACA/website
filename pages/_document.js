import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>DJS ISACA - Cybersecurity Student Chapter of DJ Sanghvi </title>
        <meta
          name="title"
          content="DJS ISACA - Cybersecurity Student Chapter of DJ Sanghvi"
        />
        <meta
          name="description"
          content="Exploring cutting-edge technologies and their applications through a combination of workshops, lectures, and projects."
        />

        <meta property="og:type" content="website/" />
        <meta property="og:url" content="https://www.djsisaca.tech/" />
        <meta
          property="og:title"
          content="DJS ISACA - Cybersecurity Student Chapter of DJ Sanghvi"
        />
        <meta
          property="og:description"
          content="Exploring cutting-edge technologies and their applications through a combination of workshops, lectures, and projects."
        />
        <meta property="og:image" content="/banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.djsisaca.tech/" />
        <meta
          property="twitter:title"
          content="DJS ISACA - Cybersecurity Student Chapter of DJ Sanghvi"
        />
        <meta
          property="twitter:description"
          content="Exploring cutting-edge technologies and their applications through a combination of workshops, lectures, and projects."
        />
        <meta property="twitter:image" content="/banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
