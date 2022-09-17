import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <title>Rootz</title>
                <meta property="og:title" content="Rootz" />
                <meta
                    property="og:description"
                    content="Rootz a Halo lab Task."
                />
                <meta name="description" content="Rootz a Halo lab Task." />

                <meta
                    property="og:image"
                    content="https://halo-test.vercel.app/parrot.png"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
