import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
    title: string;
    description: string;
    canonical?: string;
};

const Meta = (props: IMetaProps) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <meta charSet="UTF-8" key="charset" />
                <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="valencia, carabobo, venezuela, maracay, hiking, caracas, senderismo, trail running, montañas, cerros, selva, rutas de montaña, organización, parque nacional san esteban, casupo" />

                <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
                <link rel="icon" type="image/png" sizes="32x32" href={`${router.basePath}/favicon-32x32.png`} key="icon32" />
                <link rel="icon" type="image/png" sizes="16x16" href={`${router.basePath}/favicon-16x16.png`} key="icon16" />
                <link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />

                <meta property="og:url" content="https://valenciahike.com" />
                <meta property="og:title" content={props.title} />
                <meta property="og:discription" content={props.description} />
                <meta property="og:site_name" content={AppConfig.title} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`${router.basePath}/assets/images/meta_image.jpg`} />
                <meta property="og:image:secure_url" content={`${router.basePath}/assets/images/meta_image.jpg`} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@valenciahike"></meta>
            </Head>
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-1H6P3VHPT3" />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-1H6P3VHPT3');
                `}}
            />
            <NextSeo
                title={props.title}
                description={props.description}
                canonical={props.canonical}
                openGraph={{
                    title: props.title,
                    description: props.description,
                    url: props.canonical,
                    locale: AppConfig.locale,
                    site_name: AppConfig.site_name,
                }}
            />
        </>
    );
};

export { Meta };
